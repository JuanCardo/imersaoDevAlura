function adicionarFilme() {
    var filme = document.getElementById("filme").value
    var listaFilmes = document.getElementById("listaFilmes")

    listaFilmes.innerHTML = listaFilmes.innerHTML + '<img src=' + filme + '>'
    document.getElementById("filme").value = ""
}