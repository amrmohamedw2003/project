// -------------------------- p2 
const p2_left = document.getElementById('p2_left');
const p2_right = document.getElementById('p2_right');
const movingContainer = document.querySelector('.bottom_of_the_left');
const slides = document.querySelectorAll('.moving_cont_mid');
const totalSlides = slides.length;
let currentIndex = 0;


console.log(slides.length)
p2_left.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else if(currentIndex==0){
        currentIndex=totalSlides-1;
    }
    updateSlidep2();

});

p2_right.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlidep2();
    }
    else if(currentIndex==totalSlides-1){
        currentIndex=0;
        updateSlidep2();
    }
});

function updateSlidep2() {
    const slideWidth = slides[0].offsetWidth + 30; // Adjust for margin
    movingContainer.style.transitionDuration = "1s";
    movingContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}






const  feature =document.getElementById('feature');
const  on_sale =document.getElementById('on_sale');
const  best_rated =document.getElementById('best_rated');

const feature_box=document.getElementById('feature_box');
const on_sale_box=document.getElementById('on_sale_box');
const best_rated_box=document.getElementById('best_rated_box');


feature.addEventListener('click' ,()=>{
    feature.style.color='black';
    feature.style.borderBottom='#09c 2px solid';

    on_sale.style.color='#828282';
    on_sale.style.borderBottom='none';

    best_rated.style.color='#828282';
    best_rated.style.borderBottom='none';

    best_rated_box.style.zIndex=2;
    on_sale_box.style.zIndex=1;
    feature_box.style.zIndex=3;

});

on_sale.addEventListener('click' ,()=>{
    on_sale.style.color='black';
    on_sale.style.borderBottom='#09c 2px solid';

    feature.style.color='#828282';
    feature.style.borderBottom='none';

    best_rated.style.color='#828282';
    best_rated.style.borderBottom='none';

    best_rated_box.style.zIndex=2;
    feature_box.style.zIndex=1;
    on_sale_box.style.zIndex=3;


});
best_rated.addEventListener('click' ,()=>{
    best_rated.style.color='black';
    best_rated.style.borderBottom='#09c 2px solid';

    feature.style.color='#828282';
    feature.style.borderBottom='none';
    on_sale.style.color='#828282';
    on_sale.style.borderBottom='none';
    feature_box.style.display='none';

    feature_box.style.zIndex=2;
    on_sale_box.style.zIndex=1;
    best_rated.style.zIndex=3;

});



// --------------------------end p2 




// -------------------------- p3




const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const movingContainer2 = document.querySelector('.p3_container');
const slides2 = document.querySelectorAll('.p3_content');
let currentIndex2 = 0;
console.log(slides.length)


a1.addEventListener('click', () => {
    a1.style.backgroundColor="#09c";
    a2.style.backgroundColor="#fff";
    a3.style.backgroundColor="#fff";
    currentIndex2=0
    updateSlidep3();
});
a2.addEventListener('click', () => {
    a1.style.backgroundColor="#fff";
    a2.style.backgroundColor="#09c";
    a3.style.backgroundColor="#fff";
    currentIndex2=1
    updateSlidep3();
});
a3.addEventListener('click', () => {
    a1.style.backgroundColor="#fff";
    a2.style.backgroundColor="#fff";
    a3.style.backgroundColor="#09c";
    currentIndex2=2
    updateSlidep3();
});

function updateSlidep3() {
    const slideWidth2 = slides2[0].offsetWidth; // Adjust for margin
    movingContainer2.style.transitionDuration = "1s";
    movingContainer2.style.transform = `translateX(-${currentIndex2 * slideWidth2}px)`;

}
