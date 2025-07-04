import type { Web3Provider } from '@ethersproject/providers'
import { Protocol } from '@uniswap/router-sdk'
import { getClientSideQuote, getRouter } from 'lib/hooks/routing/clientSideSmartOrderRouter'

import { ClassicTrade, GetQuoteArgs, QuoteMethod, QuoteResult, QuoteState, TradeResult } from './types'
import { transformRoutesToTrade } from './utils'

type RoutingAPITradeQuoteReturn = {
  isError: boolean
  data?: {
    trade?: ClassicTrade
    state?: QuoteResult
  }
  currentData?: TradeResult
  error?: { status: string; error: any }
}

type QueryState = { returnValue: Promise<RoutingAPITradeQuoteReturn>; lastPolled: number }

const CACHE_SIZE = 1000
class QuoteCache {
  private data = new Map<string, QueryState>()
  public get = (key: string) => this.data.get(key)?.returnValue
  public set = (dataReturn: QueryState, key: string) => {
    if (this.data.size > CACHE_SIZE) {
      const keysIter = this.data.keys()
      // eslint-disable-next-line
      this.data.delete(keysIter.next().value!)
    }
    this.data.set(key, dataReturn)
    return dataReturn.returnValue
  }
  public clearIfNeeded = (key: string, pollingInterval: number) => {
    const time = Date.now()
    const value = this.data.get(key)
    if (time - (value?.lastPolled ?? 0) > pollingInterval) this.data.delete(key)
  }
}

const quoteCache = new QuoteCache()

const queryConfig = {
  // v2PoolSelection: {
  //   topN: 2, // default 3
  //   topNDirectSwaps: 1,
  //   topNTokenInOut: 2, //default 5
  //   topNSecondHop: 1, //default 2
  //   tokensToAvoidOnSecondHops: [
  //     '0xd46ba6d942050d489dbd938a2c909a5d5039a161', // AMPL on Mainnet
  //   ],
  //   topNWithEachBaseToken: 1, //default 2
  //   topNWithBaseToken: 3, // default 6
  // },
  v3PoolSelection: {
    topN: 2,
    topNDirectSwaps: 2,
    topNTokenInOut: 2, // default 3
    topNSecondHop: 1,
    topNWithEachBaseToken: 2, //default 3
    topNWithBaseToken: 3, // default 5
  },
  protocols: [Protocol.V3],
}

export const getRoutingApiQuote = async (
  args: GetQuoteArgs,
  web3Provider: Web3Provider | undefined,
  pollingInterval: number
): Promise<RoutingAPITradeQuoteReturn> => {
  const getQuote = async (): Promise<RoutingAPITradeQuoteReturn> => {
    try {
      const router = getRouter(args.tokenInChainId, web3Provider)
      const quoteResult = await getClientSideQuote(args, router.router, queryConfig)
      if (quoteResult.state === QuoteState.SUCCESS) {
        const trade = await transformRoutesToTrade(args, quoteResult.data, QuoteMethod.CLIENT_SIDE, router.provider)
        return {
          isError: false,
          data: { trade: trade.trade },
          currentData: { ...trade },
        }
      } else {
        return {
          isError: false,
          data: { state: quoteResult },
          currentData: undefined,
        }
      }
    } catch (error: any) {
      console.error('GetQuote failed on client:')
      console.error(error)
      return {
        isError: true,
        error: { status: 'CUSTOM_ERROR', error: error?.detail ?? error?.message ?? error },
        currentData: undefined,
      }
    }
  }
  const key = args.amount + args.tokenInAddress + args.tokenOutAddress + args.tradeType + args.tokenInChainId
  quoteCache.clearIfNeeded(key, pollingInterval)
  const returnValue = quoteCache.get(key)
  if (returnValue !== undefined) return await returnValue
  return await quoteCache.set({ lastPolled: Date.now(), returnValue: getQuote() }, key)
}
