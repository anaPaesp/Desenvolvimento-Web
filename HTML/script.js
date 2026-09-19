function alternarTV() {
    // Captura dos elementos via DOM
    var tela = document.getElementById("tela");
    var titulo = document.getElementById("titulo");
    var statusTexto = document.getElementById("status");
    var btn = document.getElementById("btnLigar");
    var musica = document.getElementById("musicaTensa");

    
    tela.classList.toggle("ligada");
    tela.classList.toggle("desligada");

    // Lógica quando LIGA a TV
    if (tela.classList.contains("ligada")) {
        musica.play();
        titulo.innerText = "TV ligada";
        statusTexto.innerText = "Sete dias.";
        
        // Mudar para botão Desligar
        btn.innerText = "Desligar TV";
        btn.style.backgroundColor = "#e63946";
    } 
    // Lógica quando DESLIGA a TV
    else {
        musica.pause();
        musica.currentTime = 0; // Volta a música do início
        titulo.innerText = "TV Desligada";
        statusTexto.innerText = "Ligue a TV";
        
        // Mudar para botão Ligar
        btn.innerText = "Ligar TV";
        btn.style.backgroundColor = "#2a9d8f";
    }
}