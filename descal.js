function displayFigure(firstParam){
    simpleCalculator.display.value = simpleCalculator.display.value + firstParam;
}

function clearScreen(){
    document.getElementById("displayscreen").value = "";
}

function deleteButton(){
    simpleCalculator.display.value = simpleCalculator.display.value.toString().slice(0, -1);
}