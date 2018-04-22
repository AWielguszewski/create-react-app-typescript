import React from 'react'
import DynamicLanding from '../../Components/Landing/dynamic'
import store from '../../Utils/store'
import { observer } from 'mobx-react'
import './styles.css'

const LandingContainer = observer(() => (
  <section className="landing-cnt">
    <p>landing title</p>
    <DynamicLanding store={store} />
  </section>
))

export default LandingContainer
