document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const total = slides.length;

    const prevButtons = document.querySelectorAll(".prev");
    const nextButtons = document.querySelectorAll(".next");

    let currentIndex = 0;

    function updateSlides() {
        slides.forEach(slide => {
            slide.classList.remove("active", "left", "right");
        });

        const leftIndex = (currentIndex - 1 + total) % total;
        const rightIndex = (currentIndex + 1) % total;

        slides[currentIndex].classList.add("active");
        slides[leftIndex].classList.add("left");
        slides[rightIndex].classList.add("right");
    }

    function goNext() {
        currentIndex = (currentIndex + 1) % total;
        updateSlides();
    }

    function goPrev() {
        currentIndex = (currentIndex - 1 + total) % total;
        updateSlides();
    }

    nextButtons.forEach(btn => btn.addEventListener("click", goNext));
    prevButtons.forEach(btn => btn.addEventListener("click", goPrev));

    updateSlides();
});
const games = ["Clash Royale", "Fortnite", "Minecraft"];
const searchInput = document.querySelector(".buscador");
const resultsBox = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase().trim();

    if (text === "") {
        resultsBox.style.display = "none";
        return;
    }

    const filtered = games.filter(game =>
        game.toLowerCase().includes(text)
    );

    let html = "";

    if (filtered.length > 0) {
        filtered.forEach(item => {
            html += `<div class="search-item">${item}</div>`;
        });
    } else {
        html = `<div class="search-item">No se han encontrado resultados</div>`;
    }

    resultsBox.innerHTML = html;
    resultsBox.style.display = "block";
});

/* Ocultar sugerencias si hace clic fuera del buscador */
document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target)) {
        resultsBox.style.display = "none";
    }
});

