function alterarStatus(n) {
    let gameN = document.getElementById(`altera-${n}`);

    if (gameN.innerHTML = 'Devolver') {
        gameN.classList.toggle('dashboard__item__button--return');
        gameN.innerHTML = 'Alugar';
    }
}