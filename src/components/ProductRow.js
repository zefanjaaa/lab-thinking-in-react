import React from 'react';

function ProductRow(props) {
  return (
    <div>
      <tr>
        {props.item.inStock ? (
          <td>{props.item.name}</td>
        ) : (
          <td style={{ color: 'red' }}>{props.item.name} </td>
        )}
        <td>{props.item.price}</td>
      </tr>
    </div>
  );
}

export default ProductRow;
