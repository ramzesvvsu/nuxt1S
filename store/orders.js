export const state = () => ({
  oredersList: [],
  prev: '',
  next: '',
})

export const mutations = {
  setOrderList(state, orders) {
    state.orderList = orders
  },
  setPrev(state, prev) {
    state.prev = prev
  },
  setNext(state, next) {
    state.next = next
  },
}

export const actions = {
  async getOrdersList({ commit, getters }, payload) {
    try {
      let url
      if (payload === undefined) {
        url = '/v1/orders/'
      } else if (payload === 'prev') {
        url = '/v1/orders?prev=' + getters.prev
      } else if (payload === 'next') {
        url = '/v1/orders?next=' + getters.next
      }
      const { errors, next, prev, results } = await this.$axios.$get(url)
      commit('setOrderList', results)
      commit('setPrev', prev)
      commit('setNext', next)
      if (errors.exists) {
        commit('setError', errors.title, { root: true })
      }
    } catch (e) {
      console.log(e)
      commit('setError', e, { root: true })
      throw e
    }
  },
}

export const getters = {
  ordersList: (state) => state.oredersList,
  prev: (state) => state.prev,
  next: (state) => state.next,
}
