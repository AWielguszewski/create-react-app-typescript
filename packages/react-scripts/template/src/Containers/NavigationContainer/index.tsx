import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationContainer = () => (
  <div>
    <NavLink to="/">Main</NavLink>
    <NavLink to="/content">Content</NavLink>
  </div>
)

export default NavigationContainer
