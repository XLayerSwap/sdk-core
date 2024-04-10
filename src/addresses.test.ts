import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for xlayer', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.XLAYER)
      expect(address).toEqual('0x2626664c2603336E57B271c5C0b26F421741e481')
    })
  })
})
