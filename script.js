//  showing navbar when click menu on mobile view//

const mobile = document.querySelector('.menu-toggle');
const mobileLInk = document.querySelector('.sidebar');


mobile.addEventListener("click", function(){
 mobile.classList.toggle("is-active");
 mobileLInk.classList.toggle("active");
});

//close menu when click//

mobileLInk.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=900 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLInk.classList.toggle("active");
    }
})

// Variables
var step = 100;
var stepFilter = 60;
var scrolling = true;

// Function to animate horizontal scrolling
function animateScroll(element, amount) {
    element.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}

// Attach click event to the back button for .highlight-wrapper
document.querySelector(".back").addEventListener("click", function(e) {
    e.preventDefault();
    var highlightWrapper = document.querySelector(".highlight-wrapper");
    animateScroll(highlightWrapper, -step);
});

// Attach click event to the next button for .highlight-wrapper
document.querySelector(".next").addEventListener("click", function(e) {
    e.preventDefault();
    var highlightWrapper = document.querySelector(".highlight-wrapper");
    animateScroll(highlightWrapper, step);
});

// Attach click event to the back button for .filter-wrapper
document.querySelector(".back-menu").addEventListener("click", function(e) {
    e.preventDefault();
    var filterWrapper = document.querySelector(".filter-wrapper");
    animateScroll(filterWrapper, -stepFilter);
});

// Attach click event to the next button for .filter-wrapper
document.querySelector(".next-menu").addEventListener("click", function(e) {
    e.preventDefault();
    var filterWrapper = document.querySelector(".filter-wrapper");
    animateScroll(filterWrapper, stepFilter);
});
