let palavra = 'asa';
let palavraInvertida = inverterPalavra(palavra);

if (palavra == palavraInvertida) {
    console.log(`${palavra} é Palíndrome`);    
} else {
    console.log(`${palavra} não é Palíndrome`);
}

function inverterPalavra(str) {
    return str.split('').reverse().join('');
  }