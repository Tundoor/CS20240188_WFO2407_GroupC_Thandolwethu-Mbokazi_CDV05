// Items from Dom

const navToggle = document.querySelector('.hamburger');
// KanBan Images
const img1KTM = document.getElementById('img-1-KTM');
const img2KTM = document.getElementById('img-2-KTM');
const img3KTM = document.getElementById('img-3-KTM');

// Van Life Images 
const img1VL = document.getElementById('img-1-VL');
const img2VL = document.getElementById('img-2-VL');
const img3VL = document.getElementById('img-3-VL');

// Cache Bank Landing Images 

const img1CBL = document.getElementById('img-1-CBL');
const img2CBL = document.getElementById('img-2-CBL');
const img3CBL = document.getElementById('img-3-CBL');

// Nav link toggle

const modal = document.querySelector(".hamburger-modal");

navToggle.addEventListener('click', () => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }

});