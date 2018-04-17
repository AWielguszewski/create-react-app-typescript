import React from 'react'
import { PropTypes } from './types'

const Content = ({ data, number = 1 }: PropTypes) => (
  <section>
    test Dynamically loaded content with data : {data}[{number}]
  </section>
)

export default Content
