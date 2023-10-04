async function obtenerUsuariosConectados(address) {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${address}`);

        if (!response.ok) {
            throw new Error('No se pudo obtener la información del servidor.');
        }

        const data = await response.json();

        if (data.online) {
            return data.players.online; // Devuelve el número de usuarios conectados si el servidor está en línea.
        } else {
            return 0; // El servidor está fuera de línea, por lo que no hay usuarios conectados.
        }
    } catch (error) {
        console.error('Error al obtener usuarios conectados:', error);
        return 0; // En caso de error, devuelve 0 usuarios conectados.
    }
}

// Luego, puedes utilizar esta función para obtener el número de usuarios conectados y actualizar la ProgressBar.
async function actualizarProgressBar() {
    const address = 'hypixel.net';
    const usuariosConectados = await obtenerUsuariosConectados(address);
    const progressBar = document.getElementById('progressBar');
    const porcentaje = (usuariosConectados / 250) * 100;
    progressBar.style.width = porcentaje + '%';
    progressBar.textContent = usuariosConectados + '/250';
}

window.addEventListener('load', actualizarProgressBar);
