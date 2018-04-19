export interface PropTypes {
  store: {
    user: string
    isLogged: boolean
    logIn: () => void
    logOut: () => void
  }
}
