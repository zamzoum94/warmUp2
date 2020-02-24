var left = true;
// if no button have been clicked, left will be by default
$("#left").click(function(){
    left = true;
});

$("#right").click(function(){
    left = false;
});

$("#create").click(function(){
    var value = $("#text").val();
    if(left){
        $('#leftList').append("<li>" +value+ "</li>");
    } else {
        $('#rightList').append("<li>" +value+ "</li>")
    }
})

