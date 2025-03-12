// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    
    let input = document.getElementById("amigo"); 
    let nome = input.value.trim(); 

    // Validação: verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a exibição da lista
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista exibida
function atualizarLista() {
    
    let lista = document.getElementById("listaAmigos");// obtem o elemento da lista no HTML

    // Limpa a lista antes de adicionar novos elementos
    lista.innerHTML = "";

    // Percorre o array e adiciona cada amigo como um <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Função para selecionar um amigo aleatoriamente
function sortearAmigo() {
   
    if (amigos.length === 0) {   // Verifica se há amigos na lista
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gera um índice aleatório dentro do tamanho do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na página (Corrigido o ID)
    document.getElementById("resultado").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
