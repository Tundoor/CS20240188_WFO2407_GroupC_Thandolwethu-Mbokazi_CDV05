// Items from Dom

const navToggle = document.querySelector('.hamburger');

// Nav link toggle

const modal = document.querySelector(".hamburger-modal");

navToggle.addEventListener('click', () => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }

});