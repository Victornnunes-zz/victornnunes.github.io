jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
    });
});

$(document).ready(function() {
    $('#menu-lateral').click(function () { return false; });
    $().click(function () { 
        $('#menu-lateral').hide()
    });
});