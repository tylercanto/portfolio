/* ==========================================
   Efeito de digitação no parágrafo do hero
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const alvo = document.querySelector(".hero p.intro");
    if (!alvo) return;

    const texto = alvo.textContent.trim();
    alvo.textContent = "";
    alvo.classList.add("typing");

    let i = 0;
    const velocidade = 22; // ms por caractere

    function digitar() {
        if (i < texto.length) {
            alvo.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        } else {
            // mantém o cursor piscando por um tempo e depois remove
            setTimeout(() => alvo.classList.remove("typing"), 2500);
        }
    }

    // pequeno atraso antes de começar
    setTimeout(digitar, 400);
});
