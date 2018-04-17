import React from 'react'
import { PropTypes } from './types'
import { observer } from 'mobx-react'

const Landing = observer(
  ({ store: { isLogged, logIn, logOut, user } }: PropTypes) => (
    <section>
      <p>Dynamically loaded landing</p>
      {isLogged && <p>User: {user}</p>}
      <button onClick={isLogged ? logOut : logIn}>
        {isLogged ? 'Log out' : 'Log in'}
      </button>
    </section>
  )
)

export default Landing
