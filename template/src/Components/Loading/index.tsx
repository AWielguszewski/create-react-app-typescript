import React from 'react'
import { PropTypes } from './types'

const Loading = ({ error, pastDelay, timedOut }: PropTypes) => {
  if (error) {
    return <section>Error!</section>
  } else if (timedOut) {
    return <section>Timed out...</section>
  } else if (pastDelay) {
    return <section>Loading...</section>
  } else {
    return null
  }
}

export default Loading
