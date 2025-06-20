$(function () {

    $(".menu-bars").on("click", function () {
        if ($(".menu-responsive").is(":visible")) {
            $(".menu-responsive").hide(); // Instantly hides
        } else {
            $(".menu-responsive").show(); // Instantly shows
        }
    });

    // Scroll click on menu
    $(".scroll").on("click", function () {
        $(this).each(function () {
            const sectionTop = $(this.hash).offset().top;
            $("html, body").animate({
                scrollTop: sectionTop
            }, 1500);
        });
    });

    // Progress Bar Animate
    window.sr = ScrollReveal();
    sr.reveal(".progress-bar", {
        origin: "left",
        duration: 2000,
        distance: "100%"
    });


    // Contact Text Animate
    const sentences = ["web designer ?", "web developer ?"];
    let i = 0;

    setInterval(function () {
        $(".text-animate").fadeOut(function () {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);

});

$(document).ready(function () {
    $(".card-medium").each(function () {
        const $card = $(this);
        const $infoIcon = $card.find(".fa-circle-info");
        const $githubIcon = $card.find(".fa-github");
        const $content = $card.find(".card-content");
        const $githubLink = $card.find(".card-git-content a");

        // Initially hide the content
        $content.removeClass("expanded");

        // Toggle on info icon click
        $infoIcon.on("click", function () {
            $content.toggleClass("expanded");
        });

        // Open GitHub on GitHub icon click
        $githubIcon.on("click", function () {
            const url = $githubLink.attr("href");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
});


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}