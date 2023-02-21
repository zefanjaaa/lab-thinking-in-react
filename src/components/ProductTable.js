
import React from "react";
import ProductRow from "./ProductRow";

function ProductTable(props) {

  
    return (
        <div>
            <h3>ProductTable</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            {props.itemList.map(item => {
                return (
                    <ProductRow item={item} />
                )
            })}
            </table>
        </div>
    )
}

export default ProductTable