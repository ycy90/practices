/* Exercise 1: mask a reviewer’s full name
Create a function called maskReviewerName that receives a full name containing one first name and one last name.
Rules:

- Keep only the first letter of the first name visible.
- Keep only the first letter of the last name visible.
- Replace every other letter with *.
- Keep the space between the names.


Example:
maskReviewerName("Ada Lovelace");
Expected result:
A** L******* */


let revFirstName = "John";
let revLastName =  "Doe";
let revFullName = revFirstName + " " + revLastName;

console.log(revFullName);

function maskRevName(revFullName) {

  const firstName = revFirstName.slice(0, 1);
  const firstNameAst = "*".repeat(revFirstName.length - 1);
  const lastName = revLastName.slice(0, 1);
  const lastNameAst = "*".repeat(revLastName.length - 1);
  return firstName + firstNameAst + " " + lastName + lastNameAst;
}

console.log(maskRevName(revFullName));

revFirstName = "Yigitcan";
revLastName = "Yesilyurt";

console.log(maskRevName(revFullName));

/*
==================================================
Exercise 2 — Age Category
==================================================

Create a function that takes a person's age.

Requirements:
- If the age is between 0 and 12, return "Child".
- If the age is between 13 and 17, return "Teenager".
- If the age is between 18 and 64, return "Adult".
- If the age is 65 or older, return "Senior".
- If the age is below 0, return "Invalid age".

Example:
ageCategory(25) → "Adult"
ageCategory(10) → "Child"
*/

function evalAge(value) {

  if (value >= 0 && value <=12) {
    return "You are a child";
  } else if (value >= 13 && value <= 17) {
    return "You are a teenager";
  } else if (value >=18 && value <= 64) {
    return "You are an adult";
  } else if (value >= 65 && value <=120) {
    return "You are a senior"
  } else if (value <0 || value >120) {
    return "Invalid Age";
  }
} 

console.log(evalAge(121));




/*
==================================================
Exercise 3 — Cinema Ticket
==================================================

Create a function that takes:
- age
- isStudent (boolean)

Ticket prices:
- Under 6 → Free
- 6–17 → €7
- 18–64 → €12
- 65+ → €8

Student discount:
- Students get €2 off.
- A free ticket should remain free.

Requirements:
- Determine the correct ticket price based on age.
- Apply the student discount when appropriate.
- Return the final ticket price.

Example:
cinemaTicket(25, true) → 10
cinemaTicket(25, false) → 12
cinemaTicket(5, true) → 0
*/


function price(value, isStudent){

if (value >= 1 && value < 6 ) {
  return "It's free!";
} else if (value >=6 && value <= 17) {
  return "That'll be 7 Dollars";
} else if (value >=18 && value <= 64 && isStudent) {
  return "Oh you're a student. Here is your discounted ticket. That'll be 10 dollars.";
} else if (value >=18 && value <= 64 && !isStudent) {
  return "That'll be 12 Dollars.";
} else if (value >=65 && value <= 120) {
  return "That'll be 8 Dollars."
} else {
  return "Choose your age correctly";
}}

console.log(price(26, true));



/*
==================================================
Exercise 4 — Password Checker
==================================================

Create a function that takes a password as a string.

Rquirements 
Check two values to be matched in order to login

*/


function passCheck (pass1, pass2) {
  if (pass1 === pass2) {
    return "Your password is correct";
  } else {
    return "Your Password is incorrect";
  }
}

console.log(passCheck( "superhArdPasSwoRd1235", "superhArdPasSword1235"));





/*
==================================================
Exercise 5 — ATM Simulator
==================================================

Create a function that takes:
- current balance
- withdrawal amount

Requirements:
- If the withdrawal amount is greater than the balance,
  return "Insufficient funds".
- If the withdrawal amount is 0 or negative,
  return "Invalid amount".
- Otherwise, subtract the withdrawal amount from the balance
  and return the remaining balance.

Examples:
withdraw(1000, 200) → 800
withdraw(1000, 1200) → "Insufficient funds"
withdraw(1000, 0) → "Invalid amount"
*/


function withdraw(balance, amount) {

  if (balance < amount) {
    return "Insufficient funds";
  } else if (amount <= 0) {
    return "Invalid amount";
  } else {
    return balance - amount;
  }
}

console.log(withdraw(1000, 180));



/*
==================================================
Exercise 6 — Shopping Cart
==================================================

Create a function that takes:
- price
- quantity

Calculate the subtotal.

Then apply these rules:
- If subtotal is €100 or more → 10% discount.
- If subtotal is below €100 → no discount.

Return the final price after the discount.

Examples:
shoppingCart(25, 2) → 50
shoppingCart(50, 2) → 90
shoppingCart(120, 1) → 108
*/


function shoppingCart(price, quantity) {
  
  const product = price * quantity;
  const dscPrice = product - (product * 0.10)
  const actualPrice = Math.floor(dscPrice);
  const actualPriceNonDsc = Math.floor(product);
  const points = (dscPrice - actualPrice).toFixed(2);
  const pointsNonDsc = (product - actualPriceNonDsc).toFixed(2);
  
  

  if (product >= 100) { 
    return `You pay ${actualPrice} and ${points} cents rounded down` ;
  } else {
    return "You pay " + actualPriceNonDsc + " and " + pointsNonDsc + " cents rounded down" ;
  }
}

console.log(shoppingCart(23.3, 2));


