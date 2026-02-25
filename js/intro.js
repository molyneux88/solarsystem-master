document.getElementById("sunTrigger").addEventListener("click", () => {

    const sun = document.getElementById("sunTrigger");

    // Stop pulse animation
    sun.style.animation = "none";

    // Zoom effect
    sun.style.transform = "translate(-50%, -50%) scale(8)";

    // Fade out everything else
    document.querySelector(".intro-text").style.opacity = "0";
    document.querySelectorAll(".orbit").forEach(o => o.style.opacity = "0");

    setTimeout(() => {
        window.location.href = "planets/sun.html";
    }, 900);

});