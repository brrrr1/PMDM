$(document).ready(function() {
    $(document).ready(function() {
        $(document).on("click", "#add-above", function () {
            var row = "<tr><td>Nueva fila por encima</td></tr>";
            $("#myTable").prepend(row);
        });

        $(document).on("click", "#add-below", function () {
            var row = "<tr><td>Nueva fila por debajo</td></tr>";
            $("#myTable").append(row);
        });
    });
});