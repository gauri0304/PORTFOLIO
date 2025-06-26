$(function () {
    // ===== Menu Toggle for Mobile =====
    $(".menu-bars").on("click", function () {
        $(".menu-responsive").toggle(); 
    });

    // ===== Smooth Scroll Navigation =====
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

    // ===== Typing Text Animation =====
    const sentences = ["web designer ?", "web developer ?"];
    let i = 0;
    setInterval(function () {
        $(".text-animate").fadeOut(function () {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);

    // ===== Project Card Toggle (Click to Show Content) =====
    $(".project-image").on("click", function () {
        const $content = $(this).siblings(".project-content");
        $content.toggleClass("show");
    });
});

// ===== Back to Top Button =====
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.classList.add("show");
    } else {
        mybutton.style.display = "none";
        mybutton.classList.remove("show");
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
