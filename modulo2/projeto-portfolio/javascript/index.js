function leiaMais () {
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "block";  
        btnLeiaMais.innerHTML = "Ler menos";
    }
}
function leiaMais2 () {
    let pontos = document.querySelector("#pontos02");
    let maisTexto = document.querySelector("#mais02");
    let btnLeiaMais = document.querySelector("#btnLeiaMais02");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "block";  
        btnLeiaMais.innerHTML = "Ler menos";
    }
}
function leiaMais3 () {
    let pontos = document.querySelector("#pontos03");
    let maisTexto = document.querySelector("#mais03");
    let btnLeiaMais = document.querySelector("#btnLeiaMais03");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "block";  
        btnLeiaMais.innerHTML = "Ler menos";
    }
}