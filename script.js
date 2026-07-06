// ===============================
// Sweety Hostel - script.js
// ===============================

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// Fade In Animation
const cards = document.querySelectorAll(
".card, .room-card, .room-box, .review-card, .why-card"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

// Welcome Message
window.onload = function(){

setTimeout(function(){

alert("🏨 Welcome to Sweety Hostel! We hope you enjoy your stay.");

},1000);

};

// Booking Button
document.querySelectorAll(".btn,.hero-btn,.room-btn").forEach(button=>{

button.addEventListener("click",function(){

console.log("Booking button clicked.");

});

});