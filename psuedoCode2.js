for (let num = 100; num <= 200; num++) {
  //(const num of num) 
  let output = "";
  if(num % 3 === 0 ) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}