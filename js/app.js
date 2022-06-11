const btnUp = document.querySelector('.btnUp');

// scroller vers le haut
btnUp.addEventListener('click', () =>{

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// slid du document
const slidingNewsletter = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
        slidingNewsletter.classList.add('active')
    }
})



let date1 = new Date();

// parametre de date

let dateLocale = date1.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});

document.getElementById('p1').innerHTML = ' ' + dateLocale;

p1.style.marginTop  = "20px";

// scroll indicator

const scrollIndicator = document.querySelector(".scroll-indicator");
const main = document.querySelector("main");

const observer = new IntersectionObserver(handleIntersect)

observer.observe(main)

function handleIntersect(entries){
    const el = entries[0]; 
    if(el.isIntersecting){
        window.addEventListener("scroll", indicatorAnimation)
    } else if(!el.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation)
    }
}

function indicatorAnimation() {
    if(window.scrollY > main.offsetTop) {
        const percentage = ((window.scrollY - main.offsetTop) / 
        main.scrollHeight * 100).toFixed(2);
        scrollIndicator.style.transform = `scaleX(${(percentage / 100)})`
    } else{
        scrollIndicator.style.transform = "scaleX(0)"
    }
}