import React, { useContext } from 'react';
//import { OrderContext } from './OrderContext';

const SingleItem = (props) => {
  //const [order, setOrder] = useContext(OrderContext);

  const addToOrder = () => {
    console.log('clicked');
    // const singleItem = { name: props.menuItem, price: props.price };
    // setOrder(currentState => [...currentState, singleItem]);
  }
  return (
    <div>
      <a class="waves-effect waves-light btn-small" onClick={addToOrder}>{props.name}</a>
      <a class="waves-effect waves-light btn-small" onClick={addToOrder}>{props.price}</a>
    </div>
  )
}

export default SingleItem;
