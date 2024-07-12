document.addEventListener('DOMContentLoaded', function() {
    const encriptarLink = document.getElementById('Encriptar');
    const desencriptarLink = document.getElementById('Desencriptar');
    const textoEncriptar = document.querySelector('.presentacion__contenido__encriptar__texto');
    const desencriptarSection = document.querySelector('.presentacion__contenido__desencriptar');

    encriptarLink.addEventListener('click', function(event) {
        event.preventDefault();

        let texto = textoEncriptar.value.trim();
        // Aplica la encriptación deseada (por ejemplo, reemplazos específicos)
        texto = encriptarTexto(texto);

        // Limpia cualquier contenido existente dentro del div de desencriptar
        desencriptarSection.innerHTML = '';

        // Crea un nuevo párrafo para mostrar el texto encriptado
        const textoP = document.createElement('p');
        textoP.textContent = texto;
        textoP.style.padding = '10px';
        textoP.style.backgroundColor = '#f0f0f0';
        textoP.style.border = '1px solid #ccc';
        textoP.style.width='350px';
        textoP.style.height='800px';
        textoP.style.boxSizing='border-box'

        // Crea un nuevo enlace <a>
        const nuevoEnlace = document.createElement('a');
        nuevoEnlace.href = '#'; // Cambia '#' por la URL deseada
        nuevoEnlace.textContent = 'Copiar texto';
        nuevoEnlace.id = 'copiarEnlace'; // ID para identificar el enlace
        nuevoEnlace.style.padding = '8px 16px';
        nuevoEnlace.style.backgroundColor = '#0a3871';
        nuevoEnlace.style.color = '#ffffff';
        nuevoEnlace.style.textDecoration = 'none'; // Elimina la decoración de subrayado
        nuevoEnlace.style.borderRadius = '4px';
        nuevoEnlace.style.marginTop = '10px';

        // Agrega un evento click al enlace para copiar el texto
        nuevoEnlace.addEventListener('click', function(event) {
            event.preventDefault();
            copiarTexto(texto);
        });

        // Agrega el párrafo y el enlace al div de desencriptar
        desencriptarSection.appendChild(textoP);
        desencriptarSection.appendChild(nuevoEnlace);
    });

    desencriptarLink.addEventListener('click', function(event) {
        event.preventDefault();

        let texto = textoEncriptar.value.trim();
        // Aplica la desencriptación correspondiente
        texto = desencriptarTexto(texto);

        desencriptarSection.innerHTML = '';

        // Crea un nuevo párrafo para mostrar el texto encriptado
        const textoP = document.createElement('p');
        textoP.textContent = texto;
        textoP.style.padding = '10px';
        textoP.style.backgroundColor = '#f0f0f0';
        textoP.style.border = '1px solid #ccc';

        // Crea un nuevo enlace <a>
        const nuevoEnlace = document.createElement('a');
        nuevoEnlace.href = '#'; // Cambia '#' por la URL deseada
        nuevoEnlace.textContent = 'Copiar texto';
        nuevoEnlace.id = 'copiarEnlace'; // ID para identificar el enlace
        nuevoEnlace.style.padding = '8px 16px';
        nuevoEnlace.style.backgroundColor = '#0a3871';
        nuevoEnlace.style.color = '#ffffff';
        nuevoEnlace.style.textDecoration = 'none'; // Elimina la decoración de subrayado
        nuevoEnlace.style.borderRadius = '4px';
        nuevoEnlace.style.marginTop = '10px';

        // Agrega un evento click al enlace para copiar el texto
        nuevoEnlace.addEventListener('click', function(event) {
            event.preventDefault();
            copiarTexto(texto);
        });

        // Agrega el párrafo y el enlace al div de desencriptar
        desencriptarSection.appendChild(textoP);
        desencriptarSection.appendChild(nuevoEnlace);
    });

    // Función para encriptar el texto según tus especificaciones
    function encriptarTexto(texto) {
        texto = texto.replace(/a/g, 'ai');
        texto = texto.replace(/e/g, 'enter');
        texto = texto.replace(/i/g, 'imes');
        texto = texto.replace(/o/g, 'ober');
        texto = texto.replace(/u/g, 'ufat');
        return texto;
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ufat/g, 'u');
        return texto;
    }

    // Función para copiar el texto al portapapeles
    function copiarTexto(texto) {
        // Crea un elemento de textarea temporal
        const textarea = document.createElement('textarea');
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('¡Texto copiado al portapapeles!');
    }

    // Función para verificar el ancho y eliminar la imagen si es necesario
function verificarAncho() {
    var anchoVentana = window.innerWidth;
    var imagen = document.getElementById('muneco_img');

    if (anchoVentana < 768) {
        // Si el ancho de la ventana es menor que 500px, ocultar la imagen
        if (imagen) { // Verificar si la imagen existe antes de intentar manipularla
            imagen.style.display = 'none';
        }
    } else {
        // Si el ancho de la ventana es mayor o igual a 500px, mostrar la imagen
        if (imagen) { // Verificar si la imagen existe antes de intentar manipularla
            imagen.style.display = 'block'; // o 'inline' según el tipo de elemento
        }
    }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.onload = verificarAncho; // Verificar al cargar la página
window.onresize = verificarAncho; // Verificar al cambiar el tamaño de la ventana


});
