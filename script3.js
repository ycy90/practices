/*
============================================================
JAVASCRIPT MIXED TECHNIQUES — 20 CODING EXERCISES
============================================================

Write the code for every exercise yourself.

The exercises intentionally combine multiple JavaScript
concepts instead of practicing one method at a time.

Topics may include:
- arrays and array methods
- objects
- strings
- Math methods
- functions
- conditions
- loops
- spread / rest
- destructuring
- validation
- template literals

Do not assume that every requirement needs every technique.
Choose the structures and methods that best fit the problem.
============================================================
*/


/*
============================================================
EXERCISE 1 — RANDOM TRAVEL DESTINATION
============================================================

Create an array called cities containing:

"Berlin", "Hamburg", "Munich"

Then:

1. Add "Cologne" to the end of the array.
2. Add "Frankfurt" to the beginning of the array.
3. Check whether "Munich" exists in the array.
4. If it exists, randomly select one city from the entire array.
5. Store the selected city in a variable called nextDestination.
6. Log:

"Next destination: [city]"

Use Math.random() and Math.floor() for the random selection.
*/

// Write your solution below:




/*
============================================================
EXERCISE 2 — MOVIE WATCHLIST
============================================================

Create an array called watchlist containing five movie titles.

Then:

1. Add one new movie to the end.
2. Remove the first movie because it has already been watched.
3. Check whether "Interstellar" is still in the watchlist.
4. If it exists, log its index.
5. Create a new array containing only the first three movies
   without changing the original watchlist.
6. Convert those three movie names into a single string separated
   by " | ".
7. Log the final string.
*/

// Write your solution below:




/*
============================================================
EXERCISE 3 — SHOPPING CART TOTAL
============================================================

Create an array called cart containing at least four objects.

Each product must contain:

- name
- price
- quantity
- inStock

Create a function called calculateCartTotal that receives the
cart array.

The function must:

1. Loop through every product.
2. Ignore products that are not in stock.
3. For products that are in stock, multiply price by quantity.
4. Add the result to a running total.
5. Return the total.

After calling the function:

- If the total is 100 or more, log:
  "Free shipping — Total: €[total]"

- Otherwise, log:
  "Shipping fee applies — Total: €[total]"
*/

// Write your solution below:




/*
============================================================
EXERCISE 4 — USER PROFILE VALIDATOR
============================================================

Create an object called user with:

- username
- email
- age
- isActive

Create a function called validateUser that receives the object.

Validation rules:

- username must be a non-empty string after trim().
- email must be a string and must include "@".
- age must be a positive integer.
- isActive must be a boolean.

Create an empty errors array.

For every invalid field, add the field name to the errors array.

At the end:

- If errors is empty, return "User is valid".
- Otherwise, return a string in this format:

"Invalid fields: username, age"

Use join() to create the field list.
*/

// Write your solution below:




/*
============================================================
EXERCISE 5 — TEAM MEMBER DIRECTORY
============================================================

Create an object called team:

{
  anna: "Frontend",
  john: "Backend",
  maria: "Design"
}

Then:

1. Add a new property called david with the value "QA".
2. Loop through every property in the object.
3. Log each member in this format:

"anna works in Frontend"

4. Create an array containing all member names.
5. Create another array containing all department names.
6. Log both arrays.
7. Log the total number of team members.

Use appropriate Object methods where useful.
*/

// Write your solution below:




/*
============================================================
EXERCISE 6 — PASSWORD ANALYZER
============================================================

Create a function called analyzePassword that receives a password.

The password is considered strong only if:

- it is a string,
- it has at least 8 characters after trim(),
- it contains at least one number from 0 to 9.

Do not use regular expressions.

Use a loop to check the characters one by one.

Return:

"Strong password"

or:

"Weak password"

Test the function with at least three different passwords.
*/

// Write your solution below:




/*
============================================================
EXERCISE 7 — RESTAURANT ORDER
============================================================

Create an array called menu containing objects with:

- name
- price
- available

Create another array called orderedItems containing the names
of three menu items.

Create a function called createOrder that receives menu and
orderedItems.

For every requested item:

1. Search the menu for a matching item.
2. If the item exists and is available, add its price to total.
3. If the item does not exist or is unavailable, add its name
   to an unavailableItems array.

Return an object containing:

{
  total: ...,
  unavailableItems: ...
}

After calling the function, log the total and unavailable items.
*/

// Write your solution below:




