window.addEventListener('load' ,function(e){
    const humburger = document.querySelector(".humburgar");
const navlinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
console.log(e.target.className)
humburger.addEventListener('click', (e)=>{
    navlinks.classList.toggle('open');
    overlay.classList.toggle('open');
});
overlay.addEventListener('click', (e)=>{
    navlinks.classList.remove('open');
    overlay.classList.remove('open');
});
})