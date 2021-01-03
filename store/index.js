import publicKey from '@voken/public-key'
import vokenAddress from '@voken/address'

export const state = () => ({
  vpub: '',
  address: '',
  bufPublicKey: Buffer.from('')
})

export const mutations = {
  SET_PUBLIC_KEY(state, bufPublicKey) {
    state.bufPublicKey = bufPublicKey
    state.vpub = publicKey.toVPub(bufPublicKey)
    state.address = vokenAddress.fromPublicKey(bufPublicKey)
  }
}

export const actions = {
  SET_PUBLIC_KEY({ commit }, bufPublicKey) {
    commit('SET_PUBLIC_KEY', bufPublicKey)
  }
}
