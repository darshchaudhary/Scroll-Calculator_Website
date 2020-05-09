
var DOMstrings = {
        number1: document.getElementById("1_button"),
        number2: document.getElementById("2_button"),
        number3: document.getElementById("3_button"),
        number4: document.getElementById("4_button"),
        number5: document.getElementById("5_button"),
        number6: document.getElementById("6_button"),
        number7: document.getElementById("7_button"),
        number8: document.getElementById("8_button"),
        number9: document.getElementById("9_button"),
        number0: document.getElementById("0_button"),
        ACbutton: document.getElementById("AC_button"),
        resultDisplay: document.getElementById("result"),
        equalButton: document.getElementById("equal_button"),
};     
    var resultContent = [];

/////////////////////////////////////////////////////////////////////////////////////////////////
 
function displayNumber(num, val) 
{
    resultContent.push(val);
    
    if (document.getElementById("result").textContent === '0' || DOMstrings.resultDisplay.textContent === '')
    {
        DOMstrings.resultDisplay.textContent = val;
    } else 
    {
        DOMstrings.resultDisplay.textContent += val;
    }
    
}


function resulting() 
{
    let final = resultContent.join('');
    let finalResult = eval(final);
    console.log(final, finalResult);
    DOMstrings.resultDisplay.textContent = finalResult;
}
/////////////////////////////////////////////////////////////////////////////////////////////////

        
         DOMstrings.number1.onclick = function (){
                displayNumber(DOMstrings.number1, '1');
            }
         

     DOMstrings.number2.onclick = function() {
                displayNumber(DOMstrings.number2, '2');
            }
     

     DOMstrings.number3.onclick = function() {
                displayNumber(DOMstrings.number3, '3');
            }
     

     DOMstrings.number4.onclick = function() {
                displayNumber(DOMstrings.number4, '4');
            }
     

     DOMstrings.number5.onclick = function() {
                displayNumber(DOMstrings.number5, '5');
            }
     
     
     DOMstrings.number6.onclick = function() {
                displayNumber(DOMstrings.number6, '6');
            }
     

     DOMstrings.number7.onclick = function() {
                displayNumber(DOMstrings.number7, '7');
            }
     

     DOMstrings.number8.onclick = function() {
                displayNumber(DOMstrings.number8, '8');
            }
     
     
     DOMstrings.number9.onclick = function() {
                displayNumber(DOMstrings.number9, '9');
            }
     
     

     DOMstrings.number0.onclick = function() {
                displayNumber(DOMstrings.number0, '0');
            }
     
////////////////////////////////////////////////////////////////////////////////////////////////////     
     
     
    document.getElementById("decimal_button").onclick = function() 
    {
        DOMstrings.resultDisplay.textContent += '.';
        resultContent.push('.');
    }
    
    
        document.getElementById("plus_button").onclick = function() 
    {
        resultContent.push('+');
        DOMstrings.resultDisplay.textContent = '';
    }
    
    
        document.getElementById("subtract_button").onclick = function() 
    {
        resultContent.push('-');
            
        if (DOMstrings.resultDisplay.textContent = ' ') 
    {
            DOMstrings.resultDisplay.textContent = '-'; 
            console.log('-');        
    } else 
        
    {
        DOMstrings.resultDisplay.textContent = '';
    }
            
    } 
        
        document.getElementById("multiply_button").onclick = function() 
    {
        resultContent.push('*');
        DOMstrings.resultDisplay.textContent = '';
    } 
        
        document.getElementById("divide_button").onclick = function() 
    {
        resultContent.push('/');
        DOMstrings.resultDisplay.textContent = '';
    }  
        
        document.getElementById("percentage_button").onclick = function() 
        {
            resultContent.push('/100');
            DOMstrings.resultDisplay.textContent += '%';
        } 
        
////////////////////////////////////////////////////////////////////////////////////////////////////     
        
 
        
///////////////////////////////////////////////////////////////////////////////////////////////////       
        
        document.getElementById("equal_button").onclick = function() 
        {
            resulting();
        }

        DOMstrings.ACbutton.onclick = function() 
        {
            DOMstrings.resultDisplay.textContent = '';
            resultContent = [];
        };










































