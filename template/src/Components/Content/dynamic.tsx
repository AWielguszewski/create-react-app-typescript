import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../Loading'
import { PropTypes } from './types'

const DynamicContent = Loadable<PropTypes, {}>({
  loader: () => import('./index'),
  render(loaded: any, props: PropTypes) {
    let Component = loaded.default
    return <Component {...props} />
  },
  loading: Loading,
  delay: 300,
  timeout: 10000
} as any)

export default DynamicContent
