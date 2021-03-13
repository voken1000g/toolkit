// import Web3 from 'web3'

const chainId2NetworkName = function(chainId) {
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

const address2Abbr = function (address, length = 6) {
  if (address) {
    return address.slice(0, length) + '...' + address.slice(-length)
  }

  return ''
}

export default {
  chainId2NetworkName: chainId2NetworkName,
  address2Abbr: address2Abbr,
}
