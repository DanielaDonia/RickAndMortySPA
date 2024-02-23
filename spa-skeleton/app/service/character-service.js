
var base_url = "https://rickandmortyapi.com/api";

export let currentPage=1;



export function getCharacter({id="",name="",species="",gender="",status="",page=1}) {
console.log(page, "page")
  return fetchCharathers({id,name,species,gender,status,page});

}

export function getNextPage(){
  currentPage++;
  return getCharacter({});
}

export function getPreviousPage(){
  currentPage--;
  return getCharacter({});
}

const fetchCharathers = async({id="",name="",species="",gender="",status="",page=1})=>{
  const response = await fetch(`${base_url}/character?id=${id}&name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`);
  const data = await response.json();
  const characters = data.results;
  console.log("fetch characters ok")
  return characters;

}







