let age = 14; // e.g.

/**
 * Create a variable called "isTeenager". (Do not use var.)
 * If "age" is greater than 12, but less than 20, "isTeenager" should be true.
 * Otherwise, "isTeenager" should be false.
 * You must use either the logical and (&&) or the logical or (||) to solve this problem.
 * Your answer should still work when "age" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
/*let isTeenager = true
if (age > 12 && age < 20) {
    console.log("true");
} else {
    console.log("false");
}*/

/*let isTeenager = true
if (age > 12 && age < 20) {
    console.log("true");
} else if (age < 13 && age > 19) {
    console.log("false");
}*/

/*let isTeenager = true
if (age > 12 && age < 20) {
    console.log("true");
} else {
    console.log("false");
} */
let isTeenager = false;
if (age > 12 && age < 20) {
    isTeenager = true;
}
    console.log(isTeenager);
