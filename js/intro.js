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
sun.addEventListener("click", () => {
    // Add fade out
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = 0;
    introText.style.opacity = 0;

    // Slight zoom on solar system
    solarSystem.style.transition = "transform 0.8s ease";
    solarSystem.style.transform += " scale(1.3)";

    setTimeout(() => {
        if (nextPageHTML) {
            // Replace document content with preloaded page
            document.open();
            document.write(nextPageHTML);
            document.close();

            // Optional: fade in new page
            document.body.style.opacity = 0;
            document.body.style.transition = "opacity 0.8s ease";
            requestAnimationFrame(() => {
                document.body.style.opacity = 1;
            });
        } else {
            // fallback if preloading failed
            window.location.href = "planets/sun.html";
        }
    }, 800);
});

// 5️⃣ Parallax tilt
document.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 8;
    let y = (e.clientY / window.innerHeight - 0.5) * 8;
    solarSystem.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

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