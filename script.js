//Header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
<<<<<<< HEAD
    document.querySelector('body').classList.toggle('mobile-nav-active');
=======
    document.querySelaector('body').classList.toggle('mobile-nav-active');
>>>>>>> d86d507 (initial commit)
    this.classList.toggle('fa-xmark')
}) 


let typed = new Typed(".auto-input",{
    strings: ['Front-End Developer.', 'Programmer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});