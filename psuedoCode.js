/*Writing in psuedo code to understand the problems.
loop from 100 to 200:
  let num = the current step in the loop
  If num % 3 is equal to 0 and num % 4 is equal to 0;
  Print "LoopyLighthouse"
  Else if num % 4 is equal to 0:
    Print "Lighthouse"
  Else if num % 3 is equal to 0:
  Print "Loopy"
Otherwise
  Print num
  End if
End loop

this allows to understand logically what we need to do the rest is formatting the code with proper syntax. this rough work is considered "psuedo-code" */

for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}


