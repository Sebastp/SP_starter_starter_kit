import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Landing from './Landing'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/"
              component={props => (
                <Landing {...props}/>
              )}
            />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}
