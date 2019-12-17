import React from 'react';
import TakeOrder from './components/TakeOrder.jsx';
import Login from './auth/login.jsx';
import Home from './components/home.jsx';
import Orders from './components/order.jsx';
import AddItem from './components/addItems.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import './styles/App.css';
//
function App() {
//   return (
//     <div class='App'>
//       <nav>
//         <div class="nav-wrapper">
//           <h3 class="center-align">Burguer Queen</h3>
//         </div>
//       </nav>
//       <div class="container">
//         <TakeOrder />
//       </div>
//     </div>
//   );
// }
//


  return (
      <Router>
        <div>
          <h2>Burger Queen</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/orders'} className="nav-link">Orders</Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/takeOrder'} className="nav-link">Take Orders</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/orders' component={Orders} />
              <Route path='/login' component={Login} />
              <Route path='/takeOrder' component={TakeOrder} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
