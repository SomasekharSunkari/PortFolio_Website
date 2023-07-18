const icon1  = document.getElementById("icon1");
const element  = document.getElementById("dis");
const canvaid = document.getElementById("canvaid");
let context = canvaid.getContext("2d");;
context.beginPath();
context.strokeStyle = "white";
context.moveTo(0,0);
context.lineTo(250 , 0);
context.lineTo(0,500);
context.stroke();

icon1.addEventListener("click",()=>{
    if(element.style.display == "none")
    {
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
})


