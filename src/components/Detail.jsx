import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    const navigate = useNavigate();

    const handleNavigateClick = () => {
        navigate('/home');
    }

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-odnxmrx`)
            .then(
                ({ data }) => {
                    if (data.name) { //que personaje exista
                        setCharacter(data);
                    } else {
                        window.alert('No characters with such ID');
                    }
                }
            );
        return setCharacter({}); //limpar/desmontar el componente
    }, [id]);

    return (
        <div>
            {
                character ? (
                    <div>
                        <h2>{character.name}</h2>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                        <img src={character.image} alt={`${character.name} photo`} />
                        <br />
                    </div>
                ) : ''
            }
            <button onClick={handleNavigateClick}>Go back</button>
        </div>
    )
}

export default Detail;