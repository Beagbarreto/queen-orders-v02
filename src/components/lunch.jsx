import React, { Component } from 'react';
import PostData from '../data/itemsList.json';
import SingleItem from './singleItem.jsx';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import '../styles/App.css';

const Lunch = () => {

 const lunchMenu = PostData.filter(postDetail => postDetail['menuTime'] === 'afternoon');
 return(
   <div>
     <h5>Almuerzo y Cena</h5>
     <div class='left-align'>
      {lunchMenu.map((unit, index) => {
       return  <ul><a class="waves-effect waves-light btn-small">{unit.menuItem}</a></ul>
      })}
     </div>
   </div>
 )
};

export default Lunch;
