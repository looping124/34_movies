
export default function displayCard(movie){
  document.getElementById('cards').insertAdjacentHTML('beforeend', `
    <div class="card" style="width: 18rem;">
      <img src="${movie.Poster}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Year}</p>
      <span href="" class="btn btn-primary readMore" id="${movie.imdbID}">Read More</span>
      </div>
    </div>
  `);
}
