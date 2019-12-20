
$("#logo").on("click", function(event){
event.preventDefault();
$("#knight-home").css({ visibility: "visible" });
})


$('#knight-home').on('click', function(){
    alert("I've been clicked you knave! Choose a door my explorer friend ");
    $("#door-AM").css({ visibility: "visible" });
    $("#door-Portfolio").css({ visibility: "visible" });
    $("#door-Contact").css({ visibility: "visible" });
    $("#ribbonAM").css({ visibility: "visible" });
    $("#ribbonPortfolio").css({ visibility: "visible" });
    $("#ribbonContact").css({ visibility: "visible" });
})

$('#portfolio, #contact').on('click', function(event){
    event.preventDefault();
    $('#fireball').css({ visibility: "visible"});
    alert(" NAY! That's the button for the firebreathing DRAGON! Click on a Door to Navigate.");
    // $('#fireball').css({ visibility: "hidden"});
})