const ver = document.getElementById("verpassword")
ver.addEventListener("change", vercontrasena )

function vercontrasena() {
    if (ver.checked === true) {
        document.getElementById("inppassword").type= "text"
        document.getElementById("inpconfirmar").type= "text"
    }else{
        document.getElementById("inppassword").type= "password"
        document.getElementById("inpconfirmar").type= "password"
    }
}
const botoningresar = document.getElementById("btniniciar")
botoningresar.addEventListener("click", ingresar )
function ingresar() {
    alert("Está por ingresar")
    window.location.href = "paneldecontrol.html"
}

const botonregistrar = document.getElementById("btnregistrarse")
botonregistrar.addEventListener("click", verregistrar )
function verregistrar() {
    document.getElementById("confirmar").style.display = "block"
    document.getElementById("inpconfirmar").style.display = "block"
}