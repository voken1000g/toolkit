const BASE_URL_MAINNET = 'https://etherscan.io'
const BASE_URL_ROPSTEN = 'https://ropsten.etherscan.io'
const BASE_URL_RINKEBY = 'https://rinkeby.etherscan.io'
const BASE_URL_GOERLI = 'https://goerli.etherscan.io'
const BASE_URL_KOVAN = 'https://kovan.etherscan.io'


const block = function (blockNumber, chainId = 1) {
  switch (chainId) {
    case 1:
      return BASE_URL_MAINNET + '/block/' + blockNumber
    case 3:
      return BASE_URL_ROPSTEN + '/block/' + blockNumber
    case 4:
      return BASE_URL_RINKEBY + '/block/' + blockNumber
    case 5:
      return BASE_URL_GOERLI + '/block/' + blockNumber
    case 42:
      return BASE_URL_KOVAN + '/block/' + blockNumber
    default:
      return 'javascript:void()'
  }
}


const tx = function (txHash, chainId = 1) {
  switch (chainId) {
    case 1:
      return BASE_URL_MAINNET + '/tx/' + txHash
    case 3:
      return BASE_URL_ROPSTEN + '/tx/' + txHash
    case 4:
      return BASE_URL_RINKEBY + '/tx/' + txHash
    case 5:
      return BASE_URL_GOERLI + '/tx/' + txHash
    case 42:
      return BASE_URL_KOVAN + '/tx/' + txHash
    default:
      return 'javascript:void()'
  }
}


const address = function (address, chainId = 1) {
  switch (chainId) {
    case 1:
      return BASE_URL_MAINNET + '/address/' + address
    case 3:
      return BASE_URL_ROPSTEN + '/address/' + address
    case 4:
      return BASE_URL_RINKEBY + '/address/' + address
    case 5:
      return BASE_URL_GOERLI + '/address/' + address
    case 42:
      return BASE_URL_KOVAN + '/address/' + address
    default:
      return 'javascript:void()'
  }
}


const token = function (address, chainId = 1) {
  switch (chainId) {
    case 1:
      return BASE_URL_MAINNET + '/token/' + address
    case 3:
      return BASE_URL_ROPSTEN + '/token/' + address
    case 4:
      return BASE_URL_RINKEBY + '/token/' + address
    case 5:
      return BASE_URL_GOERLI + '/token/' + address
    case 42:
      return BASE_URL_KOVAN + '/token/' + address
    default:
      return 'javascript:void()'
  }
}

export default {
  block: block,
  tx: tx,
  address: address,
  token: token,
}
