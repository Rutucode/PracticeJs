let output =   document.querySelector('.display-input')
let calculation = localStorage.getItem('calculation') || '';


function updateCalculation(value) {   
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  displayCaluclation()
  
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayCaluclation(){
  let output =   document.querySelector('.display-input')
  output.innerHTML = ` ${calculation}`;
}