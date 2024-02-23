var base_url = "https://rickandmortyapi.com/api";


export function getCharacterDetails(id){
    return fetchCharacterDetails(id);
    }
   
   

   
   
   
   const fetchCharacterDetails = async(id) => {
     const response = await fetch(`${base_url}/character/${id}`);
     const character = await response.json();
     console.log("fetch character by ID ok");
     return character;
   }
   