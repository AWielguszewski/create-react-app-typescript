import React from 'react'
import { observer } from 'mobx-react'
import DynamicContent from '../../Components/Content/dynamic'
import { askPermission, sendDefaultNotification } from '../../Utils/helpers'
import { permissions } from '../../Utils/store'
import './styles.css'

const ContentContainer = observer(() => {
  const { enabled, status } = permissions.permisionStatus
  return (
    <section className={'content-cnt'}>
      <p>Content title</p>
      <DynamicContent data={'test'} />
      <h3>
        Notifications are {enabled ? 'available' : 'inavailable'} in this
        browser
      </h3>
      {
        //here we have a place for handling Notifications
        //user can enable notifications, check their status in the browser
        //and send default notification if permission is granted
      }
      {enabled && <h3>Current status for permission: {status}</h3>}
      {enabled &&
        status !== 'granted' && (
          <button
            onClick={() =>
              askPermission().then(() => permissions.checkPermission())
            }
          >
            Ask for permission
          </button>
        )}
      {enabled &&
        status === 'granted' &&
        'serviceWorker' in navigator && (
          <button onClick={sendDefaultNotification}>Send notification</button>
        )}
    </section>
  )
})

export default ContentContainer
