/*
Print Table
*/
/*
Star Pattern type 1
output
****
****
****
****
*/

  function starPtn(){
        for(let i=0; i<4; i++){
             let star = ""
        for(let j=0; j<4; j++){
            star = star + "*"
        }
        console.log(star);
    } 
  }
 starPtn()

 /*
Star Pattern type 2
output
*******
******
*****
****
***
**
*
*/
 function printStar(){
        for(let i=0; i<7; i++){
                let star = ""
            for(let j=0; j<7-i; j++){  
                star = star + "*"
            }
         console.log(star);   
        }  
    }
    printStar()

 /*
Star Pattern type 3
output
*
**
***
****
*/
 function strPtn3(){
        for(let i = 0;  i <= 4; i++){
            let str = ""
            for(let j = 0; j < i; j++){
                str = str + "*"
            }
            console.log(str);
        }
    }
    strPtn3()

/*
11111
2222
333
44
5
*/
        function numPtn(){
        for(let i = 1;  i <=5; i++){
            let str = ""
            for(let j = 0; j <= 5-i; j++){
                str = str + i
            }
            console.log(str);
        }
    }
    numPtn()