/*
Exercise 1 — Lottery Number Checker

Create an array containing six lottery numbers selected by the user.

- Generate six unique random numbers between 1 and 49.
- Store the generated numbers in a separate array.
- Compare the user's numbers with the generated numbers.
- Store all matching numbers in a new array.
- Log the user's numbers, the drawn numbers, the matching numbers,
  and the total number of matches.
*/

function lotoNumbers(userNumbers) {
  const winnerNumbers = [];
  while (winnerNumbers.length < 6) {
    const generateNumbers = Math.floor(Math.random() * 49 + 1)
    if(!winnerNumbers.includes(generateNumbers)) {  
    winnerNumbers.push(generateNumbers);
} }

let counter = 0;
let matched = [];

for(const number of  userNumbers) {
  if(winnerNumbers.includes(number)) {
    counter++;
    matched.push(number);
  }

}
 if(counter === 6) {
    return winnerNumbers + " You hit the Jackpot";
  }  else if(counter === 0){
    return winnerNumbers + " No Match"; }
    else {
    return winnerNumbers + " You matched " + counter + " numbers." + "Matched numbers are: " + matched; 
  } }


console.log(lotoNumbers([6,7,13,21,20,35])); 

/*
Exercise 2 — Football Group Draw

Create four arrays representing four different pots.

Each pot should contain four football teams.

- Create four groups: Group A, Group B, Group C, and Group D.
- Each group must contain exactly four teams.
- Each group must receive exactly one team from each pot.
- Select the teams randomly.
- Once a team has been selected, it cannot be selected again.
- Continue the draw until all teams have been assigned to a group.
- Log the four completed groups.

Example output:

Group A: Team 3, Team 6, Team 12, Team 14
Group B: Team 1, Team 8, Team 10, Team 15
Group C: Team 4, Team 5, Team 9, Team 16
Group D: Team 2, Team 7, Team 11, Team 13
*/

console.log("------------------------");


function drawPot(pot1, pot2, pot3, pot4) {
const groupA = [];
const groupB = [];
const groupC = [];
const groupD = [];


// POT 1 

while (groupA.length < 1) {  
  const generateNumbers = Math.floor(Math.random() * pot1.length)
    groupA.push(pot1[generateNumbers]);
    pot1.splice(generateNumbers, 1);
}

while (groupB.length < 1) {  
  const generateNumbers = Math.floor(Math.random() * pot1.length)
    groupB.push(pot1[generateNumbers]);
    pot1.splice(generateNumbers, 1);
}

while (groupC.length < 1) {  
  const generateNumbers = Math.floor(Math.random() * pot1.length)
     groupC.push(pot1[generateNumbers]);
    pot1.splice(generateNumbers, 1);
}

while (groupD.length < 1) {  
const generateNumbers = Math.floor(Math.random() * pot1.length)
     groupD.push(pot1[generateNumbers]);
    pot1.splice(generateNumbers, 1);
}

//POT2 

while (groupA.length < 2) {  
  const generateNumbers = Math.floor(Math.random() * pot2.length)
    groupA.push(pot2[generateNumbers]);
    pot2.splice(generateNumbers, 1);
}


while (groupB.length < 2) {  
  const generateNumbers = Math.floor(Math.random() * pot2.length)
    groupB.push(pot2[generateNumbers]);
    pot2.splice(generateNumbers, 1);

}


while (groupC.length < 2) {  
const generateNumbers = Math.floor(Math.random() * pot2.length)
    groupC.push(pot2[generateNumbers]);
    pot2.splice(generateNumbers, 1);
}

while (groupD.length < 2) {  
const generateNumbers = Math.floor(Math.random() * pot2.length)
    groupD.push(pot2[generateNumbers]);
    pot2.splice(generateNumbers, 1);
}

//POT3

while (groupA.length < 3) {  
const generateNumbers = Math.floor(Math.random() * pot3.length)
    groupA.push(pot3[generateNumbers]);
    pot3.splice(generateNumbers, 1);
}

while (groupB.length < 3) {  
const generateNumbers = Math.floor(Math.random() * pot3.length)
    groupB.push(pot3[generateNumbers]);
    pot3.splice(generateNumbers, 1);
}

while (groupC.length < 3) {  
const generateNumbers = Math.floor(Math.random() * pot3.length)
    groupC.push(pot3[generateNumbers]);
    pot3.splice(generateNumbers, 1);
}

while (groupD.length < 3) {  
const generateNumbers = Math.floor(Math.random() * pot3.length)
    groupD.push(pot3[generateNumbers]);
    pot3.splice(generateNumbers, 1);
}

//POT4

while (groupA.length < 4) {  
const generateNumbers = Math.floor(Math.random() * pot4.length)
    groupA.push(pot4[generateNumbers]);
    pot4.splice(generateNumbers, 1);
}


while (groupB.length < 4) {  
const generateNumbers = Math.floor(Math.random() * pot4.length)
    groupB.push(pot4[generateNumbers]);
    pot4.splice(generateNumbers, 1);
}

while (groupC.length < 4) {  
const generateNumbers = Math.floor(Math.random() * pot4.length)
    groupC.push(pot4[generateNumbers]);
    pot4.splice(generateNumbers, 1);
}

while (groupD.length < 4) {  
const generateNumbers = Math.floor(Math.random() * pot4.length)
    groupD.push(pot4[generateNumbers]);
    pot4.splice(generateNumbers, 1);
}

const final = `Group A: ${groupA}, Group B: ${groupB}, Group C: ${groupC}, Group D: ${groupD}`;
return final;
}


