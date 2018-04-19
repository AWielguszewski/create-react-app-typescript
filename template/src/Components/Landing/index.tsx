import React from 'react'
import { PropTypes } from './types'
import { observer } from 'mobx-react'

const Landing = observer(
  ({ store: { isLogged, logIn, logOut, user } }: PropTypes) => (
    <section>
      <h3>Dynamically loaded landing</h3>
      {isLogged && <h3>User: {user}</h3>}
      <button onClick={isLogged ? logOut : logIn}>
        {isLogged ? 'Log out' : 'Log in'}
      </button>
    </section>
  )
)

export default Landing
