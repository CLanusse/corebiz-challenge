import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom'
import { CartScreen } from '../components/CartScreen/CartScreen'
import { Footer } from '../components/Footer/Footer'
import { HomeScreen } from '../components/HomeScreen/HomeScreen'
import { NavBar } from '../components/NavBar/NavBar'

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <NavBar/>
        
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route exact path="/cart" component={CartScreen}/>
                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>

            <Footer/>
        </BrowserRouter>
    )
}
