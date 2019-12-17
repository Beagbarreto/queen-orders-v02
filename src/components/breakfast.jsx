import React, { Component } from 'react';
import PostData from '../data/breakfast.json';
import 'materialize-css/dist/css/materialize.min.css';
// import axios from 'axios';
import '../styles/App.css';

class Breakfast extends Component {
 constructor(props) {
   super(props);
   this.state = {
     item: '',
     price: ''
   }
 }

 // componentDitMount() {
 //   axios.get('endpoint for data will eventually come from db')
 //     .then(response => {
 //       console.log({ some: response.data.message });
 //     })
 //     .catch(error => {
 //       console.log(error);
 //     });
 // }

 render() {
   return(
     <div>
       <h5>Desayunos</h5>
       <div class='left-align'>
         {PostData.map((postDetail, index) => {
           return  <ul><a class="waves-effect waves-light btn-small">{postDetail.item}</a></ul>
         })}
       </div>
     </div>
   )
 }
}

export default Breakfast;
