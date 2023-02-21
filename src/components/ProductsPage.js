import { useState } from "react";
import SearchBar from "./SearchBar";
import jsonData from './../data.json'
import ProductTable from "./ProductTable";


function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable itemList={products}/>
        </div>
    )

}

export default ProductsPage