document.getElementById('arquivo').addEventListener('change', function(event) {
    const files = event.target.files;
    const mural = document.getElementById('mural');

    // Verifica se já existem 10 imagens no mural
    if (mural.children.length >= 10) {
        alert('Você já atingiu o limite de 10 imagens!');
        return;
    }

    // Verifica quantas imagens ainda podem ser adicionadas
    const imagensDisponiveis = 10 - mural.children.length;

    // Limita os arquivos que podem ser adicionados
    const filesToAdd = Array.from(files).slice(0, imagensDisponiveis);

    // Adiciona as imagens ao mural
    filesToAdd.forEach((file) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            mural.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});
