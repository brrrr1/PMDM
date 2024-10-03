$(document).ready(function () {
    $.ayax({
        url: "https://pokeapi.com/api/v2/pokemon",
        method:"GET",
    }).done(function (data) {
        debugger;
        /*
        JSON.parse toma como entrada el texto en JSON que me llega del servidor
        y lo convierte a un objeto. 
        */
        var json = JSON.parse(data);
        debugger;
        /*
        Lo que se programa dentro de está función será ejecutado 
        cuando se haya resuelto la petición asíncrona,
        es decir, cuando llegue la respuesta del servidor.
        */


    });
    
    

});