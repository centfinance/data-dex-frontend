# Vana DataDex – Swap & Liquidity UI

This is the official frontend for the **Vana DataDex**, a decentralized interface for swapping tokens and managing liquidity on the VANA network.

It is a fork of [Uniswap Interface v4.266.2](https://github.com/Uniswap/interface) — the last version that:
- Does **not include UI fee logic**
- Supports **fully local routing**

---

## 🚀 Features

- ✅ **Uniswap V3 core functionality**: swap, pool creation, liquidity management
- 🎯 **VANA network integration** (RPC, token pricing, custom chain config)
- 🧠 **Privacy-first**: all analytics tracking and external API calls removed
- 💡 **Local routing**: no external relayers or UniswapX dependency
- 🧼 Cleaned up: removed Uniswap-specific branding, popups, and external UX
- 🛠 Settings moved to a cleaner location (formerly mini portfolio)

---

## 🔧 Getting Started

> You must have [Node.js v 18.20.6](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

# Install dependencies
```bash
yarn
```

# Start local development server
```bash
yarn start
```
App will be served at:
http://localhost:3000

---

## 📁 Project Structure

src/ – main application logic

public/ – static assets (favicon, manifest, logos)

abis/ – on-chain contract interfaces (ERC20, routers, etc.)

constants/ – chain config, tokens, supported features

---

## 📦 Tokenlist Integration

Token list is expected to follow the Uniswap Token List specification.

## 🛡 License

This project is licensed under GPL-3.0.

## 🙌 Acknowledgements

This interface is based on the amazing work of Uniswap Labs.
We thank them for making the original version open source.

## 🌐 Learn More

Main Site: https://datadex.com

Analytics Dashboard: https://info.datadex.com/#/vana

Tokenlist Repo: https://github.com/vanadatadex/tokenlist
