   let arr = [2, 3, 4, 5, 6, 7, 8,  9, 10];
    let str = ""
    for (let i = 1; i < 10; i++ ){
        str= ""
        for(let j= 0; j <9; j++){
            if (arr[j]*i <= 9){
                str= str + "|  "
            }else(str = str + "| ") 
         str = str + (arr[j]*i)   
        }
        console.log(str + "|");
    }

    // OUTPUT
    /*
    |  2|  3|  4|  5|  6|  7|  8|  9| 10|
    |  4|  6|  8| 10| 12| 14| 16| 18| 20|
    |  6|  9| 12| 15| 18| 21| 24| 27| 30|
    |  8| 12| 16| 20| 24| 28| 32| 36| 40|
    | 10| 15| 20| 25| 30| 35| 40| 45| 50|
    | 12| 18| 24| 30| 36| 42| 48| 54| 60|
    | 14| 21| 28| 35| 42| 49| 56| 63| 70|
    | 16| 24| 32| 40| 48| 56| 64| 72| 80|
    | 18| 27| 36| 45| 54| 63| 72| 81| 90|
    */

    /**
     * sum of array
let arr = [20,20,3,5,7,8,10];
    let sum =0;
    for(let i =0; i<arr.length; i++){
         sum+=arr[i]
        
    }
    console.log("sum of "+arr+"="+sum)
     */

    /*
    //max of array
    let arr = [200,50,3,450,7,89,1000];
    let max=arr[0];
    for(let i =1; i<arr.length; i++){
         if(max<arr[i]){
             max =arr[i];
         }
        
    }
    console.log("max of "+arr+"="+max)
    */
   /*
   min & max of array
    let arr = [200,50,3,450,7,89,1000];
    let min=arr[0];
    let max= arr[0]
    for(let i =1; i<arr.length; i++){
         if(min>arr[i] ){
             min =arr[i];
         }
        if(max < arr[i]){
           max = arr[i]
           }
    }
    console.log("min & max of arry["+arr+"] = min is "+ min +" & max is "+ max);
   */

 
