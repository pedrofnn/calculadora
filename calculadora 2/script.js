const numPad = document.querySelectorAll("#num button");
const oprPad = document.querySelectorAll("#opr button");
const res = document.getElementById("res");
let numRes;
let number1;
let opera

numPad.forEach((number) => {
    res.innerHTML = "";
    if(!isNaN(number.textContent)){
        number.addEventListener("click",() => {
            res.innerHTML += number.textContent;
            numRes = Number(res.textContent.replace(",",));
        })
    } else{
        number.addEventListener("click", () =>{
            if(!isNaN(numRes)){
                res.innerHTML += ",";
            }
        })
    }
})

oprPad.forEach((opr) => {
    switch(opr.textContent){
        case "+":{
            opr.addEventListener("click", ()=>{
                if(isNaN(number1)){
                    number1 = numRes;
                    opera = 1;
                    res.innerHTML = ""
                }
            })
        };break;
        case "-":{};break;
        case "x":{};break;
        case "/":{};break;
    }
})