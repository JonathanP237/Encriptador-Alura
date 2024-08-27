const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const matrizEncriptado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar() {
    if (textArea.value !="") {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    }
}

function btnDesencriptar() {
    if (textArea.value !="") {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('img/Muneco.png')";
}

function encriptar(stringEncriptado) {

    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizEncriptado.length; i++) {
        if (stringEncriptado.includes(matrizEncriptado[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizEncriptado[i][0], matrizEncriptado[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < matrizEncriptado.length; i++) {
        if (stringDesencriptado.includes(matrizEncriptado[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizEncriptado[i][1], matrizEncriptado[i][0]);
        }
    }
    return stringDesencriptado;
}

