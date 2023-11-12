import { useState } from "react";
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch, getRandomCharacter }) {

   const [id, setId] = useState('');

   //const handleChange = (evento) => {
   function handleChange(event) {
      setId(event.target.value)
   }

   //Enter key down listener
   function handleKeyDown(event) {
      if (event.key === 'Enter') {
         mySearch();
      }
   }

   const mySearch = () => {
      onSearch(id);
      setId('')
   }

   return (
      <div className={style.searchContainer}>
         <input type='search' name='input' placeholder="Enter a character ID" value={id} onChange={handleChange} onKeyDown={handleKeyDown} autoFocus />
         <button onClick={() => { mySearch(id) }}>Add</button>
         <button onClick={() => getRandomCharacter()}>Random</button>
      </div>
   );
}