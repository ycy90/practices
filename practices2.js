// 1. Space Mission Crew Manager
// - Define functions to manage a crew: add unique members, swap and sort members, select EVA-ready members, and create chunks.
// - Use the sample crew to log a reordered crew, the EVA-ready crew, and the chunk count.
{
const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {

  for (let i = 0; i < crew.length; i++) {

    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);

      return;
    }
  }

  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

function swapCrewMembers(crew, fromIndex, toIndex) {

  if (
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }

  const updatedCrew = crew.slice();

  updatedCrew[fromIndex] =
    updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  return updatedCrew;
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

function sortByPriorityDescending(crew) {

  for (let i = 0; i < crew.length - 1; i++) {

    for (let j = 0; j < crew.length - 1 - i; j++) {

      if (crew[j].priority < crew[j + 1].priority) {

        const temp = crew[j];

        crew[j] = crew[j + 1];

        crew[j + 1] = temp;
      }
    }
  }
}

function getEVAReadyCrew(crew) {

  const eligible = [];

  for (const astronaut of crew) {

    if (astronaut.isEVAEligible) {
      eligible.push(astronaut);
    }
  }

  sortByPriorityDescending(eligible);

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

function chunkCrew(crew, size) {

  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];

  for (let i = 0; i < crew.length; i += size) {

    chunks.push(crew.slice(i, i + size));
  }

  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

function printCrewSummary(crew) {

  const sorted = crew.slice();

  sortByPriorityDescending(sorted);

  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}

  console.log("Ex-1---------");
  console.log(swapCrewMembers(squad, 0, 1).map((member) => member.name)); // Expected: first two crew members swapped
  console.log(getEVAReadyCrew(squad).map((member) => member.name)); // Expected: EVA-eligible crew sorted by priority
  console.log(chunkCrew(EVAReadySquad, 3).length); // Expected: number of crew chunks
  console.log("----------");
}

// 2. Artifact Provenance Auditor
// - Define functions to inspect and update artifacts, including their tags, locations, curator, and display status.
// - Use the sample collection to log the title, updated details, and summary.
{
const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",

    curator: {
      id: 201,
      name: "Earl Sinclair",
    },

    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],

    tags: ["gold", "egypt"],

    onDisplay: true,
  },

  102: {
    title: "Bronze Tablet",
    category: "Inscription",

    curator: {
      id: 202,
      name: "Robert Sinclair",
    },

    locations: [{ gallery: "Archive Wing", year: 2019 }],

    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

function getArtifactTitle(id) {
  const artifact = collection[id];

  return artifact ? artifact.title : "Artifact not found";
}

function addTag(id, tag) {
  const artifact = collection[id];

  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}

addTag(101, "royal");
function moveArtifact(id, gallery, year) {
  const artifact = collection[id];

  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}

function toggleDisplayStatus(id) {
  const artifact = collection[id];

  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
}

function updateCurator(id, name) {
  const artifact = collection[id];

  if (artifact) {
    artifact.curator.name = name;
  }
}

updateCurator(101, "Fran Sinclair");
function buildSummary(id) {
  const artifact = collection[id];

  if (!artifact) {
    return "Artifact not found";
  }

  const currentLocation =
    artifact.locations[artifact.locations.length - 1];

  return `${artifact.title}
Category: ${artifact.category}
Curator: ${artifact.curator.name}
Current Gallery: ${currentLocation.gallery}
On Display: ${artifact.onDisplay}`;
}

  console.log("Ex-2---------");
  console.log(getArtifactTitle(102)); // Expected: Bronze Tablet
  addTag(101, "royal"); console.log(collection[101].tags.includes("royal")); // Expected: true
  moveArtifact(102, "Hall B", 2026); console.log(collection[102].locations.at(-1)); // Expected: Hall B location
  toggleDisplayStatus(102); console.log(collection[102].onDisplay); // Expected: true
  updateCurator(101, "Fran Sinclair"); console.log(collection[101].curator.name); // Expected: Fran Sinclair
  console.log(buildSummary(101).startsWith("Golden Mask")); // Expected: true
  console.log("----------");
}

