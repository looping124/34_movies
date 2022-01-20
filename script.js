import Constants from "./apikey.js";
import displayCardCustom from "./card.js";
import displayModalCustom from "./modal.js";
//http://www.omdbapi.com/?apikey=[yourkey]&
//https://www.omdbapi.com/?apikey=445a0d29&t=super
//https://www.omdbapi.com/?apikey=445a0d29&s=harry
var arrayOfSearch = Constants.MY_SEARCH.Search;
var myKey = Constants.MY_KEY;
var testMovie = Constants.MY_MOVIE;
var searchButtun = document.getElementById('search');
todo(arrayOfSearch);

// fetch('https://www.omdbapi.com/?apikey=445a0d29&s=batman')
//   .then(res => res.json())
//   .then(data => todo(data))

function  todo(data){
  arrayOfSearch.forEach(movie => {
  displayCardCustom(movie);
});
  }

var buttons = document.querySelectorAll(".readMore");


// DEBUT MODAL
buttons.forEach(button => {
  button.addEventListener("click",launchModal)
  
});




// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
function launchModal(event) {
fetch(`https://www.omdbapi.com/?apikey=445a0d29&i=${event.target.id}`)
  .then(res => res.json())
  .then(data => displayModalCustom(data,modal))
  // console.log(event.target.id);
  // displayModalCustom(testMovie,modal);

}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//FIN MODAL


//TODO
//creer la requette api
//créer l'event listener qui lance la requete
//crer l'affichage pour toutes les réponses
//faire le scroll
//event listener qui lance la modal
//delete modal content when close modal