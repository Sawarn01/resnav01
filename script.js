let hamBtn = document.querySelector('.fa-bars');
let clsBtn = document.querySelector('.fa-xmark');

let mobMenu = document.querySelector('.mobMenu');

hamBtn.addEventListener('click', function () {
    hamBtn.classList.add('mobMenuActive');
    mobMenu.classList.add('mobbtnClosed');

})

clsBtn.addEventListener('click', function () {
    mobMenu.classList.remove('mobbtnClosed');
    hamBtn.classList.remove('mobMenuActive');
})