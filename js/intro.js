document.addEventListener("DOMContentLoaded", () => {

const starfield = document.getElementById("starfield");
const solarSystem = document.getElementById("solarSystem");
const sun = document.getElementById("sunTrigger");
const zoomWrapper = document.getElementById("solarZoom");
const introText = document.querySelector(".intro-text");

let nextPageHTML = null;


/* ===============================
   Preload next page
================================ */
fetch("planets/sun.html")
    .then(r => r.text())
    .then(html => {
        nextPageHTML = html;
        console.log("Next page preloaded");
    });


/* ===============================
   Generate stars
================================ */
if (starfield) {
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        starfield.appendChild(star);
    }
}


/* ===============================
   Sun click transition
================================ */



/* ===============================
   Parallax (desktop only)
================================ */
let targetX = 0;
let targetY = 0;

document.addEventListener("pointermove", e => {

    if (e.pointerType === "touch") return;

    targetX = (e.clientX / window.innerWidth - 0.5) * 6;
    targetY = (e.clientY / window.innerHeight - 0.5) * 6;
});

function animateParallax() {

    if (solarSystem) {
        solarSystem.style.transform =
            `translate(-50%, -50%)
             rotateX(${-targetY}deg)
             rotateY(${targetX}deg)`;
    }

    requestAnimationFrame(animateParallax);
}

animateParallax();


/* ===============================
   Mobile viewport lock
================================ */
function lockViewportHeight() {
    document.documentElement.style
        .setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

lockViewportHeight();
window.addEventListener("resize", lockViewportHeight);


/* ===============================
   Random orbit start
================================ */
document.querySelectorAll(".orbit").forEach(orbit => {

    const start = Math.random() * 360;
    const duration =
        parseFloat(getComputedStyle(orbit).animationDuration);

    orbit.style.animationDelay =
        `-${(start / 360) * duration}s`;
});

});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {

    const sun = document.getElementById("sunTrigger");
    const body = document.body;

    sun.addEventListener("click", () => {

        if (body.classList.contains("leaving")) return;
        body.classList.add("leaving");

        // Pause orbits
        document.querySelectorAll(".orbit").forEach(o => {
            o.style.animationPlayState = "paused";
        });

        // Grow sun
        sun.style.transition = "transform 2.5s cubic-bezier(.77,0,.18,1)";
        sun.style.transform = "translate(-50%, -50%) scale(6)";

        // Fade everything else
        document.querySelectorAll(".orbit, .starfield, .intro-text")
            .forEach(el => {
                el.style.transition = "opacity 1.2s ease";
                el.style.opacity = "0";
            });

        // Fade screen to black
        setTimeout(() => {
            document.body.style.transition = "opacity 1s ease";
            document.body.style.opacity = "0";
        }, 2200);

        // Navigate after fade
        setTimeout(() => {
            window.location.href = "planets/sun.html";
        }, 3200);

    });

});