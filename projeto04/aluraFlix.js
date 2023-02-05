function adicionarFilme() {
    var filme = document.getElementById("filme").value
    var listaFilmes = document.getElementById("listaFilmes")

    listaFilmes.innerHTML = '<img src=' + filme + '>'
}