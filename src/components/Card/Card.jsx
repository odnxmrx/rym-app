import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import style from './Card.module.css'

function Card({ allCharacters, onClose, id, name, status, species, gender, origin, image, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);
   const { pathname } = useLocation();

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ onClose, id, name, status, species, gender, origin, image });
      setIsFav(!isFav); //cambia/invierte el estado, dado cualquier caso
   }

   //comprobar que el personaje de la Card ya está en favoritos (en el estado global). (Para cosnserver el boton rojo fav)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, allCharacters]);

   return (
      <div className={style.myCardContainer}>
         <div className={style.mainContent}>

            {
               pathname === '/home' ? <button className={style.closeBtn} onClick={() => { onClose(id), setIsFav(false), removeFav(id) }}>X</button> : null
            }

            <Link to={`/detail/${id}`}>
               <img src={image} alt={`${name} profile picture`} />
            </Link>
            <div className={style.moreInfo}>
               <Link to={`/detail/${id}`}>
                  <small>ID {id}</small>
                  <h3>{name}</h3>
               </Link>
               {
                  isFav ? (
                     <button className={style.spanBtn} onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className={style.spanBtn} onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>

            {/* <h2>{status}</h2> */}
            <div className={style.moreInfo}>
               <span>Species: {species}</span>
               <span>Gender: {gender}</span>

            </div>
            {/* <h2>{origin}</h2> */}
         </div>
      </div>
   );
}

//permite acceder al estado global; recibe 'state' por param
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
      allCharacters: state.allCharacters
   }
}

//aunque funcionan; estos se usan con componentes de Clase
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      //addFav recibe 'character' por param, en file 'actions.js'
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);