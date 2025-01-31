//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigosInseridos = [];
let exibirLista = document.getElementById('listaAmigos');


function adicionarAmigo(){
    let amigoAdicionado = document.querySelector('input').value;

    if (listaAmigosInseridos.includes(amigoAdicionado)) {
        alert('Nome já inserido na lista');
    }else if( amigoAdicionado == ''){
        alert('Insira um nome na lista');
    }else{
        listaAmigosInseridos.push(amigoAdicionado);
        exibirAmigos();
    }

    console.log('clic');
    console.log(listaAmigosInseridos);
    limparCampo();
    
}

function limparCampo(){
    amigoAdicionado = document.querySelector('input');
    amigoAdicionado.value = '';
}

function exibirAmigos() {
    exibirLista.innerHTML = "";// Limpa a lista antes de exibir
    listaAmigosInseridos.forEach(amigo => {// Acessa diretamente listaAmigosInseridos
        let li = document.createElement('li');// Corrigido:variável deve ser "li"
        li.textContent = amigo;// Atribui o nome do amigo ao item da lista
        exibirLista.appendChild(li); // Adiciona o item à lista na página
    });
}