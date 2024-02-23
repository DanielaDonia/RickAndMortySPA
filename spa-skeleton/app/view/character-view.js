import { getNextPage, getPreviousPage,getCharacter } from "../service/character-service.js";
export default function render(characters) {
   
    //clean the view
$('#app').empty();
$('#backButton').remove();
$('#characterImageMoreDetails').remove();

//add

 if(characters){
     const banner = createBanner(bannerPath.imageBanner);
const search = searchBar(); 
const next = nextPage(nextButtonImagePath.nextButtonImage);
const previous = previousPage(previousPageButtonPath.previousButtonImage);

   if ($('#banner').length === 0) {
     $('body').prepend(search);
 $('body').prepend(next);
 $('body').prepend(previous);
    $('body').prepend(banner);
}

 $('#app').append(createCrads(characters));
 characterDetails(characters);
  }else{
      console.error("character data is undefined")

 }
}


const bannerPath = {
    imageBanner: 'https://sidesixmedia.com/media/1074/rickandmortyrickstaversearticleimage.jpg'
    //imageBanner: 'https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/tv/media/browser/rick_and_morty_s5_4320x1080.jpg'
 }

const createBanner = (imageBanner) =>{
   // const banner = $('<div>').addClass('banner');
   const image = $('<img>').addClass('banner').attr('src', imageBanner).attr('alt','banner Image');
   const banner = $('<div>').attr('id','banner').append(image);
   const bannerText = $('<span>').text('Rick and Morty');
console.log('bannerText');
  banner.append(bannerText);
  return banner;
}



const searchBar = () => {
    const input = $('<input>').attr({
        type: 'text',
        id: 'searchInput',
        placeholder: 'Search Character...'
    });
    const button = $('<button>').attr('id', 'searchButton').text('Hurry Up!');
    const searchContainer = $('<div>').addClass('search-container').append(input, button);

    button.on('click', function () {
        const characterName = $('#searchInput').val();
        if (characterName.trim() !== '') {
            try {
               const searhCharacter = getCharacter(characterName);
                render(searhCharacter);
            } catch (error) {
                console.error('Error searching character:', error);
            }
        }
    });

    return searchContainer;
};

const nextButtonImagePath = {
     nextButtonImage: "https://w7.pngwing.com/pngs/814/977/png-transparent-rick-sanchez-pocket-mortys-morty-smith-rick-and-morty-season-3-meeseeks-and-destroy-others-white-face-head.png"
}

const nextPage = (nextButtonImage) =>{
    const containerNextPage = $('<div>').addClass('next-container')
    const nextImage=$('<img>').attr('src',nextButtonImage).attr('alt', 'imageForNextPage');
    const nextPageButton =$('<button>').attr('id', 'nextPage').append(nextImage);
    const textNext = $('<h4>').text('Next').appendTo(containerNextPage);
   containerNextPage.append(nextPageButton);
    
    nextPageButton.on('click', function(){
    const nextPageCharacter = getNextPage();
    window.location.href = `#home/page=${nextPageCharacter}`;

      
    });
    return containerNextPage;
}


const previousPageButtonPath ={
    previousButtonImage:"https://i.pinimg.com/736x/09/cd/f0/09cdf0d63f5cf955d0179742722b19bf.jpg"
}

const previousPage =  (previousButtonImage) =>{
    const containerPreviousPage = $('<div>').addClass('previous-container');
    const previousImage=$('<img>').attr('src',previousButtonImage).attr('alt', 'imageForPreviousPage');
    const previousPageButton =$('<button>').attr('id','previousPage').append(previousImage);
    const textPrevious =$('<h4>').text('Previous').appendTo(containerPreviousPage);
    containerPreviousPage.append(previousPageButton);

    previousPageButton.on('click', function(){
        
        const previousPageCharacter =  getPreviousPage();
        window.location.href=`#home/page=${previousPageCharacter}`;
    });
    return containerPreviousPage;
}




const createCrads = (characters) => {
    const cards = [];
    characters.forEach(character =>{
        const card = createCharacterCard(character);
        cards.push(card);
    });
    return cards;
}


const createCharacterCard = (characters)=>{
    console.log("Caminho da imagem:", characters.image);
    const card = $('<div>').addClass('character-card');
const image = $('<img>').attr('src', characters.image).attr('alt', characters.name);
const characterImage = $('<div>').attr('id','characterImage').append(image);
const name = $('<h3>').text(characters.name).appendTo(card);


card.attr('data-id',characters.id);
console.log("teste1");
card.append(characterImage);
//entra aqui
console.log(card, "heyyyyy card");
card.attr('id', 'character'); 
card.hover(function() {
    $(this).toggleClass('rotate'); 
});

return card;

};


const characterDetails = (characters) => {
    characters.forEach(character => {
        const card = $(`[data-id="${character.id}"]`); //
        card.on('click', () => {
            showLoading();
            const characterId = character.id; 
            setTimeout(() =>{
                window.location.href = `#details/${characterId}`; 
           hideLoading();
            },3000);
            
            console.log(characterId, 'teste2');
        });
    });
};



const showLoading = () =>{

    $('#banner').hide();
    $('.next-container').hide();
    $('.previous-container').hide();
    $('.search-container').hide();
    $('#searchButton').hide();
    $('#searchInput').hide();
    $('.character-card').hide();

  $('#loading').show();

    const loadingImage=$('<img>').attr('src', 'https://www.icegif.com/wp-content/uploads/2023/04/icegif-1320.gif').attr('alt','Loading...');
    const loadingContainer =$('<div>').attr('id','loading').append(loadingImage);
    const loadingText = $('<p>').text('LOADING...').appendTo(loadingContainer);
   $('#app').children().hide();
    $('#app').append(loadingContainer);

}

const hideLoading = () =>{
    $('#loading').hide();
}