let firstOperand = "";
let operationType = "";
let secondOperand = "";
let isSecondOperation = false;
export let calculatingPerimissioned = true;

export function filterClicked(event, result)
{

    

    

    

    console.log(document.getElementById("AC").innerHTML)


    if(event.target.id === 'EQ' && calculatingPerimissioned) EvaluateOperation(result);
    else if(event.target.id === "AC") clearCalculator(result,event)
    else if(event.target.id === "INVERT" && calculatingPerimissioned) invertResult(result)
    else if(isNumber(event.target.innerHTML) && calculatingPerimissioned) showNumber(event, result);
    else if(isDot(event.target.innerHTML) && calculatingPerimissioned) insertDot(result);
    else if (calculatingPerimissioned) chooseOperation(event)
    
    
    let innerHTML = removeSpaces(result.firstElementChild.innerHTML);

    if(innerHTML !== "0" ) document.getElementById("AC").innerHTML = "C";
    

}

function EvaluateOperation(result)
{

    secondOperand = result.firstElementChild.innerHTML;
    calculatingPerimissioned = false;
    try{
        
        
        
        result.firstElementChild.innerHTML = eval(correctOperand(firstOperand) + correctOperationType(operationType) + correctOperand(secondOperand));
        if(result.firstElementChild.innerHTML.length == 8) result.firstElementChild.style.fontSize = "60px";
        else if (result.firstElementChild.innerHTML.length == 9) result.firstElementChild.style.fontSize = "52px";

        correctResult(result);

        
    }
    catch(e)
    {
        
    }
}


function clearCalculator(calculatorResult, event)
{
    lightBtn(event);
    perishClass("chosen");
    document.getElementById("AC").innerHTML = "AC";
    firstOperand = "";
    operationType ="";
    secondOperand = "";
    isSecondOperation = false;
    calculatingPerimissioned = true;
    calculatorResult.firstElementChild.innerHTML = "0";
    return "";
}

function invertResult(result)
{


    result.firstElementChild.innerHTML = removeSpaces(result.firstElementChild.innerHTML);
    if(result.firstElementChild.innerHTML === "0") return;
    else if(result.firstElementChild.innerHTML[0] === '-') result.firstElementChild.innerHTML = result.firstElementChild.innerHTML.substring(1);
    else result.firstElementChild.innerHTML = '-' + result.firstElementChild.innerHTML;
}

function showNumber(event, result) {
    
    let innerHTML = event.target.innerHTML;
    
    if(operationType.length !== 0 && !isSecondOperation)
        {
            firstOperand =  result.firstElementChild.innerHTML;

            result.firstElementChild.innerHTML = "";
            isSecondOperation = true;
            perishClass("chosen");
            

        }

    lightBtn(event)

    
    if(result.firstElementChild.innerHTML === "0") 
        {
            result.firstElementChild.innerHTML = removeSpaces(innerHTML);
            
        }
    else result.firstElementChild.innerHTML+= removeSpaces(innerHTML);
    
       
        
        

}

function insertDot(result)
{
    if(result.firstElementChild.innerHTML.indexOf(",") !== -1)  return;

    result.firstElementChild.innerHTML += ",";
}

function chooseOperation(event)
{
    let target = event.target;
    let className = "chosen"
    let classHolders = searchClass(className);
    

    if(classHolders !== null) 
    {
        perishClass(className);
    }

    target.classList.add("chosen");

    operationType = removeSpaces(target.innerHTML);

}
 

function correctOperand(operand)
{
    operand =  removeSpaces(operand).replace(',', ".");
    return operand;
}

function correctOperationType(str)
{
    str = removeSpaces(str)
    if(str === "×") return "*"
    else if ( str === "÷") return "/"
    
    //else 
    return str;
    
}

function correctResult(result)
{
    if(result.firstElementChild.innerHTML == Infinity 
        ||
        result.firstElementChild.innerHTML == -Infinity
    ) 
    {
        result.firstElementChild.innerHTML = "ERROR"
        return;
    }

    result.firstElementChild.innerHTML = result.firstElementChild.innerHTML.replace(".", ",")


}

function isNumber(str)
{
    removeSpaces(str);
    return Number.isInteger(Number(str));
}

function isDot(str)
{
    return removeSpaces(str) === ",";
}

function searchClass(className)
{
    return document.body.getElementsByClassName(className);
}

function perishClass(className)
{
    let classHolders = searchClass(className);
    
    for(let holder of searchClass(className))
    {
        holder.classList.remove(className);
    }
}

function lightBtn(event)
{
    event.target.classList.add("active");
    setTimeout(() => {
        event.target.classList.remove("active");
    }, 600);
}



function removeSpaces(str)
{
    let len = str.length;
    let result= "";

   result = str.replace(new RegExp('\\s+', 'g'), "");
   
    return result;
}