import './App.css'
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

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
    let numericId = Number(id);
    let result = characters.filter((char) => char.id != numericId);
    return setCharacters(result);
    //setCharacters(characters.filter(char => char.id !== Number(id)))
  }

  return (
    <div className='App'>

      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App
