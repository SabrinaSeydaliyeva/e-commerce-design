let openBtn=document.querySelector(".open-btn")
let Menudiv=document.querySelector(".div")
let closeBtn=document.querySelector(".close-btn")

openBtn.addEventListener("click", openBtnFunc);

function openBtnFunc(){
Menudiv.style.display="block"
closeBtn.style.display='block'
openBtn.style.display='none'
}

closeBtn.addEventListener("click", closeBtnFunc)
function closeBtnFunc(){
    Menudiv.style.display="none"
    closeBtn.style.display='none'
    openBtn.style.display='block'
}