import './App.css'
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';

function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    if(!id) alert('Please, enter an ID.')
    if(characters.find((char) => char.id === Number(id))) return alert(`Character with id ${id} is already displayed.`)


    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-odnxmrx`)
    .then(
      ({ data }) => {
        if (data.name) { //verificar si obtuvimos la info
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('Character not found.');
        }
      }
    )
    //.catch( err => alert('Character not found')) //console.log(err.message))
  }

  const onClose = (id) => {
    console.log('recibi id ', id)
    let numericId = Number(id);
    let result = characters.filter((char) => char.id != numericId);
    return setCharacters(result);
    //setCharacters(characters.filter(char => char.id !== Number(id)))
  }


  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App
