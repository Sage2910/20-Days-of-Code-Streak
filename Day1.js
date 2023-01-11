//program to check if a number is prime in javascript
function check_prime(n){
  if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  }
  else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(check_prime(37));
