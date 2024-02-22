const intro = document.querySelector('.tab1');
const work = document.querySelector('.tab2');
const about = document.querySelector('.tab3');
const contact = document.querySelector('.tab4');
const front = document.querySelector('.menu');

document.querySelector('.intro').addEventListener('click', () => {
    front.classList.add('hidden');
    intro.classList.remove('hidden');
    document.querySelector('.close').addEventListener('click', () => {
        front.classList.remove('hidden');
        intro.classList.add('hidden');
    });
});
document.querySelector('.work').addEventListener('click', () => {
    front.classList.add('hidden');
    work.classList.remove('hidden');
    document.querySelector('.close1').addEventListener('click', () => {
        front.classList.remove('hidden');
        work.classList.add('hidden');
    });
});
document.querySelector('.contact').addEventListener('click', () => {
    front.classList.add('hidden');
    contact.classList.remove('hidden');
    document.querySelector('.close3').addEventListener('click', () => {
        front.classList.remove('hidden');
        contact.classList.add('hidden');
    });
});
document.querySelector('.aboutBtn').addEventListener('click', () => {
    front.classList.add('hidden');
    about.classList.remove('hidden');
    document.querySelector('.close2').addEventListener('click', () => {
        front.classList.remove('hidden');
        about.classList.add('hidden');
    });
});