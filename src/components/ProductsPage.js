import React, { useState } from "react";
import SearchBar from "./SearchBar";
import jsonData from './../data.json'
import ProductTable from "./ProductTable";



function ProductsPage(props) {
    const [products, setProducts] = useState(jsonData)
    const [items, setItems] = useState()
    
    function searchThroughItems(waarde) {
        const filteredItems = products.filter((ele) => {
            return ele.name.toLowerCase().includes(waarde.toLowerCase())
            
        })
        setItems(filteredItems)
     
    }

   
    // function filterProduct(element) {
    // //    const spullen = [...products] 
   
    // const filteredItems = products2.filter((ele) => {
    //     return ele.name.toLowerCase().includes(element.toLowerCase())
    // })
    //     setProducts2(filteredItems)
    // }
  
  
//     function searchResult(element) {
       
   
        
//         const spullen= products.filter((item2) => {
//             return item2.name.toLocaleLowerCase().includes(element.toLocaleLowerCase())
//         })
//         setSpullen(spullen)
// }

   
    return (
        <div>
            <h1>IronStore</h1>
 
            <SearchBar searchThroughItems={searchThroughItems}/>
        
            <ProductTable itemList={products}/>
        </div>
    )

}

export default ProductsPage