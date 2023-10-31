import Card from './Card';

export default function Cards({characters, onClose}) {
   
   return (
      <div>
      {
         characters.map((char) => {
            return (
               <Card
                  key={char.id}
                  id={char.id}
                  name={char.name}
                  status={char.status}
                  species={char.species}
                  gender={char.gender}
                  origin={char.origin.name}
                  image={char.image}
                  onClose={onClose}
               />
            )
         })
      }
   </div>
   );
}