// 3. Cargo Manifest Validator
// - Define functions to normalize cargo units, validate required manifest fields, and process a manifest.
// - Log the normalized weight, validation errors, and processing result for sample manifests.
{
function normalizeUnits(manifest) {

  const normalizedManifest = { ...manifest };

  if (normalizedManifest.unit === "lb") {
    normalizedManifest.weight = normalizedManifest.weight * 0.45;
    normalizedManifest.unit = "kg";
  }

  return normalizedManifest;
}

function validateManifest(manifest) {

  const errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";

  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";

  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";

  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";

  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";

  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {

  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {

    console.log("Validation success: " + manifest.containerId);

    const normalizedManifest = normalizeUnits(manifest);

    console.log("Total weight: " + normalizedManifest.weight + " kg");

  } else {

    console.log("Validation error: " + manifest.containerId);

    console.log(validateManifest(manifest));
  }
}

  console.log("Ex-3---------");
  console.log(normalizeUnits({ weight: 10, unit: "lb" })); // Expected: approximately 4.5 kg
  console.log(validateManifest({ containerId: 1, destination: "Berlin", weight: 10, unit: "kg", hazmat: false })); // Expected: {}
  processManifest({ containerId: 1, destination: "Berlin", weight: 10, unit: "lb", hazmat: false }); // Expected: validation success and 4.5 kg
  console.log("----------");
}

// 4. Device Loan Manager
// - Define functions to check devices in and out, find overdue loans, and serialize or restore a ledger.
// - Use a sample ledger and log the operation messages, overdue devices, and restored status.
{
function checkoutDevice(ledger, assetTag, borrower) {
  const clone = structuredClone(ledger);

  if (assetTag in ledger && ledger[assetTag].status === "CheckedIn") {
    clone[assetTag].borrower.name = borrower.name;

    clone[assetTag].borrower.email = borrower.email;

    clone[assetTag].status = "CheckedOut";

    return {
      ledger: clone,
      message: assetTag + " checked out to " + borrower.name
    };
  }

  else if (!(assetTag in ledger)) {
    return {
      ledger: ledger,
      message: assetTag + " not found"
    };
  }

  else if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: assetTag + " already checked out"
    };
  }
}

function checkinDevice(ledger, assetTag) {
  const clone = structuredClone(ledger);

  if (assetTag in ledger) {
    clone[assetTag].borrower.name = "";

    clone[assetTag].borrower.email = "";

    clone[assetTag].dueDate = "";

    clone[assetTag].status = "CheckedIn";

    return {
      ledger: clone,
      message: assetTag + " successfully checked in"
    };
  }

  else {
    return {
      ledger: ledger,
      message: assetTag + " not found"
    };
  }
}

function listOverdueDevices(ledger, today) {
  const overDued = [];

  const splittedToday = today.split("/");

  for (const device of Object.values(ledger)) {
    const splittedDueDate = device.dueDate.split("/");

    if (
      Number(splittedToday[2]) > Number(splittedDueDate[2]) &&
      device.status === "CheckedOut"
    ) {
      overDued.push(device);
    }

    if (
      Number(splittedToday[2]) === Number(splittedDueDate[2]) &&
      Number(splittedToday[0]) > Number(splittedDueDate[0]) &&
      device.status === "CheckedOut"
    ) {
      overDued.push(device);
    }

    if (
      Number(splittedToday[2]) === Number(splittedDueDate[2]) &&
      Number(splittedToday[0]) === Number(splittedDueDate[0]) &&
      Number(splittedToday[1]) > Number(splittedDueDate[1]) &&
      device.status === "CheckedOut"
    ) {
      overDued.push(device);
    }
  }

  overDued.sort((a, b) => {
    const aDate = a.dueDate.split("/");

    const bDate = b.dueDate.split("/");

    const aMonth = Number(aDate[0]);
    const aDay = Number(aDate[1]);
    const aYear = Number(aDate[2]);

    const bMonth = Number(bDate[0]);
    const bDay = Number(bDate[1]);
    const bYear = Number(bDate[2]);

    if (aYear !== bYear) {
      return aYear - bYear;
    }

    if (aMonth !== bMonth) {
      return aMonth - bMonth;
    }

    return aDay - bDay;
  });

  return overDued;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

  console.log("Ex-4---------");
  const ledger = { A1: { status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }, B2: { status: "CheckedOut", borrower: { name: "Sam", email: "sam@example.com" }, dueDate: "09/20/2025" } };
  console.log(checkoutDevice(ledger, "A1", { name: "Lee", email: "lee@example.com" }).message); // Expected: A1 checked out to Lee
  console.log(checkinDevice(ledger, "A1").message); // Expected: A1 successfully checked in
  console.log(listOverdueDevices(ledger, "09/21/2025").map((device) => device.borrower.name)); // Expected: ["Sam"]
  console.log(loadLedger(serializeLedger(ledger)).B2.status); // Expected: CheckedOut
  console.log("----------");
}

