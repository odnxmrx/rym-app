import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useEffect, useState } from "react";

function Card({ myFavorites, addFav, removeFav, id, name, status, species, gender, origin, image, onClose }) {

   const [isFav, setIsFav] = useState(false);

   const { pathname } = useLocation();

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image });
      }
   }

   //comprobar que el personaje de la Card ya está en favoritos (en el estado global). (Para cosnserver el boton rojo fav)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {
            pathname === '/home' ? <button onClick={() => {onClose(id), removeFav(id)}}>X</button> : null
         }

         <h4>{id}</h4>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={`${name} profile picture`} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (cha) => {
         dispatch(addFav(cha));
      },
      removeFav: function (id) {
         dispatch(removeFav(id));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
