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
