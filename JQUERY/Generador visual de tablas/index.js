$(document).ready(function(){

    $(document).on("click", "#btn-add-row", function () {
        var row = "<tr><td>Nuevo</td></tr>";
        $("#table").append(row);
      });

    $(document).on("click", "#btn-add-column", function () {
        $("#table tr").each(function() {
            $(this).append("<td>Nuevo</td>");
        });
    });

    $(document).on("click", "#btn-delete-row", function () {
        $("#table tr:last").remove();
    });

    $(document).on("click", "#btn-delete-column", function () {
        $("#table tr").each(function() {
            $(this).children().last().remove();
        });
    });
});