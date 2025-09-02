
      /*

    Find First max & second max
         let arr = [200,50,300,70,7,300,100];
   
       let firstMax= Number.MIN_VALUE
    let secondMax= Number.MIN_VALUE
    for(let i =0; i<arr.length; i++){
       
        if(arr[i]  > firstMax){
            secondMax = firstMax
           firstMax = arr[i] 
           } else if (arr[i] > secondMax ){
               secondMax = arr[i]
           } 
        
    }
    console.log(`arry[ ${arr}] 
                                 max1 = ${firstMax} 
                                 max2 = ${secondMax}
                                 `);
        
    }
    */
   
   /*
    2000 issue occured 
    Find first max, second max, third max.

        let arr = [2000,50,300,70,7,500,100];
   
    let max1= Number.MIN_VALUE
    let max2= Number.MIN_VALUE
    let max3 = Number.MIN_VALUE;
    for(let i =0; i<arr.length; i++){
       
        if(arr[i]  > max1){
            max3= max2
            max2 = max1
            
           max1 = arr[i] 
           } else if (arr[i] > max2 ){
               max3= max2
               max2 = arr[i]
    
           } else if(arr[i] > max3){
               max3 = arr[i]
           } 
        
    }
    console.log(`arry[ ${arr}] 
                                 max1 = ${max1} 
                                 max2 = ${max2}
                                 max3 = ${max3}`);
        
    }
    */