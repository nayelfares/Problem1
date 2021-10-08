function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

function sum(array){
  return array.reduce((accum,current)=>{return accum+current});
}

function getNumber(length){
    number =''
    for(let i = 0;i<length ;i++)
       number+='1';
    return Number(number);
}
function R(length){
  return (sum(primeFactors(getNumber(length))));
}

console.log(R(10));
