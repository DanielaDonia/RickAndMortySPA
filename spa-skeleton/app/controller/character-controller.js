import { currentPage,getCharacter } from '../service/character-service.js';
import render from '../view/character-view.js';


export default async function init() {
    try{
        const character = await getCharacter({
            page: currentPage,
        });
    render(character);
    console.log(render(character), "aqui");
    console.log(currentPage,"current page");
    console.log("character-controller")
    }catch(error) {
        console.log("error on obtain character" , error)
    }
    
}


