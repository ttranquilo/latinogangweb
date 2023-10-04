const serverIPElement = document.getElementById('serverIP');
const copiedAlert = document.getElementById('copiedAlert');

serverIPElement.style.cursor = 'pointer'; // Cambia el cursor al estilo de un enlace

serverIPElement.addEventListener('click', () => {
    // Crea un elemento de texto temporal y copia la dirección IP al portapapeles
    const textArea = document.createElement('textarea');
    textArea.value = serverIPElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Muestra la alerta
    copiedAlert.classList.add('show');

    // Oculta la alerta después de 3 segundos
    setTimeout(() => {
        copiedAlert.classList.remove('show');
    }, 1000); // 3000 milisegundos = 3 segundos
});

$(document).ready(function(){
    $(".btn").click(function(){
        // Cierra todos los elementos colapsados
        $(".collapse").collapse("hide");
    });
});