// 5. Quiz Builder
// - Define functions to select a random question and answer from arrays and compare an answer with the correct one.
// - Call the functions with the sample questions and log the selected values and result message.
{
const questions = [
  {
    category: "Math",
    question: "What is the product of two times two?",
    choices: ["two", "four", "six"],
    answer: "two"
  },
  {
    category: "Sport",
    question: "Who won WC 2026?",
    choices: ["Spain", "Argentina", "France"],
    answer: "Spain"
  },
  {
    category: "Science",
    question: "What H20 represents?",
    choices: ["Water", "Ice Tea", "Coffee"],
    answer: "Water"
  },
  {
    category: "Geography",
    question: "What is the capital of Italy?",
    choices: ["Paris", "London", "Rome"],
    answer: "Rome"
  },
  {
    category: "Pop Culture",
    question: "How many movies does Harry Potter have?",
    choices: ["6", "7", "8"],
    answer: "8"
  },
];

function getRandomQuestion(arrQ) {

  const randomQuestion = Math.floor(Math.random() * arrQ.length);

  return arrQ[randomQuestion];
}

function getRandomComputerChoice(arrQ) {

  const randomAnswer = Math.floor(Math.random() * arrQ.length);

  return arrQ[randomAnswer];
}

function getResults(obj, choice) {

  if (choice === obj.answer) {

    return "The computer's choice is correct!";

  } else {

    return "The computer's choice is wrong. The correct answer is: " + obj.answer;
  }
}

  console.log("Ex-5---------");
  console.log(questions.length); // Expected: 5
  console.log(getRandomQuestion(questions).category); // Expected: one of the listed categories
  console.log(getRandomComputerChoice(questions[0].choices)); // Expected: one of the listed choices
  console.log(getResults(questions[0], "two")); // Expected: The computer's choice is correct!
  console.log("----------");
}

// 6. Username Validator
// - Define a regular expression for usernames that begin with a letter and follow the required character rules.
// - Test valid and invalid sample usernames and log each result.
{
let username = "JackOfAllTrades";

let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

let result = userCheck.test(username);

  console.log("Ex-6---------");
  console.log(userCheck.test("JackOfAllTrades")); // Expected: true
  console.log(userCheck.test("1Jack")); // Expected: false
  console.log("----------");
}


// 7. Chunk Array in Groups
// - Define a function with an array and a group size as parameters.
// - Split the array into groups of that size and return the groups; log sample results.
{
  function chunkArrayInGroups(arr, num) {
    const newArr = [];

    while (arr.length > 0) {
      const grouping = arr.splice(0, num);
      newArr.push(grouping);
    }

    return newArr;
  }

  console.log("Ex-7---------");
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // Expected: [["a", "b"], ["c", "d"]]
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4], 2)); // Expected: [[0, 1], [2, 3], [4]]
  console.log("----------");
}


