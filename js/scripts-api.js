function buscarPersonagens() {
    const adaptadorHttp = new XMLHttpRequest();
    const numeroDaPagina = Math.floor(Math.random() * 8) + 1;
    const url = `https://swapi.dev/api/people/?page=${numeroDaPagina}`;
    adaptadorHttp.open('GET', url, true);
    adaptadorHttp.onreadystatechange = function () {
        if (adaptadorHttp.readyState == 4) {
            const resposta = adaptadorHttp.responseText;
            const people = JSON.parse(resposta);
            const personagens = people.results;
            const nomesDosPersonagens = personagens.map(personagem => personagem.name);
            const listaDePersonagens = nomesDosPersonagens.join(', ');
            document.getElementById('personagens').innerHTML = listaDePersonagens;
        }
    };
    adaptadorHttp.send();
}