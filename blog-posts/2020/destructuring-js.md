Object destructuring is one of those terms that sounds a lot fancier than what it really is. Although from a performance side, in most applications or projects, it won't make a noticeable difference, it will make a huge difference in you code from a readability point of view. When working in a team this is extremely important, as your code should convey clear meaning and flow.

## Object Destructuring

The basics of destructuring are that you can pull apart an object, or array, and use the parts as their own variables. Let's look at a basic example.

```javascript
// Basic javascript Object
const muppet = {
  name: 'Grover',
  color: 'blue',
  address: '123 Sesame Street',
  nicknames: ['Super Grover', 'The Blue Monster'],
};

const { name, color } = muppet;

console.log(name); // Grover
console.log(color); // blue
```

Rather than having to use `muppet.name` or `muppet.color` you now simply have them as variables `name` and `color`. You can continue to access the other properties like address by simply adding it to your destructuring statement. You can start to see how this makes your code more readable.

For a simple object like the one above it might not be the biggest deal to destructure your object. After all we are only going one level deep.

But let's say we have more complicated data returned from an API. That is where this really comes in handy.

Let's say we have following data returned from an API and I want to print out a string with the score:

```javascript
const game = {
  location: 'Minneapolis',
  attendance: 15000,
  teams: {
    home: { homeName: 'Minnesota Golden Gophers', homePoints: 110 },
    away: { awayName: 'Wisconsin Badgers', awayPoints: 50 },
  },
};
```

To print the score we need:

```javascript
const scoreString = `${game.teams.home.homePoints} to ${game.teams.away.awayPoints}`;
```

Not the easiest to read.

Now let's say that we need the home and away team data. Access that data in the traditional object notation methods is not very DRY. Rather than accessing this via `game.teams.home.homeName` or `game.team.away.awayPoints` we can destructure it.

```javascript
const { homeName, homePoints } = game.teams.home;
const { awayName, awayPoints } = game.teams.away;

const scoreString = `${homePoints} to ${awayPoints}`;
```

Not only did we shorten our `scoreString`, but we also have access to all of the other variables as we need them. In this example I showed destructuring with all of the variables pulled out. In reality you only need to destructure the variables that are needed.

Order does not matter, but the name does as it is accessing the name key. To rename them you would do that in the following way:

```javascript
const { homeName: hName, homePoints: hPoints } = game.teams.home;
```

Your variables are now available as `hName` and `hPoints`. Though this is not a great use case in this example, it gives you an idea of how to use it, especially once you start to work with more complex data structures.

You might already be doing this when you write functions. If you pass in a object as parameters, you can destructure the parameters:

Take the following:

```javascript
const muppet = {
  name: 'Grover',
  color: 'blue',
  address: '123 Sesame Street',
  nicknames: ['Super Grover', 'The Blue Monster'],
};

function printMuppetInformation(muppet) {
  console.log(`${muppet.name} lives at ${muppet.address}.`);
}
```

Now with destructuring we can make the syntax more readable:

```javascript
function printMuppetInformation({ name, address }) {
  console.log(`${name} lives at ${address}.`);
}
```

## Arrays

The same principle can also be applied to arrays if needed. Though I would not recommend doing so with large arrays.

Here is a slightly different game structure:

```javascript
const game = {
  location: 'Minneapolis',
  attendance: 15000,
  teams: [
    { name: 'Minnesota Golden Gophers', points: 110 },
    { name: 'Wisconsin Badgers', points: 50 },
  ],
};
```

Now we can use array destructuring:

```javascript
const [home, away] = game.teams;
```

This differs a bit from array destructuring in that you can assign any name to the variables in array destructuring, but the order is important as the first item will access the `[0]` item, the second will access `[1]` and so on.

Array destructuring is something not typically done with long arrays of an unknown length. However if you do have a long array and only want certain items at a known index you can use the following syntax.

```javascript
const items = [1, 2, 3, 4, 5, 6];
const [item1, item2, ...remainingItems] = items;

console.log(item1); // 1
console.log(remainingItems); // [3,4,5,6]
```

This usage is not as common, but it does have use cases in certain situations.

There is a lot more to touch on like destructuring assignments and mixed destructuring, but it gives you a basic blueprint for more readable javascript.
