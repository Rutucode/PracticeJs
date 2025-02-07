//alert ('hello');

/* In programing
 whole numbers are called integers - 2,3,4 = integers
 decimal numbers - 2.2,  2.5 = floting point numbers (floats)
 It has problem with decimal numbers as it stores number in 0 & 1s
 inaccuracies only happen with some numbers

*/


console.log('$' + (2095 + 799)/100 )//order of opration and brakets
console.log(Math.round(2.82))
// logic - cal in cents and convert to dollar
console.log(((2799 + 2085) * 0.1 )/100)
console.log(Math.round(((2799 + 2085) * 0.1 )/100))

// Order of opration-
/*
() brakets first 
* & / second 
+ & - last
*/
/*I Js there are 3 ways to create string -
1st '' - single quotes
2nd "" - double quotes
3rd template strings using backticks - | interpolation
escape char = \ 
\n creats new line*/
console.log("new\ntext")
// e.g = 'I\'m learing javascript'
//------------------------------------
//Exercise 1
/* Soup = $10 
3 burgur $8 each
1 ice-crem  $5*/

let soup = 10;
let burgur = 8;
let iceCream = 5;

let totalAmount = soup + (3* burgur) + iceCream;
let totalBill = "$"  +  totalAmount
console.log(totalBill)
//------------------------------------
//Exercise 2
let totalPeople = 3
totalBill = "$" + (3* totalAmount)/3
console.log(totalBill);
//------------------------------------
//Exercise 3
let tosterAmount = 1850
let twoShirtAmount = 750
let TotalCost = "$" + (tosterAmount + twoShirtAmount)/100
console.log(TotalCost)
//------------------------------------
//Exercise 4
TotalCost = ((tosterAmount + twoShirtAmount)*0.1)/100;
console.log(TotalCost);
//------------------------------------
//Exercise 5
TotalCost = ((tosterAmount + twoShirtAmount)*0.2)/100;
console.log(TotalCost);
//------------------------------------
// AMAZON SETUP -------------------------------------------------------------------------
//Exercise 6
// 2f Cal total Item amount
let basketball = 2095
let toaster = 1899
let tShirt = 799

let toatlPrice =  (basketball + toaster + tShirt )/100
console.log(toatlPrice)

// ItemTotal = 47.93
//------------------------------------
//Exercise 6
//  2g total before tax  with shipping
let shipping = 499

toatalBeforetax = ( 4793 + shipping) / 100
console.log(toatalBeforetax);

//------------------------------------

// SOMETHING WRONG FROM HERE
//Exercise 6
// Tax amount 
//let taxAmount = Math.round(((basketball + toaster + tShirt + shipping )* 0.1)/100)
let taxAmount = Math.round(toatlPrice * 0.1)
console.log(taxAmount)


//------------------------------------
//Exercise 7 
// ordertotal 
let orderTotal =  toatalBeforetax + taxAmount
console.log(orderTotal)

// Answer = $58.21

//------------------------------------
//NEW EXERCISE
 let cTemp = 25 
 let ans = (25 * 9/5) +32
 console.log(ans)

 //---------------------
 let fTemp = 86 
 let tempInCel = (86-32)* 5/9
 console.log(tempInCel) //30

  //---------------------

 let minTemp = (-5 * 9/5) + 32;
console.log(minTemp);  // Output: 23
// STRINGS -------------------------------------------------------------------------------------------------
// Lession 2
console.log("hello")

// string + string = more string (combine )concatenation 
typeof 2 
// number
typeof "hello"
//string
"hello" + 3 //"hello3" type coersion

// string plus number to show items in amazon

let string = 'Items (' + (1+ 1)  + '): $' + (2095 + 799)/100 
console.log(string)

//This is a popup
//alert ('hello');

//------------------------------------
//Exercise 3a

'my name is ' //3a
 'Rutuja' //3b

 'my name is :' + 'Rutuja' //3c

 'Total cost : $' + (3+ 5) //3d
 //let coffeBagelPrice = 3+ 5
 
 //`Total cost: $ ${3+5}` //3e Something wring in here find later 

 let str = `Total cost : $8`;
 //alert(str) //3f

 console.log('Total Cost: $' + (599 + 295)/100) //3g

 console.log(`Total Cost: $ ${(599 + 295)/100} //Using template string`) //3h


/* let popupQue = `Total Cost: $ ${(599 + 295)/100}`;
 alert(popupQue) //3i

 let newpopupQue = `Total Cost: $ ${(599 + 295)/100} \n Thank you come again`;
 alert(newpopupQue) //3i
 */

 //Challange Exercise -------------------------------------------------------------------------
//First line 
 console.log(`Items (${2+2}): $ ${(2095 + 799) * 2/100}`)
//Second line 
  console.log(`Shipping & handling: $ ${(499 + 499) / 100}`)
//Third line 
    console.log(`Total before tax: $ ${((2095 + 799) * 2/100) + (499 + 499) / 100}`)
//Forth line 
console.log(`Estimated tax: $ ${Math.round((((2095 + 799) * 2) + (499 + 499) )*0.1)/100}`)
