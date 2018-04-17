import { observable, action, computed } from 'mobx'

class Store {
  @observable user: string = ''
  @computed
  get isLogged(): boolean {
    return !(this.user === '')
  }
  @action
  logIn = (): void => {
    this.user = 'user@user.com'
  }
  @action
  logOut = (): void => {
    this.user = ''
  }
}

const store = new Store()

export default store
