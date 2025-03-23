function calcular() {
    let valorPeso = parseFloat(document.getElementById('peso').value);
    let valorAltura = parseFloat(document.getElementById('altura').value);

    // Calculando o IMC
    let calculoIMC = valorPeso / (valorAltura * valorAltura);

    // Exibindo o IMC calculado
    document.getElementById('valorIMC').innerHTML = "Seu IMC é " + calculoIMC.toFixed(2);

    // Classificação do IMC
    let categoriaIMC = document.getElementById('classificacaoIMC');

    if (calculoIMC < 18) {
        categoriaIMC.innerHTML = "Categoria: Abaixo do Peso";
    } else if (calculoIMC >= 18 && calculoIMC < 25) {
        categoriaIMC.innerHTML = "Categoria: Peso Normal";
    } else if (calculoIMC >= 25 && calculoIMC < 30) {
        categoriaIMC.innerHTML = "Categoria: Sobrepeso";
    } else {
        categoriaIMC.innerHTML = "Categoria: Obesidade";
    }
}