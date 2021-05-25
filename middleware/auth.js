export default function ({ store, redirect }) {
  if (!store.getters['auth/isLoggedIn']) {
    redirect('/login?message=authError')
  }
}
