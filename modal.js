export default function displayModalCustom(movie,modal){
  
  let modalToRemove = document.getElementById('modal-to-remove');
  modalToRemove ? modalToRemove.remove(): null;
  document.getElementById('modalHere').insertAdjacentHTML('beforeend', `  
  <div class="modal-to-remove" id="modal-to-remove">
    <img class="modal-img" src="${movie.Poster}" alt="Card image cap">    
    <h5 class="card-title">${movie.Title}</h5>
    </div>
  `);
  modal.style.display = "block";
}