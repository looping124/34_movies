import Constants from "./apikey.js";
import displayCardCustom from "./card.js";
import displayModalCustom from "./modal.js";

var myKey = Constants.MY_KEY;

var searchButtun = document.getElementById('search');
searchButtun.addEventListener("click",searchMovies);

//searchContent
function searchMovies(event) {
  let searchContent = document.getElementById('searchContent').value;
  fetch(`https://www.omdbapi.com/?apikey=${myKey}&s=${searchContent}`)
  .then(res => res.json())
  .then(data => displayMovies(data))
  .then(modalModal)
  .then(observerObserver)
}

function  displayMovies(data){
  //on suprime d'abord
  let moviesToDelete = document.querySelectorAll('.movie')
  moviesToDelete.forEach(movieCard => {
    movieCard.remove();
  });


  var arrayOfSearch = Constants.MY_SEARCH.Search;
  data.Search.forEach(movie => {
    displayCardCustom(movie);
  });
}




function observerObserver() {
  //debut observer
let observer = new IntersectionObserver(function (observables) {
  observables.forEach(observable => {
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.remove('not-visible');
      // observer.unobserve(observable.target)
      // console.log('item visible');
    } else {
      observable.target.classList.add('not-visible');
    }
  });
}, {
  threshold: [0.5]
})

let items = document.querySelectorAll('.observer')
items.forEach(item => {
  item.classList.add('not-visible');
  observer.observe(item);
});
//fin observer
}



function modalModal(){
  console.log("ici");
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
  fetch(`https://www.omdbapi.com/?apikey=${myKey}&i=${event.target.id}`)
    .then(res => res.json())
    .then(data => displayModalCustom(data,modal))
    // console.log(event.target.id);
    // displayModalCustom(testMovie,modal);
  console.log("toto");
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
}
