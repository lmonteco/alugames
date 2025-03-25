event.preventDefault();

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let jogoImagem = jogo.querySelector('.dashboard__item__img');
    let jogoBotao = jogo.querySelector('.dashboard__item__button');
    let jogoNome = jogo.querySelector('.dashboard__item__name');

    if (jogoBotao.innerHTML == 'Devolver') { //devolve o jogo
        jogoBotao.innerHTML = 'Alugar';
        jogoBotao.classList.toggle('dashboard__item__button--return');
        jogoImagem.classList.toggle('dashboard__item__img--rented');

        alert(`${jogoNome.innerHTML} foi devolvido com sucesso. Aproveite para alugar outros!`)
    } else { //aluga o jogo
        jogoBotao.innerHTML = 'Devolver';
        jogoBotao.classList.toggle('dashboard__item__button--return');
        jogoImagem.classList.toggle('dashboard__item__img--rented');
        
        alert(`${jogoNome.innerHTML} foi alugado com sucesso. Divirta-se`)
    }
}