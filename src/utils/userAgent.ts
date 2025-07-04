import { UAParser } from 'ua-parser-js'

const parser = new UAParser(window.navigator.userAgent)
const { type } = parser.getDevice()
// const { name } = parser.getBrowser()

export const isMobile = type === 'mobile' || type === 'tablet'
const platform = parser.getOS().name
// eslint-disable-next-line
export const isIOS = platform === 'iOS'
// eslint-disable-next-line
export const isNonIOSPhone = !isIOS && type === 'mobile'

// export const isMobileSafari = isMobile && isIOS && name?.toLowerCase().includes('safari')
