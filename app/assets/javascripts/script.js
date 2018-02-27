$(document).ready(function(){
    $("#presentation").click(function(){
        $("#text_presentation").show();
        $("#text_menu").hide();
        $("#text_contact").hide();
    });

    $("#menu").click(function(){
        $("#text_menu").show();
        $("#text_presentation").hide();
        $("#text_contact").hide();
    });

    $("#contact").click(function(){
        $("#text_contact").show();
        $("#text_presentation").hide();
        $("#text_menu").hide();
    });
});