// 8. Pantry Shipment Planner
// - Define functions to parse shipment records, remove duplicate SKUs, and assign each product a default zone when needed.
// - Plan discard, restock, or donate actions, group them by zone, and log the grouped results.
{
  const pantry = [
    { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
    { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" },
  ];

  const rawData = [
    "A10|Tomatoes|5|2027-01-01",
    "B21|Bananas|10|2027-01-01",
    "C32|Eggs|3|2027-01-01|fridge",
    "C32|Eggs|3|2027-01-01",
    "D43|Pineapples|0|2027-01-01",
    "E54|Peppers|-1|2027-01-01|fridge",
  ];

  function parseShipment(rawData) {
    const pantryInv = [];

    for (const raw of rawData) {
      const separate = raw.split("|");
      const prod = {
        sku: separate[0],
        name: separate[1],
        qty: Number(separate[2]),
        expires: separate[3],
        zone: separate[4] ?? "general",
      };

      if (!pantryInv.some((item) => item.sku === prod.sku)) {
        pantryInv.push(prod);
      }
    }

    return pantryInv;
  }

  function planRestock(pantry, shipment) {
    const restockInv = [];

    for (const item of shipment) {
      if (item.qty <= 0) {
        restockInv.push({ type: "discard", item });
      } else if (pantry.some((pantryItem) => pantryItem.sku === item.sku)) {
        restockInv.push({ type: "restock", item });
      } else {
        restockInv.push({ type: "donate", item });
      }
    }

    return restockInv;
  }

  function groupByZone(actions) {
    const groupZone = {};

    for (let i = 0; i < actions.length; i++) {
      const zone = actions[i].item.zone;

      if (!groupZone[zone]) {
        groupZone[zone] = [];
      }

      groupZone[zone].push(actions[i]);
    }

    return groupZone;
  }

  function clonePantry(pantry) {
    return structuredClone(pantry);
  }

  console.log("Ex-8---------");
  const shipment = parseShipment(rawData);
  console.log(shipment.length); // Expected: 5 (duplicate SKU C32 is ignored)

  const actions = planRestock(pantry, shipment);
  console.log(actions.map((action) => action.type)); // Expected: restock, donate, donate, discard, discard

  const groupedActions = groupByZone(actions);
  console.log(groupedActions); // Expected: actions grouped under fridge and general
  console.log(clonePantry(pantry)); // Expected: a separate copy of the pantry array
  console.log("----------");
}


// 9. Decimal to Binary
// - Define a function with one decimal number parameter.
// - Convert the number to its base-2 string representation and return it; log sample results.
{
  function toBinary(decimal) {
    const str = decimal.toString(2);
    return str;
  }

  console.log("Ex-9---------");
  console.log(toBinary(10)); // Expected: "1010"
  console.log(toBinary(7)); // Expected: "111"
  console.log("----------");
}


// 10. Binary to Decimal
// - Define a function with one binary string parameter.
// - Parse the string as a base-2 integer and return its decimal value; log sample results.
{
  function toDecimal(binary) {
    const deci = parseInt(binary, 2);
    return deci;
  }

  console.log("Ex-10---------");
  console.log(toDecimal("1010")); // Expected: 10
  console.log(toDecimal("111")); // Expected: 7
  console.log("----------");
}


// 11. FrankenSplice
// - Define a function with two arrays and an insertion index as parameters.
// - Insert a copy of the first array into a copy of the second array and return the result without changing either input; log sample results.
{
  function frankenSplice(arr1, arr2, index) {
    const cArr1 = arr1.slice();
    const cArr2 = arr2.slice();

    cArr2.splice(index, 0, ...cArr1);

    return cArr2;
  }

  console.log("Ex-11---------");
  console.log(frankenSplice([1, 2], ["a", "b"], 1)); // Expected: ["a", 1, 2, "b"]
  console.log(frankenSplice(["claw", " tentacle"], ["This", " is", " a", " dangerous", " animal"], 2)); // Expected: ["This", " is", "claw", " tentacle", " a", " dangerous", " animal"]
  console.log("----------");
}

// 12. Find an Element
// - Define a function with an array and a test function as parameters.
// - Return the first array element that passes the test, or undefined if none do; log both cases.
{
  function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }

    return undefined;
  }

  console.log("Ex-12---------");
  console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)); // Expected: 8
  console.log(findElement([1, 3, 5], (num) => num > 10)); // Expected: undefined
  console.log("----------");
}

// 13. Largest Number in Each Subarray
// - Define a function with an array of number arrays as its parameter.
// - Find the largest number in each inner array and return the results; log the result.
{
  function largestOfAll(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let largestNum = arr[i][0];

      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largestNum) {
          largestNum = arr[i][j];
        }
      }

      result.push(largestNum);
    }

    return result;
  }

  console.log("Ex-13---------");
  console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39]])); // Expected: [5, 27, 39]
  console.log("----------");
}


// 14. Mask a Reviewer Name
// - Define a function that receives a full name with one first name and one last name.
// - Keep the first letter of each name visible, replace the remaining letters with asterisks, and preserve the space; log sample results.
{
  let revFirstName = "John";
  let revLastName = "Doe";
  let revFullName = revFirstName + " " + revLastName;

  function maskRevName(revFullName) {
    const firstName = revFirstName.slice(0, 1);
    const firstNameAst = "*".repeat(revFirstName.length - 1);
    const lastName = revLastName.slice(0, 1);
    const lastNameAst = "*".repeat(revLastName.length - 1);
    return firstName + firstNameAst + " " + lastName + lastNameAst;
  }

  console.log("Ex-14---------");
  console.log(maskRevName("Ada Lovelace")); // Expected by task: A** L*******
  revFirstName = "Yigitcan";
  revLastName = "Yesilyurt";
  console.log(maskRevName(revFullName)); // Expected by task for the original argument: J*** D**
  console.log("----------");
}

