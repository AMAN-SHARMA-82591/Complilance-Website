/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './App.css';
import Section_1 from './Section-1/Section-1';
import Section_2 from './Section-2/Section-2';
import Overdue from './Section-1/Overdue'
import Upcoming from './Section-1/Upcoming'
import InProgress from './Section-1/InProgress'
import Total from './Section-1/Total'
import {Switch, Redirect, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
            <Route exact path="/overdue" component={Overdue}></Route>
            <Route exact path="/upcoming" component={Upcoming}></Route>
            <Route exact path="/inprogress" component={InProgress}></Route>
            <Route exact path="/total" component={Total}></Route>
            <Route exact render={()=>
              <div className="App">
                  <Section_1 />
                  <Section_2 />
              </div>
            }></Route>
            <Redirect to="/"></Redirect>

      </Switch>
        
    </>
  );
}

export default App;
