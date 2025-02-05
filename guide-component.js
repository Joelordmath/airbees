document.addEventListener('DOMContentLoaded', function () {
    const modalContainer = document.getElementById('modal-container');

    // Cargar el modal en la página
    modalContainer.innerHTML = `
        <div id="guideModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id="guideContent">Cargando contenido...</div>
            </div>
        </div>
    `;

    const modal = document.getElementById('guideModal');
    const guideContent = document.getElementById('guideContent');
    const closeModal = document.querySelector('.close');

    function loadHTML(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                guideContent.innerHTML = html;
                modal.style.display = 'block';
            })
            .catch(error => {
                guideContent.innerHTML = '<p>Error al cargar el contenido.</p>';
                console.error('Error al cargar el archivo:', error);
            });
    }

    document.getElementById('guia-text').addEventListener('click', function (event) {
        event.preventDefault();
        loadHTML('guia.html');
    });

    document.getElementById('regla-text').addEventListener('click', function (event) {
        event.preventDefault();
        loadHTML('reglas.html');
    });

    document.getElementById('sitios-text').addEventListener('click', function (event) {
        event.preventDefault();
        loadHTML('sitios.html');
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
