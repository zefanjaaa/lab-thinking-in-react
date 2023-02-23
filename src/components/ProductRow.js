import React from 'react';

function ProductRow(props) {
  return (
    
      <tr>
        {props.item.inStock ? (
          <td>{props.item.name}</td>
        ) : (
          <td style={{ color: 'red' }}>{props.item.name} </td>
        )}
      <td>{props.item.price}</td>
      <td>{props.item.category}</td>
      </tr>
   
  );
}

export default ProductRow;
