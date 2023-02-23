import React from "react"
import { useState } from "react"
import jsonData from './../data.json'
// return item.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase)


function SearchBar(props) {
    const [inputValue, setInputvalue] = useState('')
    // const [products2, setProducts2] = useState(jsonData)
    // let inputValueHandler = (e) => {
    //     let inputted = e.target.value.toLowerCase();
    //     setInputvalue(inputted)
       
    // }

    function inputValueHandler(e) {
        setInputvalue(e.target.value)
       
    }
    // const inputValueHandler = (event) => {
    //     setInputvalue(event.target.value)
    // }
   
        //    const spullen = [...products] 
       
      
            // setProducts2(filteredItems)
        

  
   
    // const [searchTerm, setSearchTerm] = useState('')
    

    // function searchResult2(event) {
    //     setSearchTerm(event.target.value)
     
        

// const searchResulted = event => {
//     setSearchTerm(event.target.value)
//     props.searchResult(event.target.value)
    
// }
    
    return (
        <div>
            <h3> Searchbar goes here</h3>
    <input type='text' onChange={ inputValueHandler} value={inputValue} />
            {/* <ul>
            {filteredItems.map((item,index) => (
                <li key={item.id}>{item.name} </li>
            ))}
            </ul>
            */}
       </div>
)}


export default SearchBar