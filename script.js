function toHome() {
    const home = document.getElementById("home");
    home.scrollIntoView({behavior: "smooth"});
}

function toRolam() {
    const rolam = document.getElementById("rolam");
    const offset = 50; 
    const rolamPosition = rolam.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: rolamPosition - offset, behavior: "smooth" });
}

function toKapcsolat() {
    const kapcsolat = document.getElementById("kapcsolat");
    const offset = 150; 
    const kapcsolatPosition = kapcsolat.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: kapcsolatPosition - offset, behavior: "smooth" });
}

function toWsup() {
    const wsup = document.getElementById("wsup");
    const offset = 150; 
    const wsupPosition = wsup.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: wsupPosition - offset, behavior: "smooth" });
}

function toggleMenu() {
    document.querySelector(".navbcon").classList.toggle("active");
}