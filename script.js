/* =========================================================
   Portfolio - Tyler Canto
   Efeito de digitacao no hero + ano dinamico no rodape
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // ---- Efeito de digitacao (typing) ----
    const alvo = document.querySelector(".intro");

    if (alvo) {
        const texto = alvo.dataset.texto || alvo.textContent.trim();
        alvo.textContent = "";
        alvo.classList.add("typing");

        let i = 0;
        const velocidade = 22; // ms por caractere

        const digitar = () => {
            if (i < texto.length) {
                alvo.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, velocidade);
            } else {
                setTimeout(() => alvo.classList.remove("typing"), 1500);
            }
        };

        digitar();
    }

    // ---- Ano dinamico no rodape ----
    const ano = document.querySelector("#ano");
    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
});
