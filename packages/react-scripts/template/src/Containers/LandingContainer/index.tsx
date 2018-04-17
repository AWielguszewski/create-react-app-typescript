import React from 'react'
import DynamicLanding from '../../Components/Landing/dynamic'
import store from '../../Utils/store'
import { observer } from 'mobx-react'

const LandingContainer = observer(() => (
  <section>
    <p>Content title</p>
    <DynamicLanding store={store} />
  </section>
))

export default LandingContainer
