// Declarando array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    // Validar a entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Atualizar o array de amigos
    amigos.push(nome);
    
    // Limpar o campo de entrada
    input.value = '';
    
    // Atualizar a lista exibida
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    // Obter o elemento da lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente
    lista.innerHTML = '';
    
    // Percorrer o array e adicionar elementos à lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

// Adicionar funcionalidade para pressionar Enter no campo de input
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});