const starfield = document.getElementById("starfield");
const shootingStar = document.getElementById("shootingStar");
const solarSystem = document.getElementById("solarSystem");
const sun = document.getElementById("sunTrigger");

/* Fade in */
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

/* Real preload */
fetch("planets/sun.html");

/* Generate random stars */
for (let i = 0; i < 120; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starfield.appendChild(star);
}

/* Random starting orbit rotation */
document.querySelectorAll(".orbit").forEach(orbit => {
    const randomStart = Math.random() * 360;
    const speed = orbit.dataset.speed;
    orbit.style.animationDuration = speed + "s";
    orbit.style.transform =
        `translate(-50%,-50%) rotate(${randomStart}deg)`;
});

/* Shooting star every 10s */
setInterval(() => {
    shootingStar.classList.remove("shoot");
    void shootingStar.offsetWidth;
    shootingStar.classList.add("shoot");
}, 10000);

/* Smooth zoom + fade transition */
sun.addEventListener("click", () => {

    solarSystem.style.transform = "scale(2.5)";
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "planets/sun.html";
    }, 700);
});