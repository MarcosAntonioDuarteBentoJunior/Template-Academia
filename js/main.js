
new WOW().init();

function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("price-month");
    var text2 = document.getElementsByClassName("price-year");

    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked == true) {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        } else if (checkBox.checked == false) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
    }
}

$(document).ready(function(){
    $(".content").slice(0, 4).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".content:hidden").slice(0, 4).slideDown();
        if($(".content:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });
})
