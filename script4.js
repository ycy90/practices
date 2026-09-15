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


/*

Exercise 3 — Football Player Bonus Calculator

Create a function called calculateBonus that receives three parameters:

- matches
- goals
- assists

The player's bonus is calculated based on his average goal contributions
(goals + assists) per match.

- If the average goal contribution per match is greater than 1,
  the player earns €10,000 for each goal contribution.
- Otherwise, the player earns €5,000 for each goal contribution.
- Calculate the total bonus earned by the player.
- Log the total bonus.

Example:

calculateBonus(20, 15, 10);
*/


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