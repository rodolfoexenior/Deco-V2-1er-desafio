const inputTexto = document.querySelector(".caja-texto")
const mensaje = document.querySelector(".mensaje")

function btnencriptar(){
    const txtleido= encriptar(inputTexto.value);
    inputTexto.value="";
    mensaje.style.backgroundImage="none";
    mensaje.value=txtleido;
}

function btndesencriptar(){
    const txtleido= desencriptar(inputTexto.value);
    inputTexto.value="";
    mensaje.style.backgroundImage="none";
    mensaje.value=txtleido;
}

function encriptar(textoEncriptar){
    let matrizRegla = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i=0; i<matrizRegla.length;i++){
        if(textoEncriptar.includes(matrizRegla[i][0])){
            textoEncriptar=textoEncriptar.replaceAll(matrizRegla[i][0],matrizRegla[i][1]);
            console.log(i);
        }
    }
    return textoEncriptar
}

function desencriptar(textoEncriptar){
    let matrizRegla = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i=0; i<matrizRegla.length;i++){
        if(textoEncriptar.includes(matrizRegla[i][1])){
            textoEncriptar=textoEncriptar.replaceAll(matrizRegla[i][1],matrizRegla[i][0]);
            console.log(i);
        }
    }
    return textoEncriptar
}

function btncopiar(){
    //mensaje.select();

    navigator.clipboard.writeText(mensaje.value);
    alert("Mensaje copiado");
    mensaje.value="";

}