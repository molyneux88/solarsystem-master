const starfield = document.getElementById("starfield");
const shootingStar = document.getElementById("shootingStar");
const solarSystem = document.getElementById("solarSystem");
const sun = document.getElementById("sunTrigger");

/* Generate random stars */
for (let i = 0; i < 120; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starfield.appendChild(star);
}

/* Shooting star every 10s */
setInterval(() => {
    shootingStar.classList.remove("shoot");
    void shootingStar.offsetWidth;
    shootingStar.classList.add("shoot");
}, 10000);

/* Smooth zoom without jump */
sun.addEventListener("click", () => {

    solarSystem.style.transform += " scale(2.5)";
    document.querySelector(".intro-text").style.opacity = "0";

    setTimeout(() => {
        window.location.href = "planets/sun.html";
    }, 1000);
});

/* Parallax tilt */
document.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 8;
    let y = (e.clientY / window.innerHeight - 0.5) * 8;

    solarSystem.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
});