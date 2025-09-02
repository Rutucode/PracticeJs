// Leet code problem number 344 
/*
var reverseString = function(s) {
        let n = s.length
        let newArray = []
         // console.log(n);
        
      for (let i=n-1; i>= 0; i--){
            // console.log(s[i]);
          newArray.push(s[i])
      }
        return newArray       
};
    let reverseStr = reverseString("Hello")
    console.log(reverseStr)

*/
    /*
    Solution 2 
    But converts array to string as well 

     var reverseString = function(s) {
        let start = 0
        let end = s.length-1;
        let arr = s.split('');
       while(start < end){
           let temp = arr[end];
           arr[end]= arr[start];
           arr[start] = temp;
           start++;
           end--;
       }
        s = arr.join('')
        return s
           
};
    let reverseStr = reverseString("Hello")
    console.log(reverseStr)
    */

    

    
    // Final solution  Accepted 
             let start = 0
        let end = s.length-1;
       while(start < end){
           let temp = s[end];
           s[end]= s[start];
           s[start] = temp;
           start++;
           end--;
       }
    
        return s
    