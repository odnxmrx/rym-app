import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');
   const [arrayOfIds, setArrayOfIds] = useState([]);

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
      setArrayOfIds([
         ...arrayOfIds,
         Number(id)
      ])
      setId('')
   }

   // console.log(arrayOfIds);
   function getRandomCharacter() {
      const randomIndex = Math.floor(Math.random() * 826);
      // console.log(randomIndex);
      //base case
      if(!arrayOfIds.includes(randomIndex)) {
         // setId(randomIndex);
         setArrayOfIds([
            ...arrayOfIds,
            randomIndex
         ])
        return onSearch(randomIndex);
      } 
      //recursion
      getRandomCharacter();
   }

   return (
      <div>
         <input type='search' name='input' placeholder="Enter a character ID" value={id} onChange={handleChange} onKeyDown={handleKeyDown}/>
         <button onClick={()=> search(id)}>Add</button>
         <button onClick={()=> getRandomCharacter()}>Random</button>
      </div>
   );
}