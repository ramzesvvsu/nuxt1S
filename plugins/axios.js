export default function ({ $axios, store }) {
  $axios.interceptors.request.use((request) => {
    if (!request.headers.common.Autorization) {
      request.headers.common.Autorization = store.getters['auth/token']
      return request
    }
    return request
  })
}
