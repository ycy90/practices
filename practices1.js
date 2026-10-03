// 1. Palindrome Checker
// - Define a function with one string parameter that checks whether the text is a palindrome.
// - Ignore letter case and remove spaces and punctuation before checking; log the result.
{
function palindrome(str) {
  const myRegex = /[^a-z0-9]/gi;
  const refined = str.replace(myRegex, "");
  const polished = refined.toLowerCase();
  const arr1 = polished.split("");
  const arr1a = arr1.slice();
  const arr2 = arr1a.reverse();

  if (arr1.join("") === arr2.join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

  console.log("Ex-1---------");
  console.log(palindrome("eye")); // Expected: true
  console.log(palindrome("not a palindrome")); // Expected: false
  console.log("----------");
}

// 2. Acronym Builder
// - Define a function with one phrase parameter that builds an acronym from its words.
// - Use the first letter of each included word and return the acronym in uppercase; log it.
{
function buildAcronym(str) {

  const word = str.split(" ");

  const letters = [];

  for (const words of word) {

    const omitted = ["a", "for", "an", "and", "by", "of"];

    if (!omitted.includes(words) || omitted.includes(word[0])) {

      const capital = words.slice(0, 1);

      const unified = capital.toUpperCase();

      letters.push(unified);
    }
  }

  return letters.join("");
}

  console.log("Ex-2---------");
  console.log(buildAcronym("For your information")); // Expected: FYI
  console.log("----------");
}

// 3. CSV Headings
// - Define a function with one CSV heading row parameter.
// - Split the row at commas, trim each heading, and log the resulting array.
{
function getHeadings(csv) {

  const splitted = csv.split(",");

  const trimmedArr = [];

  for (let i = 0; i < splitted.length; i++) {

    const trimmed = splitted[i].trim();

    trimmedArr.push(trimmed);
  }

  return trimmedArr;
}

getHeadings("name,age,city");

  console.log("Ex-3---------");
  console.log(getHeadings("name, age, city")); // Expected: ["name", "age", "city"]
  console.log("----------");
}

// 4. Factorial Calculator
// - Define a function with one non-negative integer parameter and use a for loop to calculate its factorial.
// - Return the product and log the result.
{
function factorial(n) {

  let product = 1;

  for (let i = n; i >= 1; i--) {

    product *= i;
  }

  return product;
}

  console.log("Ex-4---------");
  console.log(factorial(5)); // Expected: 120
  console.log(factorial(0)); // Expected: 1
  console.log("----------");
}

// 5. Phone Number Formatter
// - Define a function with one 11-digit phone number parameter.
// - Format it with a country code, a parenthesized area code, and a hyphenated local number; log the result.
{
function formatNumber(number) {
  const newNumber = [];
  const splitted = number.split("");
  splitted.unshift("+");
  const countryCode = splitted.splice(0, 2);
  const countryCodeArr = countryCode.join("");
  newNumber.push(countryCodeArr);
  const areaCode = splitted.splice(0, 3);
  const areaCodeArr = "(" + areaCode.join("") + ")";
  newNumber.push(areaCodeArr);
  const numNew = splitted.splice(0, 3);
  const numNewArr = numNew.join("") + "-" + splitted.join("");
  newNumber.push(numNewArr);
  const finalized = newNumber.join(" ");
  return finalized;
}

  console.log("Ex-5---------");
  console.log(formatNumber("45785645123")); // Expected: +4 (578) 564-5123
  console.log("----------");
}

// 6. Groundhog Day Prediction
// - Define a function with one parameter indicating whether the groundhog saw its shadow.
// - Return the matching prediction for true or false, and a fallback message for other values; log the predictions.
{
function groundhogDayPrediction(appearance) {
  if (typeof appearance === "boolean" && appearance === true) {
    return "Looks like we'll have six more weeks of winter.";
  } else if (typeof appearance === "boolean" && appearance === false) {
    return "It's going to be an early spring.";
  } else if (typeof appearance !== "boolean") {
    return "No prediction this year.";
  }
}

  console.log("Ex-6---------");
  console.log(groundhogDayPrediction(true)); // Expected: six more weeks of winter
  console.log(groundhogDayPrediction(false)); // Expected: early spring
  console.log("----------");
}

// 7. Perfect Square Checker
// - Define a function with one number parameter.
// - Return whether its square root is an integer; log the result.
{
function isPerfectSquare(n) {

  const root = Number.isInteger(Math.sqrt(n));

  if (root) {
    return true;
  } else {
    return false;
  }

  return n;
}

  console.log("Ex-7---------");
  console.log(isPerfectSquare(25)); // Expected: true
  console.log(isPerfectSquare(20)); // Expected: false
  console.log("----------");
}

// 8. Piggy Bank Total
// - Define a function with one object parameter containing penny, nickel, dime, and quarter counts.
// - Treat missing coin counts as zero, calculate the total, and log it as a dollar amount.
{
function piggyBank(coins) {
  const pennies = 1;
  const bankPenny = pennies * (coins.pennies ??= 0);
  const quarters = (pennies * 25) * (coins.quarters ??= 0);
  const dimes = (pennies * 10) * (coins.dimes ??= 0);
  const nickels = (pennies * 5) * (coins.nickels ??= 0);
  const total = (bankPenny + quarters + dimes + nickels) / 100;
  const totalDisp = total.toFixed(2);

  return `$${totalDisp}`;
}

  console.log("Ex-8---------");
  console.log(piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 4 })); // Expected: $1.16
  console.log(piggyBank({})); // Expected: $0.00
  console.log("----------");
}

