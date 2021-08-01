import React from 'react'
import {Redirect,Switch,Route} from 'react-router-dom'
import Home from '../Section-2/Home2'
import People from '../Section-2/People2'
import Upload from '../Section-2/Upload2'
import Settings from '../Section-2/Settings2'
import Community from '../Section-2/Community2'
import '../App.css'
import LogInAdmin from './LogInAdmin'

function Section_2() {
    return (
        <div className="section-2">
                <LogInAdmin />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/community" component={Community}></Route>
                    <Route exact path="/people" component={People}></Route>
                    <Route exact path="/publish" component={Upload}></Route>
                    <Route exact path="/settings" component={Settings}></Route>
                    <Redirect to="/"></Redirect>
                </Switch>
        </div>
    )
}

export default Section_2
