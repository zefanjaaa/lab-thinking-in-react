import React from "react"
import { useState } from "react"
import jsonData from './../data.json'
// return item.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase)


function SearchBar(props, {data}) {
    const [inputValue, setInputvalue] = useState('')

    let inputValueHandler = (e) => {
        let inputted = e.target.value.toLowerCase();
        setInputvalue(inputted)
       
    }

  
   
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
            {filteredItems.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
            </ul> */}
           
       </div>
)}


export default SearchBar