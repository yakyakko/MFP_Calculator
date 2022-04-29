let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let percent = document.querySelector('.percent');
let backspace = document.getElementById("backspace");
let swap = document.getElementById("swap");
let pow = document.getElementById("pow");
let sqr = document.getElementById("sqr");

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];
let memArea = document.getElementById("mem-area");
let memBtn = document.getElementById("memBtn");
let memValue;
let per1;
let removePer;

//number inputs
btnSpread.forEach((button, i) => {
    button.addEventListener("click", () => {
        //inner value for calculator

        if(resultBox.innerHTML === "0") {
            resultBox.innerHTML = "";
        }
        let value = btns[i].innerHTML;
        resultBox.innerHTML += value;
    });
});

// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', ()=> {
    let allInputs = resultBox.innerHTML;
    resultBox.innerHTML = evaluate(allInputs);
    });
    
// Clear all Inputs
    clearBtn.addEventListener('click', ()=> {
        resultBox.innerHTML = "";
        memArea.innerHTML = ""
    });

// Mem Value M button
memBtn.addEventListener("click", () => {    
   if(resultBox.innerHTML === "" || resultBox.innerHTML === "0"){
       memArea.innerHTML = "E!"; //can not store value
       setTimeout(() =>memArea.innerHTML = "", 1500);
    } else if(memArea.innerHTML === "" || memArea.innerHTML === "0"){
        memArea.innerHTML = resultBox.innerHTML;
        resultBox.innerHTML = "";
    } else {
        resultBox.innerHTML += memArea.innerHTML;
        memArea.innerHTML = "";
    }
})

// for % button 
percent.addEventListener("click", () => {
    let removePer = resultBox.innerHTML.replace("%", "");
    per1 = evaluate(removePer) / 100;
    resultBox.innerHTML = per1;    
});

// Back Space (delete last digit)
backspace.addEventListener("click", () => {
    let delBack = resultBox.innerHTML.split("");
    delBack.pop();
    resultBox.innerHTML = delBack.join("").toString();
});

//for =/- button
swap.addEventListener("click", () => {
    if(resultBox.innerHTML !== "" && resultBox.innerHTML !== "0") {
        resultBox.innerHTML = evaluate(resultBox.innerHTML) * -1;
    }
});

//for pow button
pow.addEventListener("click", () => {
    if(resultBox.innerHTML !== "" && resultBox.innerHTML !== "0") {
        resultBox.innerHTML += "**";
    }
});

// for sqr button
sqr.addEventListener("click", () => {
    if(resultBox.innerHTML !== "" && resultBox.innerHTML !== "0") {
        resultBox.innerHTML = Math.sqrt(eval(resultBox.innerHTML));
    }
});
