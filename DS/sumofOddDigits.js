function getSumOfOddDigitNum(num){
       
        let sum =0;
        let unitDigit;
        while(num > 0){
            unitDigit= num % 10;
            if(unitDigit%2 != 0){
                sum+=unitDigit;
            }
            num= parseInt(num/10);
        }
        return sum;
    }
    console.log(getSumOfOddDigitNum(345));
    console.log(getSumOfOddDigitNum(1001));