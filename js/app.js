/***********************************************************
 * AVISO :       
 *      Todas as atividades pelo JavaScript seguem um padrão,
 * este é formado em subsituição de classes e adição, porem a primeira atividade 
 * é formada apartir de dois resultados onde se o resultado for o certo ele mostrará um elemento ja existente e escondido por d-none 
 *      O desenvolvimento foi feito basicamente em DOM
 **************************************************************/ 

/* atividade 1 */
var gol = document.getElementById('Gol');
var gua= document.getElementById('Gua');
var gor = document.getElementById('Gor');
var sucessGol = document.getElementById('successGol');
var neutralGol = document.getElementById('neutralGol');

gol.addEventListener("click", function(e) {
    sucessGol.classList.remove("d-none");
    sucessGol.classList.add("bg-success");
    neutralGol.classList.add("d-none");
});
gua.addEventListener("click", function(e) {
    neutralGol.classList.add("bg-danger");
    neutralGol.classList.add("text-light");

    sucessGol.classList.add("d-none");

    neutralGol.classList.remove("bg-light");
    neutralGol.classList.remove("d-none");
});
gor.addEventListener("click", function(e) {
    neutralGol.classList.add("bg-danger");
    neutralGol.classList.add("text-light");
    neutralGol.classList.remove("bg-light");
    neutralGol.classList.remove("d-none");

    sucessGol.classList.add("d-none");
    
});

/* ATIVIDADE 2 */
var bolinhoContainers = document.getElementById('bolinho')
var bolinhoContainerExterno = document.getElementById('bolinhoContainer')

var bolinhoSpan = document.getElementById('spanBolinho')
var spanLibonho = document.getElementById('spanLibonho')
var spanBonholi = document.getElementById('spanBonholi')

var bo = document.getElementById('bo');
var li= document.getElementById('li');
var nho = document.getElementById('nho');

bo.addEventListener("click", function() {
    bolinhoContainers.classList.remove("bg-success");
    bolinhoContainers.classList.add("bg-danger");
    bolinhoContainers.classList.add("text-light");

    spanBonholi.classList.remove("d-none");
    bolinhoSpan.classList.add("d-none");
    spanLibonho.classList.add("d-none");

    bolinhoContainerExterno.classList.remove("bg-success");
    bolinhoContainerExterno.classList.remove("d-none");
    bolinhoContainerExterno.classList.add("bg-danger");

});
li.addEventListener("click", function() {

    bolinhoContainers.classList.add("bg-danger");
    bolinhoContainers.classList.remove("bg-success");
    bolinhoContainers.classList.add("text-light");
    bolinhoSpan.classList.remove("d-none");

    spanBonholi.classList.add("d-none");
    bolinhoSpan.classList.add("d-none");
    spanLibonho.classList.remove("d-none");

    bolinhoContainerExterno.classList.remove("d-none");
    bolinhoContainerExterno.classList.remove("bg-success");
    bolinhoContainerExterno.classList.add("bg-danger");
});
nho.addEventListener("click", function() {
    
    bolinhoContainers.classList.remove("bg-danger");
    bolinhoContainers.classList.add("bg-success");
    bolinhoContainers.classList.add("text-light");

    spanBonholi.classList.add("d-none");
    bolinhoSpan.classList.remove("d-none");
    spanLibonho.classList.add("d-none");

    bolinhoContainerExterno.classList.remove("d-none");
    bolinhoContainerExterno.classList.add("bg-success");
    bolinhoContainerExterno.classList.remove("bg-danger");
});

