import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');

   //const handleChange = (evento) => {
   function handleChange(event) {
      // console.log(event.target.value)
      setId(event.target.value)
   }
   
   const search = () => {
      onSearch(id);
      setId('')
   }

   return (
      <div>
         <input type='search' name='input' value={id} onChange={handleChange}/>
         <button onClick={()=> search(id)}>Agregar</button>
      </div>
   );
}
