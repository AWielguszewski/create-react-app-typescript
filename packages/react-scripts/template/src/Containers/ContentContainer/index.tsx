import React from 'react'
import DynamicContent from '../../Components/Content/dynamic'

const ContentContainer = () => (
  <section>
    <p>Content title</p>
    <DynamicContent data={'test'} />
  </section>
)

export default ContentContainer
