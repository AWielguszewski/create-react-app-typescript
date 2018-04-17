import React from 'react'
import DynamicContent from '../../Components/Content/dynamic'
import './styles.css'

const ContentContainer = () => (
  <section className={'content-cnt'}>
    <p>Content title</p>
    <DynamicContent data={'test'} />
  </section>
)

export default ContentContainer
