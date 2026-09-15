content = r'''/*
============================================================
JAVASCRIPT CONTROL FLOW & LOOPS — PRACTICE SET
============================================================

PART 1 — EXERCISES 1–10
Read each requirement and write the JavaScript yourself.

PART 2 — EXERCISES 11–20
Read the JavaScript code and write, in your own words, what
the original requirement could have been.

The exercises are intentionally kept in one JavaScript file.
============================================================
*/


/*
============================================================
EXERCISE 1 — LOGIN CHECK
============================================================

Create a function called checkLogin that receives a boolean
parameter called isLoggedIn.

Requirements:
- If isLoggedIn is true, return "Welcome back".
- Otherwise, return "Please log in".
*/

// Write your solution below:




/*
============================================================
EXERCISE 2 — SHIPPING COST
============================================================

Create a function called calculateShipping that receives a
package weight.

Requirements:
- If the weight is 5 kg or less, return 5.
- If the weight is more than 5 kg but 20 kg or less, return 10.
- If the weight is more than 20 kg but 50 kg or less, return 20.
- Otherwise, return 40.
*/

// Write your solution below:




/*
============================================================
EXERCISE 3 — USER ROLE
============================================================

Create a function called getDashboard that receives a user role.

The possible roles are:
- "admin"
- "editor"
- "user"

Requirements:
- "admin" should return "Admin Dashboard".
- "editor" should return "Editor Dashboard".
- "user" should return "User Dashboard".
- Any other value should return "Unknown Role".

Choose the control structure that best fits the requirement.
*/

// Write your solution below:




/*
============================================================
EXERCISE 4 — PRODUCT LIST
============================================================

Create an array called products containing at least five
product names.

Loop through every product and log each product name to the
console.

You do not need to use the array index.
*/

// Write your solution below:




/*
============================================================
EXERCISE 5 — NUMBERED RANKING
============================================================

Create an array containing five player names.

Loop through the array and print each player's ranking and name.

Expected output should look like:

1. Anna
2. John
3. Michael

You need access to the position of each element in the array.
*/

// Write your solution below:




/*
============================================================
EXERCISE 6 — EMPTY FORM FIELDS
============================================================

Create an object called formData with the following properties:

- name
- email
- phone

Loop through every property in the object.

If a property's value is an empty string, log:

[property name] is required

Example:

email is required
*/

// Write your solution below:




/*
============================================================
EXERCISE 7 — SHOPPING CART
============================================================

Create an array called cart.

Each element should be an object containing:

- name
- price
- inStock

Loop through every product in the cart.

If the product is in stock, add its price to a variable called
total.

After the loop finishes, log the total price.
*/

// Write your solution below:




/*
============================================================
EXERCISE 8 — TASK MANAGER
============================================================

Create an array of task objects.

Each task should contain:

- title
- status

The possible status values are:

- "completed"
- "pending"
- "overdue"

Loop through every task.

For each task:

- If its status is "completed", log:
  "Completed: [title]"

- If its status is "pending", log:
  "Pending: [title]"

- If its status is "overdue", log:
  "Overdue: [title]"

Choose the control structures that best fit the requirement.
*/

// Write your solution below:




/*
============================================================
EXERCISE 9 — PROCESS QUEUE
============================================================

Create an array called queue containing five job names.

As long as the queue contains at least one job:

1. Remove the first job from the queue.
2. Log the removed job.

Stop when the queue becomes empty.
*/

// Write your solution below:




/*
============================================================
EXERCISE 10 — PRIORITY TASK PROCESSOR
============================================================

Create an array of task objects.

Each task should contain:

- title
- priority
- status

priority can be:
- "normal"
- "high"

status can be:
- "pending"
- "completed"
- "overdue"

Loop through every task.

Only process tasks whose priority is "high".

For high-priority tasks:

- If the status is "pending", log:
  "Send reminder: [title]"

- If the status is "overdue", log:
  "Send urgent reminder: [title]"

- If the status is "completed", log:
  "No action required: [title]"

Choose the control structures that best fit each part of the
requirement.
*/

// Write your solution below:




/*
============================================================
PART 2 — READ THE CODE
============================================================

For Exercises 11–20:

Do NOT rewrite the code.

Read the code and write what you think the original assignment
requirement was.

Try to describe:
- what data the code receives or creates,
- what it checks or loops through,
- what conditions are used,
- what result or output is expected.
*/


/*
============================================================
EXERCISE 11
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  function checkAge(age) {
    if (age < 18) {
      return "Minor";
    } else {
      return "Adult";
    }
  }
}


/*
============================================================
EXERCISE 12
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  function getDiscount(total) {
    if (total >= 200) {
      return 20;
    } else if (total >= 100) {
      return 10;
    } else if (total >= 50) {
      return 5;
    } else {
      return 0;
    }
  }
}


/*
============================================================
EXERCISE 13
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  function getMessage(status) {
    switch (status) {
      case "success":
        return "Operation successful";

      case "loading":
        return "Please wait";

      case "error":
        return "Something went wrong";

      default:
        return "Unknown status";
    }
  }
}


/*
============================================================
EXERCISE 14
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  const cities = ["Berlin", "Hamburg", "Munich", "Cologne"];

  for (const city of cities) {
    console.log(city);
  }
}


/*
============================================================
EXERCISE 15
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  const scores = [80, 55, 92, 41, 76];

  for (let i = 0; i < scores.length; i++) {
    console.log(`Student ${i + 1}: ${scores[i]}`);
  }
}


/*
============================================================
EXERCISE 16
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  const user = {
    name: "Anna",
    email: "anna@example.com",
    city: "Berlin"
  };

  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
}


/*
============================================================
EXERCISE 17
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  const products = [
    { name: "Keyboard", stock: 4 },
    { name: "Mouse", stock: 0 },
    { name: "Monitor", stock: 7 }
  ];

  for (const product of products) {
    if (product.stock === 0) {
      console.log(`${product.name} is out of stock`);
    }
  }
}


/*
============================================================
EXERCISE 18
============================================================

Write the requirement for the code below.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  let attempts = 0;

  while (attempts < 3) {
    console.log("Trying to connect...");
    attempts++;
  }
}


/*
============================================================
EXERCISE 19
============================================================

Write the requirement for the code below.

Pay attention to the fact that the loop body executes before
the condition is checked.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  let number = 10;

  do {
    console.log(number);
    number--;
  } while (number > 0);
}


/*
============================================================
EXERCISE 20
============================================================

Write the full assignment requirement that could have produced
the code below.

Do not describe it line by line. Reconstruct the assignment.

Your requirement:
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
*/

{
  const tasks = [
    { title: "Call client", priority: "high", status: "pending" },
    { title: "Send invoice", priority: "normal", status: "completed" },
    { title: "Prepare contract", priority: "high", status: "overdue" }
  ];

  for (const task of tasks) {
    if (task.priority === "high") {
      switch (task.status) {
        case "pending":
          console.log(`Reminder: ${task.title}`);
          break;

        case "overdue":
          console.log(`URGENT: ${task.title}`);
          break;

        case "completed":
          console.log(`Done: ${task.title}`);
          break;
      }
    }
  }
}
'''

path = "/mnt/data/javascript-control-flow-practice.js"
with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Dosya oluşturuldu:", path)
