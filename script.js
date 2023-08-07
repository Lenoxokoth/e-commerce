// nav responsive

const menu = document.querySelector('.nav-menu');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');

if (bar) {
    bar.addEventListener('click', () =>{
        menu.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        menu.classList.remove('active');
    })
}
