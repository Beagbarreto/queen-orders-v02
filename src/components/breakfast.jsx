import React from 'react';
//import PostData from '../data/breakfast.json';
import PostData from '../data/itemsList.json';
import 'materialize-css/dist/css/materialize.min.css';
// import axios from 'axios';
import '../styles/App.css';
import SingleItem from './singleItem.jsx';

const Breakfast = () => {

  const addToOrder = () => {console.log('will be adding')}
 const breakfastMenu = PostData.filter(postDetail => postDetail['menuTime'] === 'morning');
 return(
   <div>
     <h5>Desayunos</h5>
     <div class='left-align'>
       {breakfastMenu.map((unit, index) => {
        return  <ul><a class="waves-effect waves-light btn-small" onClick={addToOrder}>{unit.menuItem}</a></ul>
       })}
     </div>
   </div>
 )
}

export default Breakfast;
