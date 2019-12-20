import React from 'react';

export const OrderContext = React.createContext();

export const OrderProvider = (props) => {
  return(
    {props.children}
  )
};
