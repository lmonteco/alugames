let contagemAlugados = 0;

function alterarStatus(event, id) {
    event.preventDefault();

    let jogo = document.getElementById(`game-${id}`);
    let jogoImagem = jogo.querySelector('.dashboard__item__img');
    let jogoBotao = jogo.querySelector('.dashboard__item__button');
    let jogoNome = jogo.querySelector('.dashboard__item__name').innerHTML;
    
    if (jogoImagem.classList.contains('dashboard__item__img--rented')) { //devolve o jogo
        let confirmacao = prompt(`Para confirmar a devolução, por favor digite: ${jogoNome}`);

        if (confirmacao != jogoNome) {
            alert(`Não pudemos registrar a devolução do jogo. Por favor tente novamente`);
            return;
        }
        contagemAlugados--;
        jogoBotao.innerHTML = 'Alugar';
        jogoBotao.classList.toggle('dashboard__item__button--return');
        jogoImagem.classList.toggle('dashboard__item__img--rented');

        alert(`${jogoNome} foi devolvido com sucesso. Aproveite para alugar outros!`);        
    } else { //aluga o jogo
        contagemAlugados++;
        jogoBotao.innerHTML = 'Devolver';
        jogoBotao.classList.toggle('dashboard__item__button--return');
        jogoImagem.classList.toggle('dashboard__item__img--rented');
        
        alert(`${jogoNome} foi alugado com sucesso. Divirta-se`);
    }
    console.log(contagemAlugados);
}
