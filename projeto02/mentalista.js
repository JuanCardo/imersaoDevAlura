var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
    var chute = prompt("Digite um numero entre 0 a 1000 ou Digite sair")

    if (chute == numeroSecreto){
        alert('Acertou!')
    } else if (chute > numeroSecreto) {
        alert('Errou... o número secreto é menor')
    } else if (chute < numeroSecreto) {
        alert('Errou... o número secreto é maior')
    } else if (chute == 'sair'){
        break
    }
}