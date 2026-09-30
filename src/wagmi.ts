import { http, createConfig } from 'wagmi'
import { mainnet, polygon, bsc, arbitrum } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

// Alchemy Credentials provided by user
export const ALCHEMY_API_KEY = 'naALVt_WPDCllRCx1N35I';
export const ALCHEMY_GAS_POLICY_ID = '11f3859f-a702-441c-b5d2-2d31e2400c4b';
export const PRODUCTION_PROFIT_WALLET = '0xa1D68578503c9201B56F7Ae357Ff37D2f0071259';

export const config = createConfig({
  chains: [mainnet, polygon, bsc, arbitrum],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`),
    [polygon.id]: http(`https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`),
    [arbitrum.id]: http(`https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`),
    [bsc.id]: http(), // Fallback for BSC
  },
})
