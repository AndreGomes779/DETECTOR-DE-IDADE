if (fsex[0].checked) {
    genero = 'Homem';
    if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'imagens/menino.png');
    } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/jovem-homem.png');
    } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'imagens/homem-adulto.png');
    } else {
        // Idoso
        img.setAttribute('src', 'imagens/idoso-homem.png');
    }
} else if (fsex[1].checked) {
    genero = 'Mulher';
    if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'imagens/menina.png');
    } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/jovem-mulher.png');
    } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'imagens/mulher-adulta.png');
    } else {
        // Idoso
        img.setAttribute('src', 'imagens/idosa-mulher.png');
    }
}


