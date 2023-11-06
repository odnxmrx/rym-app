import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useEffect, useState } from "react";

function Card({ myFavorites, addFav, removeFav, id, name, status, species, gender, origin, image, onClose }) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         console.log('que es id ??? ',id)
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image });
      }
   }

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
         <button onClick={() => onClose(id)}>X</button>
         <h4>{id}</h4>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={name} />
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
