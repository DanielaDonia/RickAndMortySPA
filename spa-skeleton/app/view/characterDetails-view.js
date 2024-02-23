
export default function renderDetails(character) {
  $('body').find('button').remove();
 
$('#app').empty();
$('#characterImageMoreDetails').remove();
$('#banner').remove();
$('.search-container').remove();
$('previous-container').remove();
$('next-container').remove();
$('.character-Moredetails').remove();

  const banner = createBanner(bannerPath.imageBanner, character.name);
  
  if ($('#banner').length === 0) {    
    $('body').prepend(banner);
}

  const characterDetails = createCharacterDetails(character);
  $('body').append(characterDetails);

    const backButton = $('<button>').text('GO BACK').attr('id', 'backButton');
    backButton.on('click', function() {
      window.history.back();
    });
    $('body').append(backButton);

    
  }

const bannerPath = {
   imageBanner: 'https://sidesixmedia.com/media/1074/rickandmortyrickstaversearticleimage.jpg'
  //    //imageBanner: 'https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/tv/media/browser/rick_and_morty_s5_4320x1080.jpg'
  }

const createBanner = (imageBanner, characterName) => {
  console.log("Creating banner for character:", characterName);

  const image = $('<img>').addClass('banner').attr('src', imageBanner).attr('alt', 'banner Image');
  const banner = $('<div>').attr('id', 'banner').append(image);
  const bannerText = $('<span>').text(characterName); 
  banner.append(bannerText);
  console.log("Banner created successfully");
  return banner;
}

function createCharacterDetails(character) {
  console.log("Creating details for character:", character);
  const characterDetails = $('<div>').addClass('character-Moredetails');
  const image = $('<img>').attr('src', character.image).attr('alt', character.name);
  const characterImage = $('<div>').attr('id', 'characterImageMoreDetails').append(image);
  characterDetails.append(characterImage);
  
  const status =$('<h3>').text('Status: '+ character.status).appendTo(characterDetails);
  const species =$('<h3>').text('Species: '+ character.species).appendTo(characterDetails);
  const gender =$('<h3>').text('Gender: '+ character.gender).appendTo(characterDetails);
  const origin =$('<h3>').text('Origin: '+ character.origin.name).appendTo(characterDetails);
  const location =$('<h3>').text('Last seen: '+ character.location.name).appendTo(characterDetails);

  
  console.log("Character details created successfully");
  return characterDetails;
}