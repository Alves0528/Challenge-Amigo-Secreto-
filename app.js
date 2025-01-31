//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigosInseridos = [];
let exibirLista = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let inputAmigo = document.querySelector('input');
    let amigoAdicionado = inputAmigo.value.trim();

    if(amigoAdicionado == ''){
        alert('Insira um nome na lista');
    }else if(listaAmigosInseridos.includes(amigoAdicionado)){
        alert('Nome já inserido na lista');
    }else{
        listaAmigosInseridos.push(amigoAdicionado);
        exibirAmigos();
    }
    limparCampo();
    
}

function limparCampo(){
    let inputLimparAmigo = document.querySelector('input');
    inputLimparAmigo.value = '';
}

function exibirAmigos() {
    exibirLista.innerHTML = "";// Limpa a lista antes de exibir
    listaAmigosInseridos.forEach(amigo => {// Acessa diretamente listaAmigosInseridos
        let li = document.createElement('li');// Corrigido:variável deve ser "li"
        li.textContent = amigo;// Atribui o nome do amigo ao item da lista
        exibirLista.appendChild(li); // Adiciona o item à lista na página
    });
}

function gerarNumeroAleatorio(lista) {
    return Math.floor(Math.random() * lista.length);// gera um número decimal aleatório e arredonda o número para baixo.
}

function sortearAmigo(){
    if (listaAmigosInseridos.length === 0) {
        alert('Lista vazia, insira os nomes de seus amigos');
        return;
    }
        const numeroAleatorio = gerarNumeroAleatorio(listaAmigosInseridos);
        let amigoSorteado = listaAmigosInseridos[numeroAleatorio];
        exibirLista.innerHTML = '';
        let MensagemDeTexto = `🎉 O amigo sorteado é: ${amigoSorteado} 🎉`;
        exibirSorteado('resultado', MensagemDeTexto);
}

function exibirSorteado(elementId, texto){
    let exibirAmigo = document.getElementById(elementId);
    exibirAmigo.innerHTML = texto;

}