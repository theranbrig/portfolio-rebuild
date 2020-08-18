<div class="hero-section">
    <div class="hero-image-container">
        <img class="hero-image" src="https://images.unsplash.com/photo-1579620586506-fb462d7443fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2294&q=80" alt="group of windows"/>
    </div>
    <div class="hero-text-container">
        <h1 class="hero-text">ES6 Object and Array Methods</h1>
    </div>
</div>

Below are a list of JavaScript features and methods that I wish I knew about when I started my coding journey (or they were not available in ES5 when I began my foray into coding.) I hope you can learn something new, and can use them in your JavaScript journey.

## Object Destructuring

When working with large JSON data or large objects, it can often be difficult to break down the data, especially once you get into large nested data objects like a call to a weather API. When you do so, you can end up getting large back nested objects and arrays like the location information, current weather, forecast, etc. This can be difficult to manage and you end up with large dot notation chains to access object properties.

Object destructuring can help to alleviate some of those concerns. Imagine you get a JSON data object back like muppets below. Rather than having to call muppets.bert.age you can instead use object destructuring to call each name. By calling const { bert, ernie, grover, elmo } = muppets you can now call each nested object as it’s own variable.

```javascript
const muppets = {
  bert: {
    age: 35,
    color: 'yellow',
    likes: ['quiet', 'unibrows'],
  },
  ernie: {
    age: 35,
    color: 'yellow',
    likes: ['baths', 'rubber ducks'],
  },
  grover: {
    age: 12,
    color: 'blue',
    likes: ['superheroes', 'capes'],
  },
  elmo: {
    age: 8,
    color: 'red',
    likes: ['fun', 'hugging'],
  },
};

const { bert, ernie, grover, elmo } = muppets;

console.log(bert.age); // 35
console.log(grover.likes); // [ 'superheroes', 'capes' ]
```

## New Sets

I know when I first started using Code Wars sites, about half of them asked you to find unique data from arrays or strings. For example, does the following string “alphabet” contain all unique characters? Though there are numerous ways of attacking a problem like this, like putting the letters into an ordered array, sorting them, and comparing all characters to the previous index, this gets a bit tiresome and makes for lengthy functions.

That is where Set comes to the rescue. It takes and filters out any duplicate data, and returns a new set that has all unique data.

```javascript
const string1 = 'Alphabet';
const string2 = 'alphabet';
const array = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

console.log(new Set(string1)); // Set { 'A', 'l', 'p', 'h', 'a', 'b', 'e', 't' }
console.log(new Set(string2)); // Set { 'a', 'l', 'p', 'h', 'b', 'e', 't' }
console.log(new Set(array)); // Set { 1, 2, 3, 4 }
```

- Note that in the above example string1 has an “A” and an “a” which are distinct characters in JavaScript.

## Spread Operator

This one has become one of my favorites to use recently. The spread operator is written as three little dots ... and they do quite a bit of work. This has become especially useful when you are working with immutable.

You can easily turn a string into an array (useful on those algorithm sites and data manipulation) or used in combination with Set to get those unique characters into an array.

```javascript
const string = 'This is a string';

const stringArray = [...string];
console.log(stringArray); // [ 'T','h','i','s',' ','i','s',' ','a',' ','s','t','r','i','n','g' ]

const uniqueCharacterArray = [...new Set(string)];
console.log(uniqueCharacterArray); // [ 'T', 'h', 'i', 's', ' ', 'a', 't', 'r', 'n', 'g' ]
```

The other common use that I have found is with objects. This one is particularly helpful when you want to update part of the data within an object. Here the spread operator works to to copy the properties over from the previous object, and then you can simply change the properties while keeping the rest of the data the same.

```javascript
const person = {
  firstName: 'john',
  lastName: 'smith',
  age: 24,
  hairColor: 'brown',
  eyeColor: 'hazel',
};

const newPerson = {
  ...person,
  age: 25,
  hairColor: 'pink',
};

console.log(newPerson); // { firstName: 'john', lastName: 'smith', age: 25, hairColor: 'pink', eyeColor: 'hazel' }
```

## Array Methods

Below is a list of methods that I commonly use. ES6 has made working with immutable data much easier and the following are some of the common ones that I have found useful in my day-to-day programming.

### .map

This one gets used almost daily by me in React development. It returns a new array that you can work with and change, while keeping your original data intact.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const biggerNumbers = numbers.map((num) => num + 10);

console.log(biggerNumbers); // [ 11, 12, 13, 14, 15, 16 ]
console.log(numbers); //[ 1, 2, 3, 4, 5, 6 ]
```

### .filter

This one basically does as it says. It filters out data and returns a new array based upon whatever criteria you set up for it.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const numbersGreaterThanThree = numbers.filter((num) => num > 3);

console.log(numbersGreaterThanThree); // [4,5,6]
```

### .reduce

I use this one a little less often than .filter and .map but it is quite useful whenever you need to add up some items or find totals. It is one of my go-tos when creating a shopping cart and I need to add up to get a sum.

```javascript
const shoppingCartItemPrices = [23, 43, 52, 67, 54];

const shoppingCartTotal = shoppingCartItemPrices.reduce((total, item) => total + item);

console.log(shoppingCartTotal); //239
```

### .some

This one is helpful to check for the truthiness of an array. It checks to see if _at least one item_ in an array passes your set criteria. This method does not return a new array, but rather simply checks for true or false.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.some((num) => num > 7)); // false
console.log(numbers.some((num) => num > 3)); // true
```

### .every

Like the .some method, but this one checks that _every item_ in the array is true under the criteria that you have set. This one again simply returns true or false.

```javascript
const numbers = [5, 10, 15, 20, 25, 30];

console.log(numbers.every((num) => num >= 10)); // false
console.log(numbers.every((num) => num >= 5)); // true
```

## Thank You

Thank you for taking the time to read through this little list of JavaScript tips. I hope you found something useful that you can use in your code and maybe make your life a bit easier.

Check out more of my articles, projects, and other content at [theran.dev](https://theran.dev/blog) or on [twitter](https://twitter.com/wellBuilt).

