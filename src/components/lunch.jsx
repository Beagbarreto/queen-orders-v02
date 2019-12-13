import React, { Component } from 'react';
import LunchData from '../data/lunch.json';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import '../styles/App.css';

class Lunch extends Component {
 constructor(props) {
   super(props);
   this.state = {
     item: '',
     price: ''
   }
 }

 render() {
   return(
     <div>
       <h5>Almuerzo y Cena</h5>
       <div>
       <a class="waves-effect waves-light btn-small">Button</a>
         {LunchData.map((lunchDetail, index) => {
           return  <a class="waves-effect waves-light btn-small">{lunchDetail.item}</a>
         })}
       </div>
     </div>
   )
 }
};

export default Lunch;
