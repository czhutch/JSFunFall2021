/**
 * Create a function called "isEvenOrOdd".
 * If given an even number, it should return "even".
 * If given an odd number, it should return "odd".
 * @example isEvenOrOdd(10); // even
 * @example isEvenOrOdd(3); // odd
 * You should use arrow syntax.
 */
     
// WRITE YOUR ANSWER BELOW THIS LINE


/*let isEvenOrOdd = (num) => {
    num = ((num % 2 === 0) || (num % 3 === 1));
    return "even" || "odd";
} Did Not Work*/   

/*let isEvenOrOdd = (num) => {
    num = (num % 2 === 0);
    return "even";
} Did Not Work */

/*let isEvenOrOdd = (num) => { 
    if (num % 4 === 0) {
      return "even";
    } else {
      (num % 3 === 0) 
      return "odd";
    } 
 }
 isEvenOrOdd(10);
 isEvenOrOdd(3);*/
 
let isEvenOrOdd = (num) => {
  return (num % 2 === 0) ? "even" : "odd";
 } 