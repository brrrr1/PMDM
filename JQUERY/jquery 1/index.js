$(document).ready(function () {
    // Aquí va el código

    //Selector de etiqueta
    $("h1").html("Adiós Mundo");

    //Selector de id (#)
    $("#page-title").html("Título hola mundo");

    //Selector de clase (.)
    $(".red").attr("style", "color: red");

    //Evento click
    $(document).on("click", "#btn-clear", function () {

        $("h1").html("");
    });

    //Botón de restore h1
    $(document).on("click", "#btn-restore", function () {
        
        //Pongo lo de antes

        $("h1").html("Adiós Mundo");

        
        $("#page-title").html("Título hola mundo");

        
        $(".red").attr("style", "color: red");
    });

    $(document).on("click", "add-yellow", function () {
        $("#page-title").addClass("btn-yellow");
    });

    $(document).on("click", "remove-yellow", function () {
        $("#page-title").deleteClass("yellow");
    });

    $("")

});