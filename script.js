/* ==========================================================
   Portfolio - Tyler Canto
   Efeito de digitacao no hero + ano dinamico no rodape
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ---- Ano dinamico no rodape ---- */
    const ano = document.getElementById("ano");
    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

    /* ---- Efeito de digitacao no paragrafo do hero ---- */
    const intro = document.querySelector(".hero p.intro");

    if (intro) {
        const prefereReduzir = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const texto = intro.dataset.texto || intro.textContent.trim();

        if (prefereReduzir) {
            intro.textContent = texto;
            return;
        }

        intro.textContent = "";
        intro.classList.add("typing");

        let i = 0;
        const velocidade = 22;

        function digitar() {
            if (i < texto.length) {
                intro.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, velocidade);
            } else {
                setTimeout(() => intro.classList.remove("typing"), 1500);
            }
        }

        digitar();
    }
});
