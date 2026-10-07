// 1. Random Travel Destination
// - Create a cities array, add Cologne at the end and Frankfurt at the beginning, then check whether Munich is included.
// - If Munich exists, select a random city with Math.random() and Math.floor(), store it as nextDestination, and log the destination message.
{
  const cities = ["Berlin", "Hamburg", "Munich"];

  function destinationOrganizer(array) {
    array.push("Cologne");
    array.unshift("Frankfurt");
    const including = array.includes("Munich");

    if (including) {
      const randomize = Math.floor(Math.random() * array.length);
      const nextDestination = array[randomize];
      return nextDestination;
    }
  }

  console.log("Ex-1---------");
  console.log(destinationOrganizer(cities)); // Expected: one city from the updated array
  console.log("----------");
}


// 2. Lottery Number Checker
// - Define a function that generates six unique lottery numbers from 1 to 49 and compares them with six user-selected numbers.
// - Store all matches, then log the user numbers, drawn numbers, matches, and match count.
{
  function lotoNumbers(userNumbers) {
    const winnerNumbers = [];

    while (winnerNumbers.length < 6) {
      const generateNumbers = Math.floor(Math.random() * 49 + 1);
      if (!winnerNumbers.includes(generateNumbers)) {
        winnerNumbers.push(generateNumbers);
      }
    }

    let counter = 0;
    const matched = [];

    for (const number of userNumbers) {
      if (winnerNumbers.includes(number)) {
        counter++;
        matched.push(number);
      }
    }

    if (counter === 6) {
      return winnerNumbers + " You hit the Jackpot";
    } else if (counter === 0) {
      return winnerNumbers + " No Match";
    } else {
      return winnerNumbers + " You matched " + counter + " numbers." + "Matched numbers are: " + matched;
    }
  }

  console.log("Ex-2---------");
  console.log(lotoNumbers([6, 7, 13, 21, 20, 35])); // Expected: a draw summary based on the random numbers
  console.log("----------");
}

// 3. Football Group Draw
// - Define a function that receives four pots, each containing four football teams, and creates Groups A–D.
// - Select one team from each pot for every group without selecting a team twice, then return and log the completed groups.
{
  function drawPot(pot1, pot2, pot3, pot4) {
    const groupA = [];
    const groupB = [];
    const groupC = [];
    const groupD = [];

    const pots = [pot1, pot2, pot3, pot4];
    const groups = [groupA, groupB, groupC, groupD];

    for (const pot of pots) {
      for (const group of groups) {
        const generateNumbers = Math.floor(Math.random() * pot.length);
        group.push(pot[generateNumbers]);
        pot.splice(generateNumbers, 1);
      }
    }

    const final = `Group A: ${groupA}, Group B: ${groupB}, Group C: ${groupC}, Group D: ${groupD}`;
    return final;
  }

  const pot1 = ["Team 1", "Team 2", "Team 3", "Team 4"];
  const pot2 = ["Team 5", "Team 6", "Team 7", "Team 8"];
  const pot3 = ["Team 9", "Team 10", "Team 11", "Team 12"];
  const pot4 = ["Team 13", "Team 14", "Team 15", "Team 16"];

  console.log("Ex-3---------");
  console.log(drawPot(pot1, pot2, pot3, pot4)); // Expected: four groups with one team from each pot
  console.log("----------");
}

// 4. Football Player Bonus Calculator
// - Define a function with matches, goals, assists, yellow cards, and red cards as parameters.
// - Calculate the contribution-based bonus, apply card deductions, and log the final bonus.
{
  function salaryCalculator(matches, goals, assists, yellow, red) {
    const bonusFormula = (goals + assists) / matches;
    const penaltyPri = red / matches;
    const penaltyBig = 20000;
    const contribution = goals + assists;
    const bonus = contribution * 10000;
    const bonus2 = contribution * 5000;
    const penaltySec = yellow * 2500;

    if (bonusFormula >= 1 && penaltyPri < 0.10) {
      return bonus - penaltySec;
    } else if (bonusFormula >= 1 && penaltyPri >= 0.10) {
      return bonus - penaltyBig - penaltySec;
    } else if (bonusFormula < 1 && penaltyPri >= 0.10) {
      return bonus2 - penaltyBig - penaltySec;
    } else if (bonusFormula < 1 && penaltyPri < 0.10) {
      return bonus2 - penaltySec;
    }
  }

  console.log("Ex-4---------");
  console.log(salaryCalculator(40, 20, 10, 15, 5)); // Expected: 92500
  console.log(salaryCalculator(20, 12, 10, 7, 1)); // Expected: 202500
  console.log("----------");
}


// 5. Pyramid Pattern
// - Define a function with a character string, a row count, and a boolean direction parameter.
// - Build and return a pyramid when direction is false or an inverted pyramid when it is true; log both patterns.
{
  function pyramid(str, num, boolean) {
    let result = "\n";

    for (let i = 1; i <= num; i++) {
      if (boolean === false) {
        result += " ".repeat(num - i) + str.repeat(i * 2 - 1) + "\n";
      }
    }

    for (let i = num; i >= 1; i--) {
      if (boolean === true) {
        result += " ".repeat(num - i) + str.repeat(i * 2 - 1) + "\n";
      }
    }

    return result;
  }

  console.log("Ex-5---------");
  console.log(pyramid("*", 4, false)); // Expected: an upright pyramid with 4 rows
  console.log(pyramid("*", 4, true)); // Expected: an inverted pyramid with 4 rows
  console.log("----------");
}


