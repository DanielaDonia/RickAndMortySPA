
import { getCharacterDetails } from '../service/characterDetails-service.js'; 
import renderDetails from '../view/characterDetails-view.js';

export default async function init(characterId) {
    try {
      
        const characterDetails = await getCharacterDetails(characterId);

if (characterDetails.error) {
    console.log("Error:", characterDetails.error);
    
} else {
    renderDetails(characterDetails);
    
}



} catch (error) {
    console.log("error on obtain character", error);
}
}

