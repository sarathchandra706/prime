function isPrime(num){
    if (num===2) {
      return true;
    }
    else if(num>1){
      for(var i=2;i<num;i++){
        if(num%i!==0 ) {
          return true;
        }
        else if(num===i*i){
          return false
        }
        else {
          return false;
        }
      }
    }
    else{
      return false;
    }
  }

var assert=require('assert') 
assert(isPrime(5),"Testcase1 passed");
assert(isPrime(12)===false,"Testcase2 passed");
assert(isPrime(0)===false,"Testcase3 passed");
assert(isPrime(20)===false,"Testcase4 passed");
console.log("All testcases passed");