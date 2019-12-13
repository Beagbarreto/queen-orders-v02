import React, {Component} from 'react';
import Breakfast from './breakfast.jsx';
import Lunch from './lunch.jsx';
import 'materialize-css/dist/css/materialize.min.css';

class TakeOrders extends Component {
  render() {
    return (
      <div class='container'>
        <div class="row">
          <div class="col s6">
            <a class="waves-effect waves-light btn">Desayuno</a>
            <a class="waves-effect waves-light btn">Almuerzo y Cena</a>
          </div>
          <div class="col s6">Aqui se agregan los pedidos</div>
        </div>
      </div>
    )
  }
}

export default TakeOrders;
