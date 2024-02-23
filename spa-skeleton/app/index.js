import * as routes from './routes.js';

function route() {
  const windowHash = window.location.hash;

  let currentRoute = routes.home;
  console.log(currentRoute, "home");
  currentRoute.init();

  if (windowHash.startsWith("#details/")) {
      currentRoute = routes.details;
      console.log(currentRoute,"details")
      const charId = windowHash.split("/")[1]; 
      if (charId && charId.trim() !== "") {
          currentRoute.init(charId);
      } else {
          console.log("Invalid id");
      }
 
}

}
window.onhashchange = route;
route();





    
   

