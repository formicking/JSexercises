/** DESCRIPTION */
/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

/** Loop solution */

function factorialize(num) {
  var factorial = 1;
  while (num > 1) {
    factorial *= (num--);
  }
  return factorial;
}

/** Recursion solution */
function factorialize(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorialize(--num);
  // also we can use num-1, but not num--
}

/** Test calls */
factorialize(5); // should return 120.
factorialize(10); // should return 3628800.
factorialize(20); // should return 2432902008176640000.
factorialize(0); // should return 1.
