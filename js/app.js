/* atividade 1 */
var gol = document.getElementById('Gol');
var gua= document.getElementById('Gua');
var gor = document.getElementById('Gor');
var sucessGol = document.getElementById('successGol');
var neutralGol = document.getElementById('neutralGol');
gol.addEventListener("click", function(e) {
    sucessGol.classList.remove("d-none");
    neutralGol.classList.add("d-none");
});
gua.addEventListener("click", function(e) {
    neutralGol.classList.add("bg-danger");
    sucessGol.classList.add("d-none");
    neutralGol.classList.remove("d-none");
});
gor.addEventListener("click", function(e) {
    neutralGol.classList.add("bg-danger");
    sucessGol.classList.add("d-none");
    neutralGol.classList.remove("d-none");
});