// 6. Title Case
// - Define a function with one string parameter and convert the string to lowercase before processing its words.
// - Capitalize the first letter of each word, preserve the remaining letters, and return the formatted string; log sample results.
{
  function titleCase(str) {
    const result = [];
    const lowered = str.toLowerCase();
    const arrStr = lowered.split(" ");

    for (let i = 0; i < arrStr.length; i++) {
      const splitted = arrStr[i].split("");
      const rest = splitted.slice(1);
      const capitalized = splitted[0].toUpperCase();
      const arr2 = capitalized + rest.join("");
      result.push(arr2);
    }

    const finalR = result.join(" ");
    return finalR;
  }

  console.log("Ex-6---------");
  console.log(titleCase("I'm a little tea pot")); // Expected: "I'm A Little Tea Pot"
  console.log(titleCase("sHoRt AnD sToUt")); // Expected: "Short And Stout"
  console.log("----------");
}


// 7. Falsy Value Filter
// - Define a function with one array parameter and create a new array for the result.
// - Keep only truthy values from the input array and return the filtered array; log sample results.
{
  function bouncer(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  }

  console.log("Ex-7---------");
  console.log(bouncer([7, "ate", "", false, 9])); // Expected: [7, "ate", 9]
  console.log(bouncer([false, null, 0, NaN, undefined, ""])); // Expected: []
  console.log("----------");
}


// 8. Unique Array Union
// - Define a function that accepts any number of arrays as arguments.
// - Combine their values in order, keeping only the first occurrence of each value; log sample results.
{
  function uniteUnique(...arrays) {
    const newArr = [];

    for (const array of arrays) {
      for (const subArr of array) {
        if (!newArr.includes(subArr)) {
          newArr.push(subArr);
        }
      }
    }

    return newArr;
  }

  console.log("Ex-8---------");
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // Expected: [1, 3, 2, 5, 4]
  console.log(uniteUnique(["a", "b"], ["b", "c"])); // Expected: ["a", "b", "c"]
  console.log("----------");
}


// 9. Random Password Generator
// - Define a function with one parameter for the desired password length.
// - Randomly select characters from the provided character pool until the password reaches that length, then return it; log a generated password.
{
  function generatePassword(digits) {
    const passPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let validPass = "";

    while (validPass.length < digits) {
      const randomized = Math.floor(Math.random() * passPool.length);
      validPass += passPool[randomized];
    }

    return validPass;
  }

  console.log("Ex-9---------");
  const password = generatePassword(12);
  console.log("Generated password: " + password); // Expected: a random 12-character password
  console.log("----------");
}


// 10. Password Strength Checker
// - Define a function with one password parameter and check its length, letter case, digits, and special characters.
// - Count the satisfied conditions and return "weak", "medium", or "strong"; log examples for each level.

{
  function checkStrength(password) {
    const cond1 = password.length >= 8;
    const cond2 = /[A-Z]/.test(password) && /[a-z]/.test(password);
    const cond3 = /\d/.test(password);
    const cond4 = /[!@#$%^&*]/.test(password);
    const condSet = [cond1, cond2, cond3, cond4];
    const newCondSet = [];

    for (const cond of condSet) {
      if (cond) {
        newCondSet.push(cond);
      }
    }

    if (newCondSet.length < 2) {
      return "weak";
    } else if (newCondSet.length === 2 || newCondSet.length === 3) {
      return "medium";
    } else if (newCondSet.length === 4) {
      return "strong";
    }
  }

  console.log("Ex-10---------");
  console.log(checkStrength("abc")); // Expected: weak
  console.log(checkStrength("Password1")); // Expected: medium
  console.log(checkStrength("Password1!")); // Expected: strong
  console.log("----------");
}


// 11. Sum All Numbers in a Range
// - Define a function with one array parameter containing two numbers, then identify the smaller and larger values.
// - Use a while loop to add every number from the smaller value through the larger value, inclusive, and return the total.
{
  function sumAll(arr) {
    let min;
    let max;

    if (arr[0] > arr[1]) {
      min = arr[1];
      max = arr[0];
    } else {
      min = arr[0];
      max = arr[1];
    }

    let sum = 0;
    let current = min;

    while (current <= max) {
      sum += current;
      current++;
    }

    return sum;
  }

  console.log("Ex-11---------");
  console.log(sumAll([1, 4])); // Expected: 10
  console.log(sumAll([4, 1])); // Expected: 10
  console.log("----------");
}



// 13. DNA Pairing
// - Define a function with one DNA string parameter and inspect each nucleotide in the string.
// - Pair T with A, A with T, C with G, and G with C, then return an array containing each nucleotide pair.
{
  function pairElement(str) {
    const paired = [];
    const analyze = str.split("");

    for (const letter of analyze) {
      const subPaired = [];

      if (letter === "T") {
        subPaired.push("T");
        subPaired.push("A");
      } else if (letter === "A") {
        subPaired.push("A");
        subPaired.push("T");
      } else if (letter === "C") {
        subPaired.push("C");
        subPaired.push("G");
      } else if (letter === "G") {
        subPaired.push("G");
        subPaired.push("C");
      }

      paired.push(subPaired);
    }

    return paired;
  }

  console.log("Ex-13---------");
  console.log(pairElement("ATCGA")); // Expected: [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]
  console.log(pairElement("TTG")); // Expected: [["T", "A"], ["T", "A"], ["G", "C"]]
  console.log("----------");
}
