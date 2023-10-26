"use strict";


window.onload = init;

function init() { 
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;

    //let subtractUserBtn = document.getElementById("subtractBtn");
    //subtractBtn.onclick = subtractBtnClicked;

   // let multiplyUserBtn = document.getElementById("multiplyBtn");
    //multiplyBtn.onclick = multiplyBtnClicked;

    //let divideBtn = document.getElementById("divideBtn");
   // divideBtn.onclick = divideBtnClicked;

}

    function addBtnClicked () {
      
     const number1Field = document.getElementById("number1Field");
     const number2Field = document.getElementById("number2Field");

    let number1FieldValue = Number( number1Field.value);
    let number2FieldValue = Number( number2Field.value);

    let answer = number1FieldValue+ number2FieldValue;

    document.getElementById('answerField').value = answer;

}


