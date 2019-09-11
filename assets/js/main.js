jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
    });
});

var interacao = 1;

function Menu() {
    let valor = document.getElementById("menu-hamburguer").value;
    if (valor === "on"){
       interacao++;
       abreFechaMenu(interacao);
    }
}

function abreFechaMenu(retorno) {
    if (retorno % 2 == 0){
        document.getElementById("menu-lateral").style.visibility = 'visible';
    } else {
        document.getElementById("menu-lateral").style.visibility = 'hidden';
    }
}
