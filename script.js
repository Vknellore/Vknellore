const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
