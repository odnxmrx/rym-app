import './App.css'
import { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import Form from './components/Form.jsx';

function App() {

  const URL_API = 'https://rym2.up.railway.app/api/character';
  const EMAIL_USER = 'armando@henry.com';
  const PASSWORD_USER = 'Password1';

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const currentLocation = useLocation(); //me interesa currentLocation.pathname

  const navigate = useNavigate();

  function onSearch(id) {
    if(!id) return alert('Please, enter an ID.')
    if(characters.find((char) => char.id === Number(id))) return alert(`Character with id ${id} is already displaying.`)

    axios(`${URL_API}/${id}?key=pi-odnxmrx`)
    .then(
      ({ data }) => {
        if (data.name) { //verificar si obtuvimos la info
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('Character not found.');
        }
      }
    )
    .catch( err => alert('Character not found')) //console.log(err.message))
  }

  const onClose = (id) => {
    let numericId = Number(id);
    let result = characters.filter((char) => char.id != numericId);
    return setCharacters(result);
    //setCharacters(characters.filter(char => char.id !== Number(id)))
  }


  function login(userData) {
    if(userData.email === EMAIL_USER && userData.password === PASSWORD_USER) {
      setAccess(true);
      navigate('/home');
    } 
  }

  function loguot(){
    setAccess(false);
    // setCharacters([]);
    window.location.replace('/'); //reload
    // navigate('/');
  }

  useEffect(()=>{
    !access && navigate('/');
  }, [access]);
  // console.log(navigate);
  
  return (
    <div className='App'>

      {
        currentLocation.pathname !== '/' ? <Nav onSearch={onSearch} logout={loguot} /> : null
      }

      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;