// 15. Age Category
// - Define a function with one age parameter and return the matching age category.
// - Return "Invalid age" below 0, then classify ages 0–12, 13–17, 18–64, and 65+; log sample results.
{
  function evalAge(value) {
    if (value >= 0 && value <= 12) {
      return "You are a child";
    } else if (value >= 13 && value <= 17) {
      return "You are a teenager";
    } else if (value >= 18 && value <= 64) {
      return "You are an adult";
    } else if (value >= 65 && value <= 120) {
      return "You are a senior";
    } else if (value < 0 || value > 120) {
      return "Invalid Age";
    }
  }

  console.log("Ex-15---------");
  console.log(evalAge(25)); // Expected by task: "Adult"
  console.log(evalAge(10)); // Expected by task: "Child"
  console.log(evalAge(-1)); // Expected by task: "Invalid age"
  console.log("----------");
}

// 16. Cinema Ticket Price
// - Define a function with age and isStudent parameters and determine the ticket price by age group.
// - Apply a 2 euro student discount except to free tickets, return the final numeric price, and log sample results.
{
  function price(value, isStudent) {
    if (value >= 1 && value < 6) {
      return "It's free!";
    } else if (value >= 6 && value <= 17) {
      return "That'll be 7 Dollars";
    } else if (value >= 18 && value <= 64 && isStudent) {
      return "Oh you're a student. Here is your discounted ticket. That'll be 10 dollars.";
    } else if (value >= 18 && value <= 64 && !isStudent) {
      return "That'll be 12 Dollars.";
    } else if (value >= 65 && value <= 120) {
      return "That'll be 8 Dollars.";
    } else {
      return "Choose your age correctly";
    }
  }

  console.log("Ex-16---------");
  console.log(price(25, true)); // Expected by task: 10
  console.log(price(25, false)); // Expected by task: 12
  console.log(price(5, true)); // Expected by task: 0
  console.log("----------");
}

// 17. Password Match Checker
// - Define a function that receives two password values.
// - Return a message indicating whether the values match; log matching and non-matching examples.
{
  function passCheck(pass1, pass2) {
    if (pass1 === pass2) {
      return "Your password is correct";
    } else {
      return "Your Password is incorrect";
    }
  }

  console.log("Ex-17---------");
  console.log(passCheck("superhArdPasSwoRd1235", "superhArdPasSwoRd1235")); // Expected: password values match
  console.log(passCheck("superhArdPasSwoRd1235", "superhArdPasSword1235")); // Expected: password values do not match
  console.log("----------");
}

// 18. ATM Withdrawal
// - Define a function with current balance and withdrawal amount parameters.
// - Return "Invalid amount" for amounts at or below 0, "Insufficient funds" above the balance, or the remaining balance; log each case.
{
  function withdraw(balance, amount) {
    if (balance < amount) {
      return "Insufficient funds";
    } else if (amount <= 0) {
      return "Invalid amount";
    } else {
      return balance - amount;
    }
  }

  console.log("Ex-18---------");
  console.log(withdraw(1000, 200)); // Expected: 800
  console.log(withdraw(1000, 1200)); // Expected: "Insufficient funds"
  console.log(withdraw(1000, 0)); // Expected: "Invalid amount"
  console.log("----------");
}

// 19. Shopping Cart Discount
// - Define a function with price and quantity parameters and calculate the subtotal.
// - Apply a 10% discount when the subtotal is at least 100, then return the final price; log sample results.
{
  function shoppingCart(price, quantity) {
    const product = price * quantity;
    const dscPrice = product - product * 0.10;
    const actualPrice = Math.floor(dscPrice);
    const actualPriceNonDsc = Math.floor(product);
    const points = (dscPrice - actualPrice).toFixed(2);
    const pointsNonDsc = (product - actualPriceNonDsc).toFixed(2);

    if (product >= 100) {
      return `You pay ${actualPrice} and ${points} cents rounded down`;
    } else {
      return "You pay " + actualPriceNonDsc + " and " + pointsNonDsc + " cents rounded down";
    }
  }

  console.log("Ex-19---------");
  console.log(shoppingCart(25, 2)); // Expected by task: 50
  console.log(shoppingCart(50, 2)); // Expected by task: 90
  console.log(shoppingCart(120, 1)); // Expected by task: 108
  console.log("----------");
}

