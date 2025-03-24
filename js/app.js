function alterarStatus(n) {
    let botao = document.getElementById(`botao-${n}`);
    let imagem = document.getElementById(`imagem-${n}`);

    if (botao.innerHTML == 'Devolver') {
        botao.innerHTML = 'Alugar';
        botao.classList.toggle('dashboard__item__button--return');
        imagem.classList.toggle('dashboard__item__img--rented');
    } else {
        botao.innerHTML = 'Devolver';
        botao.classList.toggle('dashboard__item__button--return');
        imagem.classList.toggle('dashboard__item__img--rented');
    }
}