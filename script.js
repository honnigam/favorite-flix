function addFilme(){
   var favFilm = document.getElementById('filme').value
   var listFilm = document.getElementById('filmList')
   
   listFilm.innerHTML = listFilm.innerHTML + '<img src=' + favFilm + '>'

   document.getElementById('filme').value = ''
}