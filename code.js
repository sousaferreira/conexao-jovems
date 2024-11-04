var modal = document.getElementById("myModal");

    // Obtenha a imagem que abre o modal
    var img = document.getElementById("openModal");

    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar na imagem, abra o modal
    img.onclick = function() {
        modal.style.display = "block";
    }

    // Quando o usuário clicar no <span> (x), feche o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, feche-o
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }