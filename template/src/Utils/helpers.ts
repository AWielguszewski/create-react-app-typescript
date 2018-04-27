export const askPermission = (): Promise<any> => {
  //here we ask user for permission
  //it is a good idea to show the ask-permission pop up when the time is right
  //and user know why this happens and what can it change
  return new Promise((resolve, reject) => {
    const permissionResult = Notification.requestPermission(result => {
      resolve(result)
    })
    if (permissionResult) {
      permissionResult.then(resolve, reject)
    }
  }).then(permissionResult => {
    if (permissionResult !== 'granted') {
      throw new Error("We weren't granted permission.")
    }
  })
}

export const sendDefaultNotification = (): void => {
  //this is a simple function for sending a very basic notification
  navigator.serviceWorker
    .getRegistration()
    .then((registration: any) => {
      const title: string = 'Default notification'
      const options: { body: string } = {
        body: 'Simple piece of body text.\nSecond line of body text :)'
      }
      registration.showNotification(title, options)
    })
    .catch(error => console.error('Cant get registration object: ', error))
}
