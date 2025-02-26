let nomes = [];

function verificarCampo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    nomes.push(amigo);
    document.getElementById('amigo').value = ''; 
    console.log(nomes);
    atualizarLista(); 
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for (let i = 0; i < nomes.length; i++) {
        let li = document.createElement('li');
        li.textContent = nomes[i]; 
        lista.appendChild(li); 
    }
}

function adicionarAmigo() {
    verificarCampo(); 
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Não há amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nomes.length);

    let amigoSorteado = nomes[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
