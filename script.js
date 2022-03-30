function save() {
  localStorage.setItem('applepie', true);
}

window.onload = function() {
  let favorite = document.getElementById('favorite');

  if (window.localStorage) {
    let storage = window.localStorage;
    if (storage.getItem('applepie') == 'true') {
      favorite.innerHTML = 'Apple pie is one of your favorites!'
    }
  }
}