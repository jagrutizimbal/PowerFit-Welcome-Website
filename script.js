const modal = document.getElementById("modal");
const btn = document.getElementById("joinBtn");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("#modal form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Thank you for joining PowerFit Gym! 🎉");
    modal.style.display = "none"; 
    form.reset(); 
});

// Open Modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Close Modal (X button)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close Modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Close Modal with ESC key (New Feature 🔥)
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});