 const inputE1 =  document.querySelector(".input");
//console.log(inputE1.checked);


const bodyE1 = document.querySelector("body")

inputE1.addEventListener("input", ()=>{
    updateBody()
} )

function updateBody(){
    if(inputE1.checked){
        bodyE1.style.background = "black"
    } else{
        bodyE1.style.background = "white"
    }
}


