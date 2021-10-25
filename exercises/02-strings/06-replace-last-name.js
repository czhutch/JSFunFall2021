let fullName = "Joe Fernandes"; // e.g.
let newLastName = "Washington"; // e.g.

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Fernandes";
 * let newLastName = "Washington";
 * The new value for "fullName" should result in "Joe Washington".
 */

// WRITE YOUR ANSWER BELOW THIS LINE
/*const index = fullName.indexOf(" ");
const lastName = fullName.substring(index +1);
const newName = lastName.replace("newLastName");*/

/*let newFullName = fullName.split(" ").replace(newLastName);*/
/*newFullName.map((newFullName=> {return newFullName[0].toUpperCase() + newFullName.substring(1);}).join(""));*/

/*for (let i =0; i < newFullName.length; 1++) {newFullName[i] = newFullName[i][0].toUpperCase() = newFullName[i].substr(1);
newFullName.join(" ");*/

/*let name = fullName.split(" ");
let firstName = name[0];
let lastName = fullName.replace(newLastName);*/

/*let name = fullName.split(" ");
let firstName = name[0];
let lastName = fullName.substring(name [0].replace(newLastName));*/

let lastName = fullName.substring(fullName.indexOf(" "), +1);
let newFullName = lastName.replace(newLastName);