'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  orderDelivery: function ({ mainIndex, startIndex, time, add }) {
    console.log(
      `Order Received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:33',
  add: 'home',
  mainIndex: 1,
  startIndex: 2,
});

const arr = [1, 2, 3];
const badNewArr = [0, arr[0], arr[1], arr[2]];
const goodNewArr = [0, ...arr];
console.log(arr);
console.log(badNewArr);
console.log(goodNewArr);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

const newRestaurant = {
  founded: 1998,
  founder: 'Steve',
  ...restaurant,
};

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Pizza';
console.log(restaurantCopy.name);
console.log(restaurant.name);

const [a, b, ...others] = [1, 2, 3, 4];
console.log(a, b, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
var i = 1;
for (const name of game.scored) {
  console.log(`Goal ${i}: ${name}`);
  i++;
}

var sum = 0;
var j = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
  j++;
}
const avg = sum / j;
console.log(avg);

for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game[key] || 'draw'}: ${value}`);
}
let scorers = {};
for (const name of game.scored) {
  if (scorers[name]) scorers[name]++;
  else scorers[name] = 1;
}
console.log(scorers);*/
/*
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
console.log(players1, players2);
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1);

const allPlayers = [...players1, ...players2];
const finalPlayers = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...names) {
  console.log(names);
  console.log(names.length);
};

team1 > team2 && console.log('team2');
team2 > team1 && console.log('team1');
*/
const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'spaghetti']);
console.log(ordersSet);
console.log(new Set('Chris'));

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const gameSet = new Set(gameEvents.values());
const gameArray = [...gameSet];
console.log(gameArray);
gameEvents.delete(64);
const avg = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes`);

for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[First Half] ${key}: ${value}`);
  } else {
    console.log(`[Second Half] ${key}: ${value}`);
  }
}

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
