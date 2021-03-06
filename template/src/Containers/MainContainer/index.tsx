import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationContainer from '../NavigationContainer'
import LandingContainer from '../LandingContainer'
import ContentContainer from '../ContentContainer'
import './styles.css'

export default class MainContainer extends React.Component {
  render() {
    return (
      <section className="main-cnt">
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/content" component={ContentContainer} />
          <Route component={LandingContainer} />
        </Switch>
      </section>
    )
  }
}