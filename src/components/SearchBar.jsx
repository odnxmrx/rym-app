import { useState } from "react";

export default function SearchBar({onSearch}) {
   
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

   const search = () => {
      onSearch(id);
      setId('')
   }

   /* SOON To be: get random character.
   Possible solution:
   https://fontawesomeicons.com/fa/react-js-get-random-item-from-array
   */

   return (
      <div>
         <input type='search' name='input' placeholder="Enter a character ID" value={id} onChange={handleChange} onKeyDown={handleKeyDown}/>
         <button onClick={()=> search(id)}>Add</button>
      </div>
   );
}