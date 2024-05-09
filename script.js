document.addEventListener("DOMContentLoaded", function() {
    const botoesPagina = document.querySelectorAll(".botao");
    const conteudoPagina1 = document.getElementById("conteudoPagina1");
    const conteudoPagina2 = document.getElementById("conteudoPagina2");
    const conteudoPagina3 = document.getElementById("conteudoPagina3");
    const conteudoPagina4 = document.getElementById("conteudoPagina4");
    const textoLorem = document.querySelector(".texto-lorem");

    // Função para mostrar conteúdo correspondente e esconder "Lorem ipsum"
    function mostrarConteudo(conteudo) {
        document.querySelectorAll(".pagina-conteudo").forEach(function(conteudoElement) {
            conteudoElement.style.display = "none";
        });
        textoLorem.style.display = "none";
        conteudo.style.display = "block";
    }

    // Adicionar evento de clique aos botões
    botoesPagina.forEach(function(botao) {
        botao.addEventListener("click", function() {
            switch (botao.id) {
                case "automovel":
                    mostrarConteudo(conteudoPagina1);
                    break;
                case "faculdade":
                    mostrarConteudo(conteudoPagina2);
                    break;
                case "casamento":
                    mostrarConteudo(conteudoPagina3);
                    break;
                case "imovel":
                    mostrarConteudo(conteudoPagina4);
                    break;
            }
        });
    });
});
