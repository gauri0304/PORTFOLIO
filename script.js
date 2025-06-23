$(function () {

    // Menu toggle
    $(".menu-bars").on("click", function () {
        $(".menu-responsive").toggle(); // Simple toggle
    });

    // Smooth scroll
    $(".scroll").on("click", function (e) {
        e.preventDefault();
        const target = this.hash;
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

    // ScrollReveal Progress Bars
    window.sr = ScrollReveal();
    sr.reveal(".progress-bar", {
        origin: "left",
        duration: 2000,
        distance: "100%"
    });

    // Text Animation
    const sentences = ["web designer ?", "web developer ?"];
    let i = 0;
    setInterval(function () {
        $(".text-animate").fadeOut(function () {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);

    // Project cards (card-medium toggle)
    $(".card-medium").each(function () {
        const $card = $(this);
        const $infoIcon = $card.find(".fa-circle-info");
        const $githubIcon = $card.find(".fa-github");
        const $content = $card.find(".card-content");
        const $githubLink = $card.find(".card-git-content a");

        $content.removeClass("expanded");

        $infoIcon.on("click", function () {
            $content.toggleClass("expanded");
        });

        $githubIcon.on("click", function () {
            const url = $githubLink.attr("href");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });

    // New: Project-card image click toggle
    $(".project-image").on("click", function () {
        const $content = $(this).siblings(".project-content");
        $content.toggleClass("show");
    });
});

// Back to Top Button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