console.log(drawPot(["Barcelana", "Real Madrid", "Bayern", "Arsenal"],
  ["Inter", "Atletico", "Paris", "Liverpool"],
  ["Chelsea", "Dortmund", "Napoli", "Lyon"],
  ["Manchester", "Milan", "Juventus", "Beşiktaş"]));



console.log("--------------------------");

// REFACTORED SOLUTION 

function drawPot(pot1, pot2, pot3, pot4) {
const groupA = [];
const groupB = [];
const groupC = [];
const groupD = [];

const pots = [pot1, pot2, pot3, pot4];
const groups = [groupA, groupB, groupC, groupD];

for(pot of pots) {
  for(group of groups ) {
    const generateNumbers = Math.floor(Math.random() * pot.length);
    group.push(pot[generateNumbers]);
    pot.splice(generateNumbers, 1);
  }

}

const final = `Group A: ${groupA}, Group B: ${groupB}, Group C: ${groupC}, Group D: ${groupD}`;
return final;
}


console.log(drawPot(["Barcelana", "Real Madrid", "Bayern", "Arsenal"],
  ["Inter", "Atletico", "Paris", "Liverpool"],
  ["Chelsea", "Dortmund", "Napoli", "Lyon"],
  ["Manchester", "Milan", "Juventus", "Beşiktaş"]));

/*
Exercise 3 — Football Player Bonus Calculator

Create a function called salaryCalculator that receives five parameters:

- matches
- goals
- assists
-yellow cards
- red cards

The player's bonus is calculated based on his average goal contributions
(goals + assists) per match.

- If the average goal contribution per match is greater than or equal 1,
  the player earns €10,000 for each goal contribution.
- Otherwise, the player earns €5,000 for each goal contribution.
-If the average number of red cards per match is 0.10 or higher, deduct €20,000 from the bonus.
-Deduct €2,500 for each yellow card.
-Calculate the player's final total bonus after all deductions.
-Log the final total bonus.

Example:

calculateBonus(20, 15, 10, 3, 10);

*/

function salaryCalculator(matches, goals, assists, yellow, red) {

  const bonusFormula = (goals + assists) / matches;
  const penaltyPri = red / matches;
  const penaltyBig = 20000;
  const contribution = goals + assists;
  const bonus = contribution * 10000; 
  const bonus2 = contribution * 5000;
  const penaltySec = yellow * 2500;
  
0  
  if(bonusFormula >= 1 && penaltyPri < 0.10) {
    return bonus - penaltySec
  } else if(bonusFormula >= 1 && penaltyPri >= 0.10) {
    return bonus - penaltyBig - penaltySec;
  } else if(bonusFormula < 1 && penaltyPri >= 0.10) {
    return bonus2 - penaltyBig - penaltySec;
  } else if(bonusFormula < 1 && penaltyPri < 0.10) {
    return bonus2 - penaltySec;
  }
   
}

console.log(salaryCalculator(40,20,10,15,5));
console.log(salaryCalculator(20,12,10,7,1));



/*
Exercise 4 — Character Battle Simulator

Create a character object with the following properties:

{
  health: 0,
  mana: 0,
  hit: 0
}

Create an enemy object with:

{
  health: 100
}

Create a function called battle that receives two objects:

battle(character, enemy)

The character has a base attack damage of 5.

Calculate additional attack damage based on the character's stats.

For health:
- Above 50: +2 damage
- Between 20 and 50: +1 damage
- Below 20: no additional damage

For mana:
- Above 50: +3 damage
- Between 20 and 50: +2 damage
- Below 20: no additional damage

For hit:
- Above 50: +2 damage
- Between 20 and 50: +1 damage
- Below 20: no additional damage

Calculate the character's total damage per attack.

The character should continue attacking until the enemy's health
reaches 0 or below.

After every attack:
- Reduce the enemy's health by the calculated damage.
- Count the number of turns.

When the enemy is defeated, log:

"Enemy defeated in [turns] turns."
*/