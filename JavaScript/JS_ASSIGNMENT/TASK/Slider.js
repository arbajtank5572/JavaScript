let sliderat = 0

const sliderrr = document.querySelector('.slider-container')
const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')

function moveSlider() {
    sliderrr.style.transform = `translateX(-${sliderat * 100}%)`
}

prevbtn.addEventListener('click', () => {
    if (sliderat == 0) return;
    --sliderat
    moveSlider()
})

nextbtn.addEventListener('click', () => {
    if (sliderat == 3) return;
    ++sliderat
    moveSlider()
})