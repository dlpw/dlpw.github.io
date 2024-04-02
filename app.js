// Written by Daniel Cook on April 1st, 2024.
// Last updated: today.
// Daniel Lachlan Pressure Washing.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){
    let pressure = document.getElementById("p");
    let washing = document.getElementById("w");
    let contact = document.getElementById("contact");
    let text = document.getElementById("text");
    let messages = document.getElementById("messages");
    let main = document.getElementById("main")
    let header = document.getElementById("header");

    // Footer Buttons
    let cB = document.getElementById("cB");
    let aB = document.getElementById("aB");
    let qB = document.getElementById("qB");

    header.addEventListener("click", function() {
        window.scrollTo(0,0);
    });

    cB.addEventListener("click", function() {
        window.scrollTo(0, 250);
    });

    aB.addEventListener("click", function() {
        window.scrollTo(0, 550);
    });

    qB.addEventListener("click", function() {
        window.scrollTo(0, 950);
    });

    var enabled = false;
    var textEnabled = false;

    function checkPos(scroll) {
        if (scroll == 0) {
            enabled = false;
            main.style.display = "block";
            main.style.opacity = 1;
            contact.style.opacity = 0;
            text.style.opacity = 0;
        }
        // The Main Area
        
        if (scroll > 100) {
            enabled = true;
        } else {
            enabled = false;
        }

        if (enabled) {
            main.style.display = "none";
            contact.style.animation = "fadeIn 1s linear";
            contact.style.opacity = 1;
        } else {
            contact.style.animation = "fadeOut 1s linear";
            contact.style.opacity = 0;
            main.style.display = "block";
        }

        if (scroll > 250) {
            main.style.display + "none"
        }

        // The Text Messages
        
        if (scroll > 250 && !textEnabled) {
            textEnabled = true;
            text.style.animation = "fadeIn 1s linear";
            text.style.opacity = 1;
        }

        if (scroll < 250 && textEnabled) {
            textEnabled = false;
            text.style.animation = "fadeOut 1s linear";
            text.style.opacity = 0;
        }
    }

    checkPos(0);

    window.addEventListener('scroll', function() {
        let scroll = window.scrollY;
        pressure.style.left = scroll + "vh";
        washing.style.right = scroll + "vh";
        checkPos(scroll);
    });
});
