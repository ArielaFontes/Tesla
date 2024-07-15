let formularioComprar = document.querySelector(".formulario-comprar");
let formularioTestDrive = document.querySelector(".formulario-test-drive");

function aparecerFormularioComprar() {
    formularioComprar.style.left = "50%";
    formularioTestDrive.style.left = "-50%";
}

function desaparecerFormularioComprar() {
    formularioComprar.style.left = "-50%";
}

function aparecerFormularioTestDrive() {
    formularioTestDrive.style.left = "50%";
    formularioComprar.style.left = "-50%";
}

function desaparecerFormularioTestDrive() {
    formularioTestDrive.style.left = "-50%";
}