/*
==================================================
Exercise 7 — Login System
==================================================

Create a function that takes:
- username
- password

Correct credentials:
username → "admin"
password → "12345"

Requirements:
- If both username and password are correct,
  return "Login successful".
- If the username is incorrect,
  return "Incorrect username".
- If the username is correct but the password is incorrect,
  return "Incorrect password".

Examples:
login("admin", "12345") → "Login successful"
login("john", "12345") → "Incorrect username"
login("admin", "wrong") → "Incorrect password"
*/




 let userInfo = "admin";
 let userPass = 12345; 

 function loginCheck(username, password) {
  
  

  if (username === userInfo && password === userPass) {
    return "Login Succesful";
  } else if (username === userInfo && password !== userPass) {
    return "Incorrect password";
  } else if (username !== userInfo && password === userPass) {
    return "Incorrect username";
  } else {
    return "Both username and password incorrect";
  }
} 

userInfo = "yigit";
userPass = 123456

console.log(loginCheck("yigit", 123456));

/*
==================================================
Exercise 8 — Discount Calculator
==================================================

Create a function that takes:
- price
- isMember (boolean)

Requirements:
- Members receive a 20% discount.
- Non-members receive no discount.
- Return the final price.

Examples:
discountCalculator(100, true) → 80
discountCalculator(100, false) → 100
discountCalculator(250, true) → 200

Bonus:
If the price is €200 or more, give everyone a 10% discount.
Members should receive the 10% discount plus their additional
20% member discount.

Think carefully about the order in which you apply the discounts.
*/


/*
==================================================
Exercise 9 USERNAME CLEANER
==================================================

Create a function called:

cleanUsername(username)

Requirements:

- Remove spaces from the beginning and end.
- Convert the username to lowercase.
- If the cleaned username is shorter than 3 characters,
  return "Username too short".
- Otherwise, return the cleaned username.

Examples:

cleanUsername("  YigitCan  ") → "yigitcan"
cleanUsername("  AB ") → "Username too short"
cleanUsername("  Developer ") → "developer"

Useful methods/concepts:

trim()
toLowerCase()
length
if / else
*/


/*
==================================================
Exercise 10 PASSWORD STRENGTH CHECKER
==================================================

Create a function called:

checkPassword(password)

Requirements:

- Remove spaces from the beginning and end.
- If the password is shorter than 8 characters,
  return "Too short".
- If the password is 8–11 characters,
  return "Medium password".
- If the password is 12 characters or longer,
  return "Strong password".

Examples:

checkPassword("abc") → "Too short"
checkPassword("password1") → "Medium password"
checkPassword("superStrong123") → "Strong password"
checkPassword("   password1   ") → "Medium password"

Useful methods/concepts:

trim()
length
if / else if / else
*/


/*
==================================================
Exercise 11 REPEAT THE MESSAGE
==================================================

Create a function called:

repeatMessage(message, times)

Requirements:

- Repeat the message the specified number of times.
- Put a space between each repetition.
- If times is 0 or negative,
  return "Invalid number".

Examples:

repeatMessage("Hello", 3) → "Hello Hello Hello"
repeatMessage("JS", 2) → "JS JS"
repeatMessage("Hello", 0) → "Invalid number"

Useful method/concepts:

repeat()
if / else
strings
numbers

Hint:

Think carefully about how repeat() behaves when
you give it a string containing a space.
*/


/*
==================================================
Exercise 12 PRODUCT CODE
==================================================

Create a function called:

getProductCode(code)

A product code looks like:

"PROD-9283-XL"

Requirements:

- Remove spaces from the beginning and end.
- Extract the first 4 characters.
- Convert those characters to lowercase.
- If the cleaned code contains fewer than 4 characters,
  return "Invalid code".

Examples:

getProductCode(" PROD-9283-XL ") → "prod"
getProductCode(" ABCD-1234 ") → "abcd"
getProductCode(" AB ") → "Invalid code"

Useful methods/concepts:

trim()
slice()
toLowerCase()
length
if / else
*/


/*
==================================================
Exercise 13 HIDE EMAIL
==================================================

Create a function called:

hideEmail(email)

The function receives an email address.

Requirements:

- Find the position of "@"
- Keep everything before "@"
- Replace everything after "@" with "***"
- Return the modified email.

Examples:

hideEmail("john@gmail.com") → "john@***"
hideEmail("test@yahoo.com") → "test@***"
hideEmail("developer@example.com") → "developer@***"

Useful methods/concepts:

indexOf()
slice()
strings
if / else

Hint:

You will need to figure out the position of "@"
before deciding where slice() should start/end.

Do NOT use split() for this exercise.
*/



/*
==================================================
Exercise 7 — Username Validation System
==================================================

Create a function called:

validateUsername(username)

Requirements:

- Remove spaces from the beginning and end.
- Convert the username to lowercase.

- If the username is shorter than 3 characters,
  return "Username too short".

- If the username is longer than 15 characters,
  return "Username too long".

- If the username contains "admin",
  return "Reserved username".

- If the username starts with "user",
  return "Username cannot start with user".

- If the username ends with "123",
  return "Username cannot end with 123".

- If the username contains a space anywhere inside,
  return "Username cannot contain spaces".

- If all conditions are satisfied:
  - Take the first 3 characters.
  - Take the last 2 characters.
  - Return them in this format:

"Username: joh...an" */