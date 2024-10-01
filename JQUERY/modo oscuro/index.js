$(document).ready(function () {
    $(document).on("click", "#btn-dark", function () {
        $("body").addClass("dark");
        $("body").removeClass("bg-light text-dark");


        $("#btn-dark").hide();
        $("#btn-light").show();

    });

    $(document).on("click", "#btn-light", function () {
        $("body").addClass("light");
        $("body").removeClass("dark");

        $("#btn-light").hide();
        $("#btn-dark").show();

    });

});
