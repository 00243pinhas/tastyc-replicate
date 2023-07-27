// responsive navbar

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbarre');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }),
);


//Nave Height 


var fixnav = function(){

    var pageheight=window.scrollY;

    if (pageheight >=150){
        navMenu.style.marginTop='0px'
    } else{
        navMenu.style.marginTop='10px'
    }
}

window.addEventListener('scroll',fixnav);
