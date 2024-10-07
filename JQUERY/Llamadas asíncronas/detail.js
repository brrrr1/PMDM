$(document).ready(function() {

    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('pid'));
    var pokemonId = urlParams.get('pid');

    if(pokemonId==null){
        alert("No se ha seleccionado ningún pokemon");
        window.location.href = "index.html";
    }

    

});