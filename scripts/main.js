$(document).ready(function() {
    $("#title").hide();
    $("ul.list-unstyled").hide();
    $("#name").hide().fadeIn(1000, function() {
        $("#title").fadeIn(1000, function() {
            $("ul.list-unstyled").fadeIn(1000);
        });
    });
});