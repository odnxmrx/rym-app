import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

function Favorites() {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false)
    const myFavorites = useSelector(state => state.myFavorites);

    function handleOrder(event){
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    function handleFilter(event) {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div>
            <h3>Favorites</h3>
            <div>
                <select name="filter" id="" onChange={handleFilter} defaultValue='All'>
                    <option value="All">All genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option> {/* API 'unknown' es en minusculas */}
                </select>

                <select name="order" id="" onChange={handleOrder} defaultValue='orderChar'>
                    <option value="orderChar" disabled>Order</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>

            </div>
            <div>
                {
                    !myFavorites.length ? ('Your favorite R&M characters will display here.') : (
                        myFavorites?.map((char) => {
                            return (
                                <Card
                                    key={char.id}
                                    id={char.id}
                                    name={char.name}
                                    status={char.status}
                                    species={char.species}
                                    gender={char.gender}
                                    origin={char.origin}
                                    image={char.image}
                                />
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}


export default Favorites;
// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }
// export default connect(mapStateToProps, null)(Favorites);