import React from 'react'
import { PropTypes } from './types'

const Content = ({ data, number = 1 }: PropTypes) => (
  <section>
    <h3>
      test Dynamically loaded content with data : {data}[{number}]
    </h3>
  </section>
)

export default Content
