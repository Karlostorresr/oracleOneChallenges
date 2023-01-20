function encriptar(){
    let textoUsuario=document.getElementById('mensajeUsuario').value;
    let mensajeEncriptado=textoUsuario.replaceAll("e","enter");
    mensajeEncriptado=mensajeEncriptado.replaceAll("o","ober");
    mensajeEncriptado=mensajeEncriptado.replaceAll("i","imes");
    mensajeEncriptado=mensajeEncriptado.replaceAll("a","ai");
    mensajeEncriptado=mensajeEncriptado.replaceAll("u","ufat");

    document.getElementById('areaDeEncriptado').innerHTML=mensajeEncriptado;
    document.getElementById('btnCopiar').style.display="block"
}
function desencriptar(){
    let textoUsuario=document.getElementById('mensajeUsuario').value;
    
    let mensajeDesencriptado=textoUsuario.replaceAll("ufat","u");
    mensajeDesencriptado=mensajeDesencriptado.replaceAll("ai","a");
    mensajeDesencriptado=mensajeDesencriptado.replaceAll("imes","i");
    mensajeDesencriptado=mensajeDesencriptado.replaceAll("ober","o");
    mensajeDesencriptado=mensajeDesencriptado.replaceAll("enter","e");

    document.getElementById('areaDeEncriptado').innerHTML=mensajeDesencriptado;
    document.getElementById('btnCopiar').style.display="block"
}
function copiarTexto(){
    let textoCopiado=document.getElementById('areaDeEncriptado').value;
    navigator.clipboard.writeText(textoCopiado);
}