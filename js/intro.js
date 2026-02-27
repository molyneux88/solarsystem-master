const starfield = document.getElementById("starfield");
const shootingStar = document.getElementById("shootingStar");
const solarSystem = document.getElementById("solarSystem");
const sun = document.getElementById("sunTrigger");
const introText = document.querySelector(".intro-text");

let nextPageHTML = null;

// 1️⃣ Preload the next page in memory
fetch("planets/sun.html")
    .then(response => response.text())
    .then(html => {
        nextPageHTML = html;
        console.log("Next page preloaded.");
    });

// 2️⃣ Generate stars
for (let i = 0; i < 120; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starfield.appendChild(star);
}

// 3️⃣ Shooting star every 10s
setInterval(() => {
    shootingStar.classList.remove("shoot");
    void shootingStar.offsetWidth;
    shootingStar.classList.add("shoot");
}, 10000);

// 4️⃣ Smooth transition on Sun click
const zoomWrapper = document.getElementById("solarZoom");

sun.addEventListener("click", () => {

    document.body.classList.add("fade-out");
    document.querySelector(".intro-text").style.opacity = "0";

    /* smooth zoom INTO sun */
    zoomWrapper.style.transform =
        "translate(-50%, -50%) scale(6)";

    /* flash */
    const flash = document.createElement("div");
    flash.className = "sun-flash";
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.classList.add("active");
    }, 200);

    setTimeout(() => {
        window.location.href = "planets/sun.html";
    }, 1200);
});

// 5️⃣ Parallax tilt
let targetX = 0;
let targetY = 0;

document.addEventListener("pointermove", (e) => {

    /* ignore touches */
    if (e.pointerType === "touch") return;

    targetX = (e.clientX / window.innerWidth - 0.5) * 6;
    targetY = (e.clientY / window.innerHeight - 0.5) * 6;
});

/* smooth animation loop */
function animateParallax() {

    solarSystem.style.transform =
        `translate(-50%, -50%)
         rotateX(${-targetY}deg)
         rotateY(${targetX}deg)`;

    requestAnimationFrame(animateParallax);
}

animateParallax();

function lockViewportHeight() {
    document.documentElement.style
        .setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

lockViewportHeight();
window.addEventListener('resize', lockViewportHeight);

document.querySelectorAll(".orbit").forEach(orbit => {
    const start = Math.random() * 360;
    orbit.style.animationDelay = `-${start / 360 *
        parseFloat(getComputedStyle(orbit).animationDuration)}s`;
});