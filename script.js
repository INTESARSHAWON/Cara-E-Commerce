const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('#navbar');

if (bar){
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}

// // sproduct.html
// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");

//     smallimg[0].addEventListener ("click", ()=>{
//         MainImg.src = smallimg[0].src;
//     });

//     smallimg[1].addEventListener ("click", ()=>{
//         MainImg.src = smallimg[1].src;
//     });
    
//     smallimg[2].addEventListener ("click", ()=>{
//         MainImg.src = smallimg[2].src;
//     });

//     smallimg[3].addEventListener ("click", ()=>{
//         MainImg.src = smallimg[3].src;
//     });
