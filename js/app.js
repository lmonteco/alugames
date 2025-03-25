event.preventDefault();

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let jogoImagem = jogo.querySelector('.dashboard__item__img');
    let jogoBotao = jogo.querySelector('.dashboard__item__button');
    let jogoNome = jogo.querySelector('.dashboard__item__name');

    if (jogoBotao.innerHTML == 'Devolver') {
        jogoBotao.innerHTML = 'Alugar'; //altera o texto
        jogoBotao.classList.toggle('dashboard__item__button--return');//altera status do botao
        jogoImagem.classList.toggle('dashboard__item__img--rented');//altera status imagem
    } else {
        jogoBotao.innerHTML = 'Devolver';
        jogoBotao.classList.toggle('dashboard__item__button--return');
        jogoImagem.classList.toggle('dashboard__item__img--rented');
    }
}