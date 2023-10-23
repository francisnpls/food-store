const navSlide = () => {
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
}
navSlide()

const reviews = () => {
    const leftArrow = document.querySelector('.reviews-list__arrow-left');
    const rightArrow = document.querySelector('.reviews-list__arrow-right');
    const slide = document.querySelector('.review-list__info');

    let currentIndex = 0

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

    rightArrow.addEventListener('click', () => {
        if (currentIndex < 4) {
            currentIndex++;
            slide.style.transform = `translateX(-${currentIndex * 650}px)`;
            slide.style.transition = "0.2s ease-out";
            changeColorArrow();
        }
    })

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slide.style.transform = `translateX(-${currentIndex * 650}px)`;
            slide.style.transition = "0.2s ease-out";
            changeColorArrow();
        }
    })
}
reviews()

// const questions = () => {
//     // Select all elements once at the beginning
//     const card = document.querySelectorAll(".questions-list__card");
//     const answer = document.querySelectorAll(".questions-list__card-answer");
//     const sign = document.querySelectorAll(".fa-plus");

//     // Function to toggle the plus/minus sign and color
//     const changeSign = (sign) => {
//         if (sign.classList.contains("fa-plus")) {
//             sign.classList.remove("fa-plus");
//             sign.classList.add("fa-minus");
//             sign.style.color = "#fff";
//         } else {
//             sign.classList.remove("fa-minus");
//             sign.classList.add("fa-plus");
//             sign.style.color = "var(--secondary-color)";
//         }
//     }

//     // Event listeners for each card
//     card.forEach((cards, index) => {
//         cards.addEventListener('click', () => {
//             setTimeout(() => {
//                 if (answer[index].style.display === "block") {
//                     answer[index].style.display = "none";
//                     cards.style.background = "#fff";
//                     cards.style.color = "#000";
//                     changeSign(sign[index]);
//                 } else {
//                     answer[index].style.display = "block";
//                     cards.style.background = "#F9A101";
//                     cards.style.color = "#fff";
//                     changeSign(sign[index]);
//                 }
//             }, 100);

//         })
//     });
// }
// questions()

const questions = () => {
    // Select all elements once at the beginning
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
}
questions()