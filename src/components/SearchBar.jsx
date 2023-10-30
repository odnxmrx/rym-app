export default function SearchBar({onSearch}) {
   // console.log(onSearch)
   return (
      <div>
         <input type='search' />
         <button onClick={()=> onSearch('ID del personaje')}>Agregar</button>
      </div>
   );
}
