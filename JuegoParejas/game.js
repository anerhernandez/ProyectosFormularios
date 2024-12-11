document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        "homer", "marge", "bart", "lisa", "maggie", "krusty",
        "homer", "marge", "bart", "lisa", "maggie", "krusty"
    ];
    const personajesmezclados = characters.sort(() => Math.random() - 0.5);

    const tablero = document.querySelector(".game-board");
    const scoreDisplay = document.getElementById("score");
    let firstCard = null;
    let secondCard = null;
    let score = 0;
    let errores = 0;

    // Crear tablero
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement("td");
            cell.classList.add("card");
            const img = document.createElement("img");
            const charIndex = i * 4 + j;
            img.src = `images/${personajesmezclados[charIndex]}.png`;
            img.alt = personajesmezclados[charIndex];
            cell.appendChild(img);
            cell.dataset.id = personajesmezclados[charIndex];
            cell.addEventListener("click", revealCard);
            row.appendChild(cell);
        }
        tablero.appendChild(row);
    }

    function revealCard(event) {
        const cell = event.currentTarget;
        const img = cell.querySelector("img");

        if (cell.classList.contains("matched") || img.style.display === "block") {
            return; // Ignorar clics en celdas ya resueltas o seleccionadas
        }

        img.style.display = "block";

        if (!firstCard) {
            firstCard = cell;
        } else if (!secondCard) {
            secondCard = cell;
            checkMatch();
        }
    }

    function checkMatch() {
        const img1 = firstCard.querySelector("img").alt;
        const img2 = secondCard.querySelector("img").alt;

        if (img1 === img2) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            score++;
            scoreDisplay.value = score;
            resetCards();
            document.getElementById("feedback").textContent = "Pareja encontrada"
        } else {
            setTimeout(() => {
                firstCard.querySelector("img").style.display = "none";
                secondCard.querySelector("img").style.display = "none";
                resetCards();
                errores++;
                document.getElementById("feedback").textContent = "Tas equivocado."
                document.getElementById("errores").textContent = "Errores: " + errores
            }, 1000);
        }
        
    }
    function resetCards() {
        firstCard = null;
        secondCard = null;
    }
});

