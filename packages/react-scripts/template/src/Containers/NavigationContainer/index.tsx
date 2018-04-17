import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import logo from '../../Utils/Media/logo.svg'

const NavigationContainer = () => (
  <div className="navigation-cnt">
    <img src={logo} alt="logo" />
    <NavLink to="/">Main</NavLink>
    <NavLink to="/content">Content</NavLink>
  </div>
)

export default NavigationContainer

