const solarSystem = document.getElementById("solarSystem");
const sun = document.getElementById("sunTrigger");
const shootingStar = document.querySelector(".shooting-star");

/* ===== Smooth Sun Transition ===== */

sun.addEventListener("click", () => {

    sun.style.animation = "none";

    solarSystem.style.transition = "transform 1s ease-in-out";
    solarSystem.style.transform = "scale(3)";

    document.querySelector(".intro-text").style.opacity = "0";

    setTimeout(() => {
        window.location.href = "planets/sun.html";
    }, 1000);
});


/* ===== Shooting Star every 10s ===== */

setInterval(() => {
    shootingStar.classList.remove("shooting");
    void shootingStar.offsetWidth; // restart animation
    shootingStar.classList.add("shooting");
}, 10000);


/* ===== Parallax Tilt ===== */

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
        let tiltX = e.gamma / 20;
        let tiltY = e.beta / 40;

        solarSystem.style.transform =
            `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    });
} else {
    // Mouse fallback
    document.addEventListener("mousemove", (e) => {
        let x = (e.clientX / window.innerWidth - 0.5) * 10;
        let y = (e.clientY / window.innerHeight - 0.5) * 10;

        solarSystem.style.transform =
            `rotateX(${-y}deg) rotateY(${x}deg)`;
    });
}