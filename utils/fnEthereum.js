// import Web3 from 'web3'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const chainId2NetworkName = function (chainId) {
  switch (chainId) {
    case 1:
      return 'MainNet'
    case 3:
      return 'Ropsten'
    case 4:
      return 'Rinkeby'
    case 5:
      return 'Goerli'
    case 42:
      return 'Kovan'
    default:
      return 'Unknown'
  }
}

const address2Abbr = function (address, head = 6, tail = 4) {
  if (address) {
    return address.slice(0, head) + '...' + address.slice(-tail)
  }

  return ''
}


const isZeroAddress = function (address) {
  return address === '0x0000000000000000000000000000000000000000'
}

export default {
  ZERO_ADDRESS: ZERO_ADDRESS,
  chainId2NetworkName: chainId2NetworkName,
  address2Abbr: address2Abbr,
  isZeroAddress: isZeroAddress,
}
