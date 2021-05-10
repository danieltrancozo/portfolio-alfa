function score(count) {
    pontos += count;
    console.log(pontos);
    let score = document.querySelector('h3.score');
    score.innerHTML = 'Pontua&ccedil&atildeo: ' + pontos;
}