import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.mainContainer}>
         <div className={style.container}>

            {
               characters.map((char) => {
                  return (
                     <Card
                        key={char.id}
                        id={char.id}
                        onClose={onClose}
                        image={char.image}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                     />
                  )
               })
            }
         </div>
      </div>
   )
}