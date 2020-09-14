Immutability sounds like one of those things that is only found on coding interviews or multiple choice development quizzes. However, it is actually quite fundamental to the basics of programming. It is something that you might be putting into practice without even knowing. But today, we are going to dive into what immutability is in JavaScript and how you can put it into practice.

First, what is immutability? It is one where the functions or methods do not change the original values which were put into it.

## The Basics

Take for example an array:

```js
const characters = ['Big Bird', 'Grover', 'Elmo', 'Oscar'];
```

### Pop

Let's say that Oscar leaves the group. The most common method for removing this would be to use the `pop` method.

```js
characters.pop();
console.log(characters); // ['Big Bird', 'Grover', 'Elmo']
```

Now this might be great and all is well, but now what if I want to compare the old data to the new data. I want to see who is missing from the list. Now that `characters` has been reassigned, I can't do so. That is why it is better to work with data that is immutable. A cleaner method would to be to create a new array using the the slice method.

```js
const newCharacters = characters.slice(0, -1);

//or

const newCharacters = characters.slice(0, characters.length - 1);
```

We get the same results, but now have access to both the old and new data. We also avoid side effects where we might send the wrong modified data through functions resulting in a whole host of problems. Working with immutable data is like making a copy of important documents to hand in to others, rather than giving them the original. It is safer in the long run.

### Shift

If we want to remove the first character just modify your `slice` method.

```js
const newCharacters = characters.slice(0, 1);
```

### Push

Let's say that we want to add another member to the group. Instead of using push, you can use the spread operator.

```js
const newCharacters = [...characters, 'Cookie Monster'];
```

### Unshift

To add a new member at the beginning, we need to simply add the spread operator at the end.

```js
const newCharacters = ['Cookie Monster', ...characters];
```

## Other Methods

One of the things that you can see here is that a pattern is developing, we are assigning our data to new variables. Although from a performance standpoint this is a bit more expensive. The benefits of more well-defined code and fewer opportunities for side effects, outweighs that modest decrease in performance.

Let's take the following more complex example.

```js
const characters = [
  { name: 'Big Bird', color: 'yellow', address: 'Sesame Street' },
  { name: 'Grover', color: 'blue', address: 'unknown' },
  { name: 'Elmo', color: 'red', address: 'unknown' },
  { name: 'Oscar', color: 'green', address: 'Sesame Street' },
];
```

If we want to update the property for each item in the array, we might want to use a loop. In this case we could use a good old fashion `forEach` on it.

```js
characters.forEach((character) => {
  character.address = 'Sesame Street';
});
```

But now what if we want to compare the characters who have moved, to those who have stayed in the same place. This is why it is typically safer to `map` your data.

### Map

```js
const updatedAddressCharacters = characters.map((character) => {
  return { ...character, address: 'Sesame Street' };
});
```

The same goes if we want to filter out items from the original list.


### Filter

```js
const unknownAddressesCharacters = characters.filter((character) => {
  return character.address === 'unknown';
});
```

In both of these cases we are assigning our modified data to new arrays, rather than overwriting the old data. Looking over this we are gaining several advantages.

There are other methods that can be used much in the same way. Often this same method is done with `sort`, `reverse`, or `reduce`.  Getting used to this pattern is one that will make your code cleaner and have several noticeable benefits:

1. **No Side Effects** - In these simple examples we are doing relatively simple actions, however if you are doing calculations or other complex functions before returning, in a `forEach` loop you have the possibility of overwriting data, and leading to side effects in other functions that also might rely on that original array.

2. **Reusable Code** - Your code is more reusable. Working with the immutable data, means that you can apply several methods to the original, and always have a reference back to it. You always have that original reference point.  This includes chaining together and combining methods and functions with these new and old data sources.

3. **Easy Data Comparisons** - By having two different data sets it is much easier to parse differences in your data.  This is something that is very handy, especially as your applications and data sets grow.

4. **Explicit Code** - Running a `forEach` loop over an array, does not really explain what is happening. However, by reassigning our data to new variables, we keep the original, while and have a new variable that clearly conveys it's meaning. Remember that good code clearly conveys what is happening, especially when working in teams.

Working with immutable data is something that has greatly benefited my React and Vanilla JavaScript code. Hopefully some of this can help you as well.
