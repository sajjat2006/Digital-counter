let display= document.querySelector(".display");
let plus= document.querySelector("#plus");
let minus= document.querySelector("#minus");
let reset= document.querySelector(".reset")
let count=0;

plus.addEventListener("click",function(){
    count++;
    display.innerText=count;
});
minus.addEventListener("click",function(){
    if(count>0){
        count--;
        display.innerText=count;
    }
});

reset.addEventListener("click",function(){
    count=0;
    display.innerText=count;
});

