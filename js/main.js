const burger = document.querySelector(".nav-bar__burger");
const navBar = document.querySelector(".nav-bar__modal");
const navLink = document.querySelectorAll(".nav-bar__modal-link li");

// Function to close the navbar
const closeNavbar = () => {
    navBar.classList.remove('nav-active');
    burger.classList.remove('toggle');
};

// Add a click event listener to the burger to open the navbar
burger.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Add a click event listener to each nav link
navLink.forEach((link, index) => {
    link.addEventListener('click', () => {
        closeNavbar(); // Close the navbar when a link is clicked
    });
});


// Reviews
const leftArrow = document.querySelector('.reviews-list__arrow-left');
const rightArrow = document.querySelector('.reviews-list__arrow-right');
const slide = document.querySelector('.review-list__info');

let currentIndex = 0

// Function to change the color of the arrow if available to click
const changeColorArrow = () => {
    if (currentIndex > 0) {
        leftArrow.classList.add('able');
    } else {
        leftArrow.classList.remove('able');
    }

    if (currentIndex === 4) {
        rightArrow.classList.add('disabled');
    } else {
        rightArrow.classList.remove('disabled');
    }
}

// Click event listener for right arrow
rightArrow.addEventListener('click', () => {
    if (currentIndex < 4) {
        currentIndex++;
        slide.style.transform = `translateX(-${currentIndex * 650}px)`;
        slide.style.transition = "0.2s ease-out";
        changeColorArrow();
    }
})

// Click event listener for left arrow
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slide.style.transform = `translateX(-${currentIndex * 650}px)`;
        slide.style.transition = "0.2s ease-out";
        changeColorArrow();
    }
})


// Frequent Questions
const cards = document.querySelectorAll(".questions-list__card");
const answers = document.querySelectorAll(".questions-list__card-answer");
const signs = document.querySelectorAll(".fa-plus");

// Event listeners for each card
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        setTimeout(() => {
            if (answers[index].classList.contains("active")) {
                answers[index].classList.remove("active");
                card.style.background = "#fff";
                card.style.color = "#000";
                signs[index].classList.replace("fa-minus", "fa-plus");
            } else {
                cards.forEach((item, i) => {
                    if (i !== index) {
                        answers[i].classList.remove("active");
                        item.style.background = "#fff";
                        item.style.color = "#000";
                        signs[i].classList.replace("fa-minus", "fa-plus");
                    }
                });

                answers[index].classList.add("active");
                card.style.background = "#F9A101";
                card.style.color = "#fff";
                signs[index].classList.replace("fa-plus", "fa-minus");
            }
        }, 100);
    })
});