// 9. Reverse Sentence
// - Define a function with one sentence parameter.
// - Reverse the order of its words, normalize repeated whitespace, and log the resulting sentence.
{
function reverseSentence(sentence) {
  const splitted = sentence.split(/\s+/gi);
  const reversed = splitted.reverse();
  const reversedArrJoined = reversed.join(" ");
  return reversedArrJoined;
}

  console.log("Ex-9---------");
  console.log(reverseSentence("npm  install  sudo")); // Expected: sudo install npm
  console.log("----------");
}

// 10. Phone Number Spam Checker
// - Define a function with one phone number parameter.
// - Check the number against the specified spam rules and log whether it is spam.
{
function isSpam(number) {

  const numerized = number.match(/\d/g);

  const wholeNum = numerized.join("");

  const areaCode = Number(
    numerized
      .slice(numerized.length - 10, numerized.length - 7)
      .join("")
  );

  const localNum = numerized
    .slice(numerized.length - 7, numerized.length - 4)
    .join("");

  const localNumSum =
    Number(localNum[0]) +
    Number(localNum[1]) +
    Number(localNum[2]);

  const localNumStr = String(localNumSum);

  const localNumLast = numerized
    .slice(numerized.length - 4)
    .join("");

  if (
    Number(numerized[0]) !== 0 ||
    numerized.length - 10 > 2
  ) {
    return true;
  }

  else if (areaCode > 900 || areaCode < 200) {
    return true;
  }

  else if (localNumLast.includes(localNumStr)) {
    return true;
  }

  else if (/(\d)\1{3,}/.test(wholeNum)) {
    return true;
  }

  else {
    return false;
  }
}

  console.log("Ex-10---------");
  console.log(isSpam("02125551234")); // Expected: false
  console.log(isSpam("01111111111")); // Expected: true
  console.log("----------");
}

// 11. Speeding Summary
// - Define a function with a speed array and a speed limit as parameters.
// - Return the number of speeding vehicles and their average excess speed; log the result.
{
function speeding(speeds, limit) {

  const overSpeed = [];

  let sumOverSpeed = 0;

  for (const speed of speeds) {

    if (speed > limit) {

      overSpeed.push(speed - limit);

      sumOverSpeed += speed - limit;
    }
  }

  if (overSpeed.length === 0) {
    return [0, 0];
  }

  const average = sumOverSpeed / overSpeed.length;

  return [overSpeed.length, average];
}

  console.log("Ex-11---------");
  console.log(speeding([60, 70, 50], 50)); // Expected: [2, 15]
  console.log(speeding([40, 50], 50)); // Expected: [0, 0]
  console.log("----------");
}

