import { observable, action, computed } from 'mobx'

//default store object
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

//named store object for notifications
class Permissions {
  constructor() {
    //check permission when app loads
    this.checkPermission()
  }
  @action
  checkPermission = (): void => {
    'Notification' in window
      ? (this.permisionStatus = {
          enabled: true,
          status: (Notification as any).permission
        })
      : (this.permisionStatus = { enabled: false, status: '' })
  }
  @observable permisionStatus: { enabled: boolean; status: string }
}

const store = new Store()
export const permissions = new Permissions()

export default store
