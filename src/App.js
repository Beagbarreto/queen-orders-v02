import React from 'react';
import Breakfast from './components/breakfast.jsx';
import Lunch from './components/lunch.jsx';
import AddItem from './components/addItems.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import './styles/App.css';

export default function App() {
  return (
    <div class='App'>
      <nav>
        <div class="nav-wrapper">
          <h3 class="center-align">Burguer Queen</h3>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col s6">
            <Router>
              <div>
                <div>
                  <Link to="/"><a class="waves-effect waves-light btn">Desayuno</a></Link>
                  <Link to="/menus"><a class="waves-effect waves-light btn">Almuerzo y Cena</a></Link>
                </div>
                <Switch>
                  <Route path="/menus">
                    <Menus />
                  </Route>
                  <Route path="/">
                    <Desayuno />
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
          <div class="col s6">< AddItem /></div>
        </div>
      </div>
    </div>
  );
}

function Desayuno() {
  return < Breakfast />;
}

function Menus() {
  return < Lunch />;
}
