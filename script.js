// ==========================
//  Efeito de digitacao no paragrafo de introducao do hero
// ==========================
(function () {
    const alvo = document.querySelector(".hero p.intro");
    if (!alvo) return;

    const texto = alvo.getAttribute("data-texto") || alvo.textContent.trim();

    // Respeita quem prefere menos movimento (acessibilidade)
    const semAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (semAnimacao) {
        alvo.textContent = texto;
        return;
    }

    alvo.textContent = "";
    alvo.classList.add("typing");

    let i = 0;
    const velocidade = 28; // ms por caractere

    function digitar() {
        if (i <= texto.length) {
            alvo.textContent = texto.slice(0, i);
            i++;
            setTimeout(digitar, velocidade);
        } else {
            setTimeout(() => alvo.classList.remove("typing"), 1500);
        }
    }

    digitar();
})();

// ==========================
//  Ano dinamico no rodape
// ==========================
(function () {
    const ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();
})();
