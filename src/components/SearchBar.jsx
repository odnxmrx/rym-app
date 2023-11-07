import { useState } from "react";

export default function SearchBar({onSearch, getRandomCharacter}) {
   
   const [id, setId] = useState('');

   //const handleChange = (evento) => {
   function handleChange(event) {
      setId(event.target.value)
   }
   
   //Enter key down listener
   function handleKeyDown(event) {
      if(event.key === 'Enter'){
         search();
      }
   }

   const mySearch = () => {
      onSearch(id);
      setId('')
   }

   return (
      <div>
         <input type='search' name='input' placeholder="Enter a character ID" value={id} onChange={handleChange} onKeyDown={handleKeyDown}/>
         <button onClick={()=> {mySearch(id)}}>Add</button>
         <button onClick={()=> getRandomCharacter()}>Random</button>
      </div>
   );
}