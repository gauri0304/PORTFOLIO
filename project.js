document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-medium");

    cards.forEach(card => {
        const icon = card.querySelector(".card-image i");

        if (icon) {
            icon.addEventListener("click", function () {
                card.classList.toggle("active");
            });
        }
    });
});
