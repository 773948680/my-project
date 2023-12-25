import React from 'react'
import {Switch ,Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
            <HomePage />
            </Route>
        </Switch>
    </BrowserRouter>
  )
}
