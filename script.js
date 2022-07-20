let menu = document.getElementById("menu-bar");
let navbar = document.getElementById("navbar");
let search = document.getElementById("search");
let search_bar = document.getElementById("search-bar");






// button.addEventListener("click", myFunc(), false);
// function myFunc(){
//     alert("Welcome");
// }


// menu.onclick = () => {
//     navbar.classList.toggle('active');
// }

menu.addEventListener("click", navbarDisplay);
function navbarDisplay(){
    navbar.classList.toggle('active');
    search.classList.remove("active");
}

search_bar.addEventListener("click", menuDisplay);
function menuDisplay(){
    search.classList.toggle('active');
    navbar.classList.remove("active");
}



// SLIDES CODES FOR AUTOMATIC SLIDES
let slideIndex = 0;
slideShow();

function slideShow(){
    let i;
    let slide = document.getElementsByClassName("slide");
    let dot = document.getElementsByClassName("dot");
    for(i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }
    slideIndex ++;
    if(slideIndex > slide.length){
        slideIndex = 1;
    }
    slide[slideIndex - 1].style.display = "grid";    
    setTimeout(slideShow, 2000);
}

// SLIDES CODES FOR MANUAL SLIDES
// let slideIndex = 1;

// function slideShow(n){
//     let i;
//     let slide = document.getElementsByClassName("slide");
//     let dot = document.getElementsByClassName("dot");
//     for(i=0; i<slide.length; i++){
//         slide[i].style.display = "none";
//     }
//     if(n> slide.length){
//         slideIndex = 1;
//     }
//     if(n<1){
//         slideIndex = slide.length
//     }
//     for(i=0; i<dot.length; i++){
//         dot[i].className = dot[i].className.replace("active", " ");
//     }
//     slide[slideIndex - 1].style.display = "grid";
//     dot[slideIndex-1].className += "active";

// }

// }


