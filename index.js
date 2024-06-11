const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    // eval function takes an expression (1+2+3/5) and evaluate it
    // just like it has a built in calculator
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
    
}