import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'
import BackBtn from '../BackBtn/BackBtn';

function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

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
            <BackBtn />
            {
                character ? (
                    <div className={style.detailContainer}>
                        <div className={style.leftContainer}>
                            <h1>{character.name}</h1>
                            <h3>Status: {character.status}</h3>
                            <h3>Species: {character.species}</h3>
                            <h3>Gender: {character.gender}</h3>
                            <h3>Origin: {character.origin?.name}</h3> </div>
                        <div className={style.rightContainer}>
                            <img src={character.image} alt={character.name} />
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default Detail;