/*
============================================================
EXERCISE 8 — STUDENT SCORE REPORT
============================================================

Create an array called scores containing at least eight numbers.

Create a function called createScoreReport that receives scores.

The function must:

1. Find the highest score using a loop.
2. Find the lowest score using a loop.
3. Calculate the total of all scores.
4. Calculate the average.
5. Count how many scores are 60 or higher.
6. Return an object containing:

{
  highest,
  lowest,
  average,
  passed
}

Use destructuring to read the returned values and log them.
*/

// Write your solution below:




/*
============================================================
EXERCISE 9 — INVENTORY UPDATE
============================================================

Create an array called inventory containing objects with:

- id
- name
- stock

Create a function called updateStock that receives:

- inventory
- productId
- amount

The function must:

1. Find the product with the matching id using a loop.
2. If no matching product exists, return "Product not found".
3. If amount is not an integer, return "Invalid amount".
4. Otherwise, add amount to the product's stock.
5. Stock must never become lower than 0.
6. If the update would make stock negative, return
   "Insufficient stock".
7. Otherwise return:

"[product name] stock: [new stock]"
*/

// Write your solution below:




/*
============================================================
EXERCISE 10 — RANDOM TEAM GENERATOR
============================================================

Create an array containing at least eight player names.

Create a function called pickRandomPlayer that receives an array
and returns one random player.

Then:

1. Create two empty arrays called teamA and teamB.
2. Continue assigning players until the original players array
   becomes empty.
3. Randomly select a player.
4. Remove the selected player from the original array so the same
   player cannot be selected twice.
5. Alternate between adding selected players to teamA and teamB.
6. Log both teams when finished.

Think carefully about which loop is appropriate when you do not
know the exact number of remaining iterations from a fixed index.
*/

// Write your solution below:




/*
============================================================
EXERCISE 11 — BOOK LIBRARY
============================================================

Create an array called books containing at least five objects.

Each book must contain:

- title
- author
- year
- isRead

Create a function called getLibraryReport that receives books.

The function must:

1. Loop through every book.
2. Store the titles of read books in one array.
3. Store the titles of unread books in another array.
4. Find the oldest book.
5. Return an object containing:

{
  readBooks,
  unreadBooks,
  oldestBook
}

After calling the function, log:

"Read: [titles]"
"Unread: [titles]"
"Oldest: [title]"
*/

// Write your solution below:




/*
============================================================
EXERCISE 12 — SUPPORT TICKET PROCESSOR
============================================================

Create an array of support ticket objects.

Each ticket contains:

- id
- title
- priority
- status

priority can be:

"low", "normal", "high"

status can be:

"open", "in-progress", "closed"

Loop through every ticket.

Ignore closed tickets.

For every remaining ticket:

- If priority is "high", log:
  "URGENT #[id]: [title]"

- If priority is "normal", log:
  "NORMAL #[id]: [title]"

- If priority is "low", log:
  "LOW #[id]: [title]"

Also count how many non-closed tickets were processed.

Log the count after the loop.
*/

// Write your solution below:




/*
============================================================
EXERCISE 13 — CONTACT SEARCH
============================================================

Create an array of contact objects.

Each contact contains:

- firstName
- lastName
- phone
- city

Create a function called searchContacts that receives:

- contacts
- searchTerm

Requirements:

1. Remove unnecessary spaces from searchTerm using trim().
2. Convert searchTerm to lowercase.
3. Loop through all contacts.
4. A contact matches if searchTerm exists in either:
   - firstName
   - lastName
   - city
5. Make the comparison case-insensitive.
6. Add every matching contact to a results array.
7. Return the results array.

After calling the function, loop through the returned contacts
and log:

"[firstName] [lastName] — [city]"
*/

// Write your solution below:




/*
============================================================
EXERCISE 14 — BANK TRANSACTION SUMMARY
============================================================

Create an array called transactions.

Each transaction is an object containing:

- type
- amount

type can be:

"deposit"
"withdrawal"

Create a function called processTransactions that receives:

- startingBalance
- transactions

Requirements:

1. Validate startingBalance. It must be a number and cannot be NaN.
2. Loop through all transactions.
3. Ignore transactions whose amount is not a positive number.
4. For a deposit, add the amount to the balance.
5. For a withdrawal:
   - subtract the amount only if enough balance exists,
   - otherwise add the transaction to a rejected array.
6. Return:

{
  balance,
  rejected
}

Log the final balance and number of rejected transactions.
*/

// Write your solution below:




