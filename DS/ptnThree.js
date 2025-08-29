   function printStar(){
       
        for(let i=1; i <=5; i++){
             let str = ""
            for (let j = 0; j<=5-i; j++ ){
                str = str + i
            }
          console.log(str)  
        }
        
    }
    printStar()

    // other way
        function printStar(){
       let n = 5
        for(let i=0; i<n; i++){
             let str = ""
            for (let j =0; j<n-i; j++ ){
                str = str + (i + 1)
            }
          console.log(str)  
        }
        
    }
    printStar()

    /*
    11111
    2222
    333
    44
    5
 */