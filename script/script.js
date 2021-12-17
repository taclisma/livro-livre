let sliderCad = document.getElementById('slider-cad');
console.log(sliderCad);


let direitaCad = document.getElementById('dir-cad');
console.log(direitaCad);
let esquerdaCad = document.getElementById('esq-cad');
console.log(esquerdaCad);

esquerdaCad.addEventListener('click', function(){
    sliderCad.scrollLeft -= 155;
})

direitaCad.addEventListener('click', function(){
    sliderCad.scrollLeft += 155;
})

let slider = document.getElementById('slider-tro');
console.log(slider);


let buttonRight = document.getElementById('dir-tro');
console.log(buttonRight);
let buttonLeft = document.getElementById('esq-tro');
console.log(buttonLeft);

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 320;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 320;
})