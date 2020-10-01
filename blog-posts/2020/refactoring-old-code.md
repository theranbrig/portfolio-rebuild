Have you have ever gone back to the first code you wrote and gave it a look?

It's kind of like looking at your middle school year book photos. It's still you, but kind of younger, less advanced, and more awkward version. Old code is kind of the puka shell necklace of those photos.

However, unlike those photos that are engraved into the annals of history, with code we have the opportunity to go back and optimize it. We can improve upon our past selves, and better yet, learn from it. I decided to go back to some JavaScript exercise I did when I first used. They are just basic algorithms like reverse a string, but I wanted to see what I could do to improve them and see how I would optimize them as a more seasoned developer.

Check out the old spaghetti of long, and see how we could improve this code with a bit more experience under my belt.

## 1 - isVowel

### Algorithm

```js
// Define a function named isVowel that takes one argument
//    letter (string)
//
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
//
// Treat 'y' as a consonant.
```

### Original

```js
const isVowel = (letter) => {
  var checkLetter = letter.toUpperCase();
  switch (checkLetter) {
    case 'A':
      return true;
      break;
    case 'E':
      return true;
      break;
    case 'I':
      return true;
      break;
    case 'O':
      return true;
      break;
    case 'U':
      return true;
      break;
    default:
      return false;
      break;
  }
};
```

### Refactor

The absolute horror, a switch statement. They of course have their place, but in this case, this problem could definitely be checked with a regex. I know that I always have to look up the syntax, and I did for this one too, but the key here is knowing that there is a better and more efficient way of running your code. Looking up syntax is fine, knowing what to look for is the key.

```js
const isVowel = (letter) => {
  return /^[aeiou]$/i.test(letter);
};
```

Or if you are opposed to regex, think about how you would break this down into an array, or string method. For example we could put our testable letters into an array, then we just need to check if that value is found in the array.

```js
const isVowel = (letter) => {
  return ['a', 'e', 'i', 'o', 'u'].some((vowel) => vowel === letter);
};
```

## 2- largestOfThree

### Algorithm

```js
// Define a function named largestOfThree which takes three arguments
//    value1 (number)
//    value2 (number)
//    value3 (number)
//
// Return the largest argument by value
```

### Original

```js
const largestOfThree = (value1, value2, value3) => {
  if (value1 > value2 && value1 > value3) {
    return value1;
  } else if (value2 > value1 && value2 > value3) {
    return value2;
  } else {
    return value3;
  }
};
```

### Refactor

Much like above, I thought that a chain of if and if else statements was the way to go. And who can blame old me, it worked, just like my middle school Birkenstocks. But we can do better.

The main problem with my old code is that it just uses the numbers and I have to do all of the comparisons myself. I had to think through every case, rather than letting the language and programming do the work for me.

Also when refactoring we should think about if our functions have to scale. In this case what if we have four values, or 4000. I don't think 4000 else if statements would be ideal. Let JavaScript do the work for you. Often times when we start, we aren't familiar with the vast array of methods (pun intended) that we can take advantage of. Often research will yield better results than a series of if else statements.

```js
const largestOfThree = (value1, value2, value3) => {
  return Math.max(value1, value2, value3);
};
```

## 2- longestOfThree

### Algorithm

```js
//Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
```

### Original

```js
const longestOfThree = (value1, value2, value3) => {
  if (value1.length > value2.length && value1.length > value3.length) {
    return value1;
  } else if (value2.length > value1.length && value2.length > value3.length) {
    return value2;
  } else {
    return value3;
  }
};
```

### Refactor

In this case, my if else statement might not be the worst thing. However, again we have a problem with scale. Easy to work with for a small sample size, but it doesn't scale. What if I have hundreds of these. I need to find a way to make it more efficient and allow for more input. In this case an array of objects would probably make more sense. Though to solve this specific algorithm, it would not be shorter, it would allow for more flexibility and future proof as my data set grows.

```js
const longestOfThree = (...arguments) => {
  const createObject = (str) => {
    return { string: str, strLength: str.length };
  };
  const sortedArguments = arguments
    .map((arg) => createObject(arg))
    .sort((a, b) => b.strLength - a.strLength);
  return sortedArguments[0].string;
};
```

In this case, the function is the same length, but it does scale better if we add a more arguments.

We have refactored it to allow for any number of arguments, rather than just the three that we were taking in.  In addition, but iterating over the items we can scale this and get rid of the if and if else statements.

There are definitely other methods that we could do to refactor this even further. We could have the return chain with the 0 array index and the string property, but sometimes it is better to have your code broken up to be more readable for other developers.

When refactoring your code you should be thinking about three things.  It should be a simpler way of doing the same action, easier to read and convey the message of your code, and it should scale for growth.  Don't be afraid to go back.  Look at what you have learned, and apply it to see how you would change your first code.

We're not still rocking the bootcut jeans, it is also never to late to refactor your old code.