// 12. String Mirror Checker
// - Define a function with two string parameters.
// - Check whether one string is the reverse of the other while ignoring non-letter characters; log the result.
{
function isMirror(str1, str2) {
  const splitted = str2.split("");
  const reversed = splitted.reverse();
  const strNew = reversed.join("");
  const str1split = str1.split("");
  const strControl = str1split.join("");
  const strNewN = strNew.replace(/[^a-z]/gi, "");
  const strControlC = strControl.replace(/[^a-z]/gi, "");

  if (strNewN === strControlC) {
    return true;
  } else {
    return false;
  }
}

  console.log("Ex-12---------");
  console.log(isMirror("Hello World", "dlroW olleH")); // Expected: true
  console.log(isMirror("Hello", "world")); // Expected: false
  console.log("----------");
}

// 13. Blackjack Card Counter
// - Define a function that accepts one playing card and maintains a running count.
// - Add one for cards 2–6 and subtract one for 10, J, Q, K, or A; return the count with Bet or Hold and log it.
{
let count = 0;

function cardCounter(card) {

  if (card >= 2 && card <= 6) {
    count++;
  }

  else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  }

  return count + " Hold";
}

  console.log("Ex-13---------");
  console.log(cardCounter(5)); // Expected: 1 Bet
  console.log(cardCounter("K")); // Expected: 0 Hold
  console.log("----------");
}

// 14. Leap Year Calculator
// - Define a function with one year parameter.
// - Apply the leap year rules and return a sentence stating whether the year is a leap year; log both sample results.
{
function isLeapYear(year) {

  if (
    year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)
  ) {
    return year + " is a leap year.";
  }

  return year + " is not a leap year.";
}

  console.log("Ex-14---------");
  console.log(isLeapYear(2024)); // Expected: 2024 is a leap year.
  console.log(isLeapYear(1900)); // Expected: 1900 is not a leap year.
  console.log("----------");
}

// 15. Thermostat Converter
// - Define a Thermostat class that stores its temperature in Fahrenheit.
// - Add a Celsius getter and setter, then log the temperature before and after setting it.
{
class Thermostat {

  constructor(fahrenheit) {

    this._fahrenheit = fahrenheit;
  }

  get temperature() {

    return (5 / 9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {

    this._fahrenheit = (celsius * 9) / 5 + 32;
  }
}

const thermos = new Thermostat(76);

let temp = thermos.temperature;

thermos.temperature = 26;

temp = thermos.temperature;

  console.log("Ex-15---------");
  const thermostat = new Thermostat(76);
  console.log(thermostat.temperature.toFixed(2)); // Expected: 24.44
  thermostat.temperature = 26;
  console.log(thermostat.temperature); // Expected: 26
  console.log("----------");
}

// 16. Crew Priority Sort
// - Define a function with one array of crew objects and sort it using nested loops.
// - Order the objects by priority from highest to lowest and log the names in that order.
{
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

  console.log("Ex-16---------");
  const crew = [{ name: "A", priority: 2 }, { name: "B", priority: 5 }, { name: "C", priority: 1 }];
  sortByPriorityDescending(crew);
  console.log(crew.map((member) => member.name)); // Expected: ["B", "A", "C"]
  console.log("----------");
}

// 17. Crew Chunking
// - Define a function with an array and a chunk size as parameters.
// - Divide the array into smaller arrays of that size and log the resulting chunks.
{
const EVAReadySquad = [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }];

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

  console.log("Ex-17---------");
  const chunks = chunkCrew(EVAReadySquad, 3);
  console.log(chunks.map((group) => group.map((member) => member.name))); // Expected: [["A", "B", "C"], ["D"]]
  console.log("----------");
}

// 18. Heritage Library Catalog
// - Define functions to parse, search, group, display, validate, and export library catalog entries.
// - Use the provided catalog data to log examples of the parsing, search, grouping, validation, and export results.
{
const rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",

  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

function parseCard(rawString) {

  const parts = rawString.split("|");

  const trimmedParts = [];

  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }

  const title = trimmedParts[0];
  const author = trimmedParts[1];
  const year = trimmedParts[2];
  const location = trimmedParts[3];

  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown"
  };
}

