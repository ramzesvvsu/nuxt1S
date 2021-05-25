export const state = () => ({
  loading: false,
  error: false,
  message: null,
})

export const mutations = {
  setLoading(state, payLoad) {
    state.loading = payLoad
  },
  setError(state, payLoad) {
    state.error = true
    state.message = payLoad
  },
  clearMessage(state) {
    state.error = false
    state.message = null
  },
}

export const actions = {
  nuxtServerInit({ dispatch }) {
    dispatch('auth/autoLogin')
  },
}

export const getters = {
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  },
  message(state) {
    return state.message
  },
}