/*
============================================================
EXERCISE 15 — EVENT GUEST LIST
============================================================

Create two arrays:

confirmedGuests
waitingList

Add several names to both arrays.

Then:

1. A guest cancels. Remove that guest from confirmedGuests by name.
2. Take the first person from waitingList and move them to
   confirmedGuests.
3. Add two new people to the waitingList.
4. Create a new array called allGuests containing both lists
   without modifying either original array.
5. Check whether a specific guest exists in allGuests.
6. Log:

"Confirmed: [names]"
"Waiting: [names]"
"Total guests: [number]"

Use array methods and spread syntax where appropriate.
*/

// Write your solution below:




/*
============================================================
EXERCISE 16 — PRODUCT CODE GENERATOR
============================================================

Create a function called createProductCode that receives:

- category
- productName
- id

Requirements:

1. Validate that category and productName are non-empty strings.
2. Validate that id is a positive integer.
3. Remove spaces around category and productName.
4. Convert category to uppercase.
5. Convert productName to lowercase.
6. Take the first three characters of category.
7. Take the first three characters of productName.
8. Return a code in this format:

"ELE-key-42"

Example:

createProductCode("Electronics", "Keyboard", 42)

should return:

"ELE-key-42"
*/

// Write your solution below:




/*
============================================================
EXERCISE 17 — DELIVERY ROUTE MANAGER
============================================================

Create an array called route containing:

"Berlin", "Leipzig", "Dresden", "Prague", "Vienna"

Then:

1. Create a copy of the route without changing the original.
2. Remove "Prague" from the copied route by finding its index.
3. Insert "Brno" at the same position.
4. Add "Budapest" to the end.
5. Reverse the copied route.
6. Log the original route.
7. Log the modified route.
8. Convert the modified route into a string using:

" -> "

Example:

"Budapest -> Vienna -> Brno -> Dresden -> Leipzig -> Berlin"
*/

// Write your solution below:




/*
============================================================
EXERCISE 18 — DYNAMIC SETTINGS VALIDATOR
============================================================

Create an object called settings containing:

- theme
- notifications
- language
- fontSize

Create another object called expectedTypes:

{
  theme: "string",
  notifications: "boolean",
  language: "string",
  fontSize: "number"
}

Create a function called validateSettings that receives both
objects.

Requirements:

1. Loop through every property in expectedTypes.
2. Check whether the property exists in settings.
3. If it does not exist, add:
   "[property]: Missing"
   to an errors array.
4. If it exists but typeof the value does not match the expected
   type, add:
   "[property]: Invalid"
5. Return the errors array.
6. If the returned array is empty, log "Settings are valid".
7. Otherwise, log every error separately.
*/

// Write your solution below:




/*
============================================================
EXERCISE 19 — DICE GAME
============================================================

Create a function called rollDice that returns a random integer
from 1 to 6.

Create another function called playGame.

Requirements:

1. Start the player score at 0.
2. Roll the dice repeatedly.
3. If the player rolls:
   - 1: reset the score to 0 and end the game.
   - 6: add 10 points.
   - any other number: add the rolled number to the score.
4. Continue playing while the score is below 20.
5. Log every roll and the current score.
6. When the game ends, return the final score.

Use a loop, random number generation, conditions, and functions.
*/

// Write your solution below:




/*
============================================================
EXERCISE 20 — MINI ORDER MANAGEMENT SYSTEM
============================================================

Create an array called orders.

Each order must be an object containing:

- id
- customer
- items
- status

items must be an array of objects containing:

- name
- price
- quantity

status can be:

"new"
"processing"
"shipped"
"cancelled"

Create a function called processOrders that receives the orders
array.

For every order:

1. Ignore cancelled orders.
2. Calculate the total price of all items in the order.
3. Validate each item's price and quantity:
   - price must be a positive number,
   - quantity must be a positive integer.
4. If an item is invalid, do not include it in the total.
5. Count how many valid items were processed.
6. Determine a message based on order status:

   "new"        -> "Waiting for processing"
   "processing" -> "Order is being prepared"
   "shipped"    -> "Order has been shipped"

7. Create a summary object for each non-cancelled order:

{
  id,
  customer,
  total,
  validItemCount,
  message
}

8. Add every summary object to a summaries array.
9. Return the summaries array.

After calling processOrders:

- Loop through the returned summaries.
- Log each order in this format:

"Order #[id] — [customer] — €[total] — [message]"

This exercise intentionally combines:
- arrays of objects,
- nested arrays,
- functions,
- nested loops,
- validation,
- if conditions,
- switch,
- Number methods,
- template literals,
- object creation,
- return values.
*/

// Write your solution below:

