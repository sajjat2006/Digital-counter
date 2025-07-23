let display= document.querySelector(".display");
let plus= document.querySelector("#plus");
let minus= document.querySelector("#minus");
let reset= document.querySelector(".reset")
let count=0;
function updateDisplay(){
    display.innerText= count;
    if (count===10){
        display.style.color= "red";
    } else {
        display.style.color ="black"
    }

    plus.disabled = count>=10;
    minus.disabled = count<=0;
}

plus.addEventListener("click",function(){
    if(count<10){
        count++;
        updateDisplay();
    if (count === 10){
        alert("Reched max value");
    }
    } 
});
minus.addEventListener("click",function(){
    if(count>0){
        count--;
        updateDisplay();
        if(count === 0){
            alert("Reched min value");
        }
        }
});

reset.addEventListener("click",function(){
    count=0;
    updateDisplay();
});

window.onload = updateDisplay();
