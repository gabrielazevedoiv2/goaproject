import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import DashboardPage from './dashboard';
import Sidebar from '../Components/Sidebar/sidebar';

export default function MainPage (props) {
    return (
        <div className="columns">
          <div className="column is-2">
            <Sidebar></Sidebar>
          </div>
          <div className="column">
            <Switch>
              <Route path="/dashboard">
                <DashboardPage />
              </Route>
            </Switch>
          </div>
        </div>
    )
}
