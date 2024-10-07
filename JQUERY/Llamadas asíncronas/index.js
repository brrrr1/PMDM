
        $(document).ready(function () {
            $(document).on("click", ".btn-get-data", function () {
                getPokemonList();
            });
        
            function getPokemonList() {
                $.ajax({
                    url: "https://pokeapi.com/api/v2/pokemon",
                    method: "GET",
                }).done(function (resp) {
                    var listadoPokemon = resp.results;
                    listadoPokemon.forEach(function (pokemon) {
                        var pokemonId = pokemon.url.split("/")[6];
                        var template = `<p><h1 class="pokemon" pokemonid="1">${pokemon.name}</h1></p>`;
                        $("#data-content").append(template);
                    });
                });
            }
        });

        

    $.ayax({
        url: "https://pokeapi.com/api/v2/pokemon",
        method: "GET",
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