// 20. Login System
// - Define a function with username and password parameters and compare them with the correct credentials.
// - Return the appropriate success or error message and log the three specified login cases.
{
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

  console.log("Ex-20---------");
  console.log(loginCheck("admin", 12345)); // Expected by task: "Login successful"
  console.log(loginCheck("john", 12345)); // Expected: "Incorrect username"
  console.log(loginCheck("admin", "wrong")); // Expected: "Incorrect password"
  console.log("----------");
}

// 21. Discount Calculator
// - Define a function with price and isMember parameters.
// - Give members 20% off and apply the 10% bonus discount at prices of 200 or more; log sample results.
{
  function discountCalculator(price, isMember) {
    const memberDiscount = price - price * 0.20;
    const extraDiscount = memberDiscount - memberDiscount * 0.10;
    const normalDiscount = price - price * 0.10;

    if (isMember && price >= 200) {
      return extraDiscount;
    } else if (isMember) {
      return memberDiscount;
    } else if (price >= 200) {
      return normalDiscount;
    } else {
      return "No Discount";
    }
  }

  console.log("Ex-21---------");
  console.log(discountCalculator(100, true)); // Expected: 80
  console.log(discountCalculator(100, false)); // Expected: 100
  console.log(discountCalculator(250, true)); // Expected: 180
  console.log("----------");
}

// 22. Username Cleaner
// - Define a function with one username string parameter.
// - Trim surrounding spaces, convert the username to lowercase, and return "Username too short" below 3 characters; log sample results.
{
  function cleanUsername(username) {
    const removed = username.trim();
    const lowered = removed.toLowerCase();

    if (lowered.length < 3) {
      return "Username too short";
    } else {
      return lowered;
    }
  }

  console.log("Ex-22---------");
  console.log(cleanUsername("  YigitCan  ")); // Expected: "yigitcan"
  console.log(cleanUsername("  AB ")); // Expected: "Username too short"
  console.log("----------");
}

// 23. Password Strength Checker
// - Define a function with one password string parameter and trim surrounding spaces.
// - Return "Too short" below 8 characters, "Medium password" for 8–11, and "Strong password" for 12 or more; log sample results.
{
  function checkPassword(password) {
    const trimmed = password.trim();

    if (trimmed.length < 8) {
      return "Too Short";
    } else if (trimmed.length <= 11 && trimmed.length >= 8) {
      return "Medium password";
    } else if (trimmed.length > 11) {
      return "Strong password0";
    }
  }

  console.log("Ex-23---------");
  console.log(checkPassword("abc")); // Expected by task: "Too short"
  console.log(checkPassword("password1")); // Expected: "Medium password"
  console.log(checkPassword("superStrong123")); // Expected by task: "Strong password"
  console.log(checkPassword("   password1   ")); // Expected: "Medium password"
  console.log("----------");
}

// 24. Repeat a Message
// - Define a function with a message and repetition count as parameters.
// - Return the message repeated with spaces between copies, or "Invalid number" for a non-positive count; log sample results.
{
  function repeatMessage(str, num) {
    const repeated = (str + " ").repeat(num);
    return repeated;
  }

  console.log("Ex-24---------");
  console.log(repeatMessage("Hello", 3)); // Expected: "Hello Hello Hello"
  console.log(repeatMessage("JS", 2)); // Expected: "JS JS"
  console.log(repeatMessage("Hello", 0)); // Expected: "Invalid number"
  console.log("----------");
}

// 25. Product Code Extractor
// - Define a function with one product code string parameter.
// - Trim surrounding spaces, return "Invalid code" if fewer than 4 characters remain, otherwise return the first 4 characters in lowercase; log sample results.
{
  function getProductCode(code) {
    const trimmed = code.trim();
    const sliced = trimmed.slice(0, 4);
    const lowered = sliced.toLowerCase();

    if (lowered.length < 4) {
      return "Invalid Code";
    } else {
      return lowered;
    }
  }

  console.log("Ex-25---------");
  console.log(getProductCode(" PROD-9283-XL ")); // Expected: "prod"
  console.log(getProductCode(" ABCD-1234 ")); // Expected: "abcd"
  console.log(getProductCode(" AB ")); // Expected by task: "Invalid code"
  console.log("----------");
}
