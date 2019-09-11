// Navigation Toggle

let toggleButton = document.getElementsByClassName('menu')[0];
let navbarLinks = document.getElementsByClassName('main-nav')[0];

toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active')
});

const animation = lottie.loadAnimation({
     container : document.getElementById('bm'),
     renderer: 'svg',
     loop: true,
     autoplay: true,
     path: 'data.json'
})
