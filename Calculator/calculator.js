import * as funcs from "./functions.js";


let calculator = document.getElementsByClassName("calculator-buttons")[0];
let result =  document.getElementsByClassName("calculator-head")[0];

calculator.onclick = (event) =>
{
    

    if(event.target.classList[0] !==  "btn")     return;

    funcs.filterClicked(event, result);
    
    
    
    


}