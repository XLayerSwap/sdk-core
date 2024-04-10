export enum ChainId {
    XLAYER_TESTNET = 195,
    XLAYER = 196
}

export const SUPPORTED_CHAINS = [
    ChainId.XLAYER,
    ChainId.XLAYER_TESTNET,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVAX = 'AVAX',
  ROOTSTOCK = 'RBTC',
  OKB = 'OKB'
}