function parseCatalog(rawCards) {

  const catalog = [];

  for (let i = 0; i < rawCards.length; i++) {

    catalog.push(parseCard(rawCards[i]));
  }

  return catalog;
}

const catalog = parseCatalog(rawCatalogCards);

function findByAuthor(catalog, author) {

  const searchTerm = author.toLowerCase();

  const results = [];

  for (let i = 0; i < catalog.length; i++) {

    if (catalog[i].author.toLowerCase().includes(searchTerm)) {
      results.push(catalog[i]);
    }
  }

  return results;
}

function groupByDecade(catalog) {

  const grouped = {};

  for (let i = 0; i < catalog.length; i++) {

    const book = catalog[i];

    if (book.year === "Unknown") {

      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }

      grouped["Unknown"].push(book);

      continue;
    }

    const decade = Math.floor(book.year / 10) * 10;

    const decadeKey = `${decade}s`;

    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }

    grouped[decadeKey].push(book);
  }

  return grouped;
}

const byDecade = groupByDecade(catalog);

function renderEntry(entry) {

  const title = entry.title || "Unknown";
  const author = entry.author || "Unknown";
  const year = entry.year || "Unknown";
  const location = entry.location || "Unknown";

  return `${"-".repeat(25)}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${"-".repeat(25)}`;
}

function validateEntry(entry) {

  let isValid = true;

  if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
    isValid = false;
  }

  if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
    isValid = false;
  }

  if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
    isValid = false;
  }

  if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
    isValid = false;
  }

  return isValid;
}

function exportToJSON(catalog) {

  return JSON.stringify(catalog, null, 2);
}

function exportToCSV(catalog) {

  const header = "Title,Author,Year,Location";

  const rows = [];

  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];

    rows.push(
      `"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`
    );
  }

  let csv = header;

  for (let i = 0; i < rows.length; i++) {
    csv = csv + "\n" + rows[i];
  }

  return csv;
}

let oldestYear = Infinity;

let newestYear = 0;

for (let i = 0; i < catalog.length; i++) {

  const entry = catalog[i];

  if (entry.year !== "Unknown") {

    if (entry.year < oldestYear) {
      oldestYear = entry.year;
    }

    if (entry.year > newestYear) {
      newestYear = entry.year;
    }
  }
}

  console.log("Ex-18---------");
  console.log(parseCard("Dune | Herbert, Frank | 1965 | Shelf H3")); // Expected: parsed Dune entry
  console.log(findByAuthor(catalog, "King").length); // Expected: 6
  console.log(validateEntry(catalog[0])); // Expected: true
  console.log(groupByDecade(catalog)["1960s"].length); // Expected: 2
  console.log(exportToJSON(catalog).startsWith("[")); // Expected: true
  console.log(exportToCSV(catalog).startsWith("Title,Author,Year,Location")); // Expected: true
  console.log("----------");
}

// 19. Longest Word Length
// - Define a function with one sentence parameter and use a loop to inspect its words.
// - Return and log the length of the longest word.
{
function findLongestWordLength(str) {
  let result = 0;
  const sentence = str.split(" ");

  for (let i = 0; i < sentence.length; i++) {
    const longed = sentence[i].length;

    if (sentence[i].length > result) {
      result = longed;
    }
  }

  return result;
}

  console.log("Ex-19---------");
  console.log(findLongestWordLength("The quick brown fox")); // Expected: 5
  console.log("----------");
}

