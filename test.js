const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const movingContainer = document.querySelector('.p3_container');
const slides = document.querySelectorAll('.p3_content');
let currentIndex = 0;
console.log(slides.length)


a1.addEventListener('click', () => {
    a1.style.backgroundColor="#09c";
    a2.style.backgroundColor="#fff";
    a3.style.backgroundColor="#fff";
    currentIndex=0
    updateSlidep3();
});
a2.addEventListener('click', () => {
    a1.style.backgroundColor="#fff";
    a2.style.backgroundColor="#09c";
    a3.style.backgroundColor="#fff";
    currentIndex=1
    updateSlidep3();
});
a3.addEventListener('click', () => {
    a1.style.backgroundColor="#fff";
    a2.style.backgroundColor="#fff";
    a3.style.backgroundColor="#09c";
    currentIndex=2
    updateSlidep3();
});











function updateSlidep3() {
    const slideWidth = slides[0].offsetWidth; // Adjust for margin
    movingContainer.style.transitionDuration = "1s";
    movingContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

}
