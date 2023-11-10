import './App.css'
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome/Welcome';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';

function App() {

  const URL_API = 'https://rym2.up.railway.app/api/character';
  const EMAIL_USER = 'armando@henry.com';
  const PASSWORD_USER = 'Password1';
  // const EMAIL_USER = '';
  // const PASSWORD_USER = '';

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const [arrayOfIds, setArrayOfIds] = useState([]);

  const currentLocation = useLocation(); //me interesa currentLocation.pathname

  const navigate = useNavigate();

  function onSearch(id) {
    if (!id) return alert('Please, enter an ID.')
    if (characters.find((char) => char.id === Number(id))) return alert(`Character with id ${id} is already displaying.`)

    setArrayOfIds([
      ...arrayOfIds,
      Number(id)
    ])

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
      .catch(err => alert('Character not found')) //console.log(err.message))
  }

  const onClose = (id) => {
    let numericId = Number(id);
    let result = characters.filter((char) => char.id != numericId);

    let deleteFromArrayOfId = arrayOfIds.filter((item) => item !== numericId)
    setArrayOfIds(deleteFromArrayOfId);

    return setCharacters(result);
    //setCharacters(characters.filter(char => char.id !== Number(id)))
  }

  function login(userData) {
    if (userData.email === EMAIL_USER && userData.password === PASSWORD_USER) {
      setAccess(true);
      navigate('/home');
    }
  }

  function logout() {
    setAccess(false);
    // setCharacters([]);
    //window.location.replace('/'); //reload
    navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  // console.log(arrayOfIds);
  function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * 826);
    // console.log(randomIndex);
    //base case
    if (!arrayOfIds.includes(randomIndex)) {
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
    <div className='fullContainer'>

      {
        // currentLocation.pathname !== '/' ? <Nav onSearch={onSearch} logout={logout} /> : null
        currentLocation.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} getRandomCharacter={getRandomCharacter} />
      }

      <Routes>
        <Route path='/' element={<Welcome login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;