// 20. Missing Letter Finder
// - Define a function with one string containing consecutive alphabet letters and a possible gap.
// - Find and return the missing letter, or undefined if no letter is missing; log both cases.
{
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1].charCodeAt(0) - str[i].charCodeAt(0) > 1) {
      const result = str[i + 1].charCodeAt(0) - 1;
      const resultStr = String.fromCharCode(result);
      return resultStr;
    }
  }

  return undefined;
}

  console.log("Ex-20---------");
  console.log(fearNotLetter("abce")); // Expected: d
  console.log(fearNotLetter("abc")); // Expected: undefined
  console.log("----------");
}

// 21. Mutation Checker
// - Define a function with an array containing two words.
// - Check whether every letter in the second word occurs in the first, ignoring case; log the result.
{
function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    const letter = secondWord[i];

    if (firstWord.includes(letter)) {
    } else {
      return false;
    }
  }

  return true;
}

  console.log("Ex-21---------");
  console.log(mutation(["hello", "ell"])); // Expected: true
  console.log(mutation(["hello", "world"])); // Expected: false
  console.log("----------");
}

// 22. Repeat a String
// - Define a function with a string and a repetition count as parameters.
// - Return the string repeated that many times, or an empty string for a non-positive count; log both cases.
{
function repeatStringNumTimes(str, num) {
  let result = "";

  for (let i = 1; i < num + 1; i++) {
    if (num > 0) {
      result += str;
    } else {
      return "";
    }
  }

  return result;
}

  console.log("Ex-22---------");
  console.log(repeatStringNumTimes("*", 3)); // Expected: ***
  console.log(repeatStringNumTimes("abc", 0)); // Expected: an empty string
  console.log("----------");
}

// 23. Word and Character Counter
// - Define functions to print the characters of a string and count matching words in an array.
// - Call both functions and log the matching word count.
{
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}



function getMatchedWordCount(sentence, match) {
  let count = 0;

  for (const word of sentence) {
    if (word === match) {
      count++;
    }

    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }

  return count;
}

  console.log("Ex-23---------");
  printCharacters("hi"); // Expected: h, then i
  console.log(getMatchedWordCount(["I", "code", "code"], "code")); // Expected: 2
  console.log("----------");
}

// 24. Text Character Counters
// - Define functions to count vowels, consonants, punctuation marks, and words in text.
// - Call each function with a sample string and log each count.
{
function getVowelCount(sentence) {
  const vowels = "aeiou";

  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";

  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }

  return count;
}

function getPunctuationCount(sentence) {
  const punctuations = '.,!?;:-()[]{}"\'–';

  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }

  return count;
}

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(" ");

  let count = 0;

  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

  console.log("Ex-24---------");
  console.log(getVowelCount("Apple")); // Expected: 2
  console.log(getConsonantCount("Code")); // Expected: 2
  console.log(getPunctuationCount("Hi?!")); // Expected: 2
  console.log(getWordCount("I love code")); // Expected: 3
  console.log("----------");
}

// 25. Traffic Light Sequencer
// - Define functions to run traffic-light phases for multiple cycles and build a cumulative timeline.
// - Use a sample configuration to log the phase messages and timeline values.
{
const config1 = { fault: false, phases: [
  { color: "green", duration: 5 },
  { color: "yellow", duration: 2 },
  { color: "red", duration: 4 },
] };

function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  else if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  let i = 1;

  while (i <= cycles) {

    for (const phase of config.phases) {

      if (phase.duration > 0) {
        console.log(
          `Switching to ${phase.color} for ${phase.duration} s`
        );
      } else {
        console.log("Invalid phase detected");
      }
    }

    i++;
  }
}

function generateTimeline(config, cycles) {
  if (config.phases.length === 0) {
    return [];
  }

  let i = 1;

  let total = 0;

  const timeline = [];

  while (i <= cycles) {

    for (const phase of config.phases) {

      total += phase.duration;

      timeline.push(total);
    }

    i++;
  }

  return timeline;
}

  console.log("Ex-25---------");
  runSequence(config1, 1); // Expected: green, yellow, and red phase messages
  console.log(generateTimeline(config1, 2)); // Expected: [5, 7, 11, 16, 18, 22]
  console.log("----------");
}
