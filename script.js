// Navigation Toggle

let toggleButton = document.getElementsByClassName('menu')[0];
let navbarLinks = document.getElementsByClassName('main-nav')[0];

toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active')
});


