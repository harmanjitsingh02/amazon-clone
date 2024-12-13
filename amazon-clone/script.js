// let slideBtnleft = document.getElementById("slide-btn-left")
// let slideBtnright = document.getElementById("slide-btn-right")

// let imgItem = document.querySelectorAll(".image-item")
// console.log(imgItem)

// let startslider = 0
// let endslider = imgItem.length-1 * 100
 


// slideBtnleft.addEventListener("click" ,()=>{
//     alert("left btn")
// })
// slideBtnright.addEventListener("click", ()=>{
//     if(startslider>= endslider){
//         startslider = startslider - 100;
//     }
//     imgItem.forEach(element => {
//         element.style.transform = `translateX(${startslider}%)`
//     })
// })


const imageContainer = document.querySelector(".image-list");
const leftButton = document.getElementById("slide-btn-left");
const rightButton = document.getElementById("slide-btn-right");

let currentIndex = 0;
const totalImages = document.querySelectorAll(".image-item").length;

// Function to move to the next image
function slideNext() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSliderPosition();
}

// Function to move to the previous image
function slidePrev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSliderPosition();
}

// Update slider position based on currentIndex
function updateSliderPosition() {
    imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
rightButton.addEventListener("click", slideNext);
leftButton.addEventListener("click", slidePrev);

// Event listener for keyboard arrow keys
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        slideNext();
    } else if (event.key === "ArrowLeft") {
        slidePrev();
    }
});

// Automatically slide every 3 seconds
setInterval(slideNext, 6000);
