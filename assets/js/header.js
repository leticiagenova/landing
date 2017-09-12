///**
// * Created by leticiagenova on 24/08/17.
// */

//HAMBURGER MENU

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".menu_hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".menu_hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".menu_hamburger" ).show();
        });
    });

});

 //QUESTIONS HERO IMAGE

$( "#todo" ).click(function() {
    $( "#todo_text" ).focus();
});

$( "#togo" ).click(function() {
    $( "#togo_text" ).focus();
});