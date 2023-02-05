var juan = {
    nome: "Juan",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var anaLuiza = {
    nome: "Ana Luiza",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var tabelaJogadores = document.getElementById("tabelaJogadores")
tabela()

function tabela() {
    tabelaJogadores.innerHTML = `
        <tr>
            <td>${juan.nome}</td>
            <td>${juan.vitoria}</td>
            <td>${juan.empate}</td>
            <td>${juan.derrota}</td>
            <td>${juan.pontos}</td>
            <td><button onClick="adicionarVitoria(juan)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(juan)">Empate</button></td>
            <td><button onClick="adicionarDerrota(juan)">Derrota</button></td>
        </tr>
        <tr>
            <td>${anaLuiza.nome}</td>
            <td>${anaLuiza.vitoria}</td>
            <td>${anaLuiza.empate}</td>
            <td>${anaLuiza.derrota}</td>
            <td>${anaLuiza.pontos}</td>
            <td><button onClick="adicionarVitoria(anaLuiza)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(anaLuiza)">Empate</button></td>
            <td><button onClick="adicionarDerrota(anaLuiza)">Derrota</button></td>
        </tr>    
    `
}

function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    tabela()  
}

function adicionarDerrota(jogador) {
    jogador.derrota++
    tabela() 
}

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    tabela() 
}