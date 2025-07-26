let darkMode= document.querySelector("#dark-mode");
let lightMode= document.querySelector("#light-mode");
let display= document.querySelector(".display");
let plus= document.querySelector("#plus");
let minus= document.querySelector("#minus");
let reset= document.querySelector(".reset");
let main= document.querySelector(".main");
let body= document.querySelector("body");

darkMode.addEventListener("click",function(){
    main.classList.add("dark");
    main.classList.remove("light");
    body.classList.add("bmode1")
})
lightMode.addEventListener("click",function(){
    main.classList.add("light");
    main.classList.remove("dark");
    body.classList.remove("bmode1")
})


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
