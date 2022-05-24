/*
-take unlimited number of arguments
-goes through them
-print out the sum
-if argument is not a whole number skip it
- support negative numbers
- we need at least 2 arguments
-output an error message if argument is not a number
*/

/*

Three BFFs

> console.log
>google/slack overflow
>MDN

*/

const arguments = process.argv.slice(2);

if(arguments.length < 2) {
console.log("Please provide at least 2 arguments");
process.exit();
}

for(const arg of arguments){
  if(isNaN(arg)){
  console.log('Please provide valid input');
  process.exit();
}
}

const calculateTotalSum = (arrayToSum) =>{
  let total = 0;
  for(const item of arrayToSum) {
    const converted = Number(item);
    if(Number.isInteger(converted)) {
      total += converted;
    }
  }
   return total
}
const totalSum = calculateTotalSum(arguments);

console.log(totalSum);