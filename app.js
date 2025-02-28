
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo'); // Cambiado a 'amigo'
    const amigo = input.value.trim();
    
    if (amigo === '') {
        alert('Por favor ingresa un amigo');
        return;
    }
    
    listaAmigos.push(amigo);
    input.value = '';
    actualizarLista(); // Nueva función para mostrar la lista
}

function actualizarLista() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = listaAmigos.map(amigo => 
        `<div class="amigo-item">${amigo}</div>`
    ).join('');
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Agrega amigos primero');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;
}