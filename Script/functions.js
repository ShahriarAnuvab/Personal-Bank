//For login//
function getInputValue(inputId){
    const inputFormValue = document.getElementById(inputId);
    const inputValue = inputFormValue.value;
    inputFormValue.value = '';
    return inputValue;
}

//Dashboard//
function getInputformParse(inputId){
    const formValue = document.getElementById(inputId);
    const formValueString = formValue.value;
    const finalValue = parseFloat(formValueString);
    formValue.value = '';
    return finalValue;

   }

   function elementByID(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
   }
   
   function setElemetValue(elemetIdtext, newValue){
    console.log(elemetIdtext);
    const textElement = document.getElementById(elemetIdtext);
    textElement.innerText = newValue;
    
   }
