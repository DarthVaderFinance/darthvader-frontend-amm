import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xA0b5940223Ee109d43Fbcd2B5f850d8000935790', // TODO
  [ChainId.BSCTESTNET]: ''
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
