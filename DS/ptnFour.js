    function printStar(){
       let n = 4
       let count = 1
        for(let i=0; i<n; i++){
             let str = ""
            for (let j =0; j<=i; j++ ){
                str = str +count + " "
                count++
            }
          console.log(str)  
        }
        
    }
    printStar()

    /*
    1 
    2 3 
    4 5 6 
    7 8 9 10 
    */

    function numCountPtn(){
        let count = 1
      for(let i = 1; i <=4; i++){
          let str = ""
          for(let j = 1; j<= i; j++){
              str = str + count
              count++
          }
          console.log(str)
      }
    }
    numCountPtn()