//program to check if a number is prime in javascript
function check_prime(n){
  if (n===1){
    return "It is not Prime";
  }
  else if(n === 2){
    return "It is Prime";
  }
  else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return "It is not Prime";
      }
    }
    return "It is Prime";  
  }
}

console.log(check_prime(37));
