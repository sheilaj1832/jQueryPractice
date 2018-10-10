var nbr = 0;

$().ready(function () {

   display(nbr);

    $("#increase").click(function () {
        display(++nbr);
    })
    $("#decrease").click(function () {
        display(--nbr);
    });
});

function display(nbr) {
    $("label").text(nbr)
    // to color the number
    // .css("color", "black")
    // .css("font-weight", "normal")
    // .css("font-style", "normal");

}
