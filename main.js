// Define uma função para reproduzir um elemento de áudio com base no seletor fornecido
function toca_som(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // Verifica se o elemento foi encontrado e se é um elemento de áudio
    if (elemento && elemento.localName === 'audio') {
        elemento.play(); // Reproduz o áudio
    } else {
        console.log('Elemento não encontrado ou seletor inválido'); // Exibe uma mensagem de erro no console
    }
}

// Seleciona todos os elementos com a classe "tecla" e os armazena em uma variável
const listaDeTeclas = document.querySelectorAll('.tecla');

// Itera sobre a lista de teclas usando um loop "for"
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    // Obtém a classe do instrumento a partir da segunda classe da tecla
    const instrumento = tecla.classList[1];

    // Cria um seletor de ID do áudio com base no instrumento
    const idAudio = `#som_${instrumento}`;

    // Atribui um manipulador de evento de clique a cada tecla
    tecla.onclick = function () {
        toca_som(idAudio); // Chama a função para reproduzir o áudio correspondente à tecla
    };

    // Atribui um manipulador de evento de pressionamento de tecla a cada tecla
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa'); // Adiciona a classe "ativa" quando a tecla é pressionada (espaço ou enter)
        }
    };

    // Atribui um manipulador de evento de soltura de tecla a cada tecla
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); // Remove a classe "ativa" quando a tecla é solta
    };
}


