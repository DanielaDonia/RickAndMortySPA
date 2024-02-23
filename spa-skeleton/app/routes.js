import characterController from './controller/character-controller.js';
import characterDetailsController from './controller/characterDetails-controller.js'

export const home = {
    hash: '#home',
    init: characterController,
    
}


export const details = 

    {hash: '#details',
    init: characterDetailsController,
params:{
    id:{
        type:"string",
required:true,
}
}}





