
## JavaScript Tips for an ES6 World

Below are a list of JavaScript features and methods that I wish I knew about when I started my coding journey (or they were not available in ES5 when I began my foray into coding.) I hope you can learn something new, and can use them in your JavaScript journey.

![Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/11376/0*HJrK5zyKTx5mdOck)

## Object Destructuring

When working with large JSON data or large objects, it can often be difficult to break down the data, especially once you get into large nested data objects like a call to a weather API. When you do so, you can end up getting large back nested objects and arrays like the location information, current weather, forecast, etc. This can be difficult to manage and you end up with large dot notation chains to access object properties.

Object destructuring can help to alleviate some of those concerns. Imagine you get a JSON data object back like muppets below. Rather than having to call muppets.bert.age you can instead use object destructuring to call each name. By calling const { bert, ernie, grover, elmo } = muppets you can now call each nested object as it’s own variable.

 <iframe src="https://medium.com/media/1242a5e6f84d591d7123bbe61285c6e2" frameborder=0></iframe>

## New Sets

I know when I first started using Code Wars sites, about half of them asked you to find unique data from arrays or strings. For example, does the following string “alphabet” contain all unique characters? Though there are numerous ways of attacking a problem like this, like putting the letters into an ordered array, sorting them, and comparing all characters to the previous index, this gets a bit tiresome and makes for lengthy functions.

That is where Set comes to the rescue. It takes and filters out any duplicate data, and returns a new set that has all unique data.

 <iframe src="https://medium.com/media/70bb7e4e9fbe867c857fe5989440596b" frameborder=0></iframe>

* Note that in the above example string1 has an “A” and an “a” which are distinct characters in JavaScript.

## Spread Operator

This one has become one of my favorites to use recently. The spread operator is written as three little dots ... and they do quite a bit of work. This has become especially useful when you are working with immutable.

You can easily turn a string into an array (useful on those algorithm sites and data manipulation) or used in combination with Set to get those unique characters into an array.

 <iframe src="https://medium.com/media/f6579bbc1a791d6936c45afd0ce943d4" frameborder=0></iframe>

The other common use that I have found is with objects. This one is particularly helpful when you want to update part of the data within an object. Here the spread operator works to to copy the properties over from the previous object, and then you can simply change the properties while keeping the rest of the data the same.

 <iframe src="https://medium.com/media/a881897ae27be3052cfb7a92ebf2c55c" frameborder=0></iframe>

## Array Methods

Below is a list of methods that I commonly use. ES6 has made working with immutable data much easier and the following are some of the common ones that I have found useful in my day-to-day programming.

### .map

This one gets used almost daily by me in React development. It returns a new array that you can work with and change, while keeping your original data intact.

 <iframe src="https://medium.com/media/89faf1a29817bc09db649c260f7a7418" frameborder=0></iframe>

### .filter

This one basically does as it says. It filters out data and returns a new array based upon whatever criteria you set up for it.

 <iframe src="https://medium.com/media/e1fe278b276979e226d6f895edffb1bb" frameborder=0></iframe>

### .reduce

I use this one a little less often than .filter and .map but it is quite useful whenever you need to add up some items or find totals. It is one of my go-tos when creating a shopping cart and I need to add up to get a sum.

 <iframe src="https://medium.com/media/584b28dab92d278e25260ccb478ce14f" frameborder=0></iframe>

### .some

This one is helpful to check for the truthiness of an array. It checks to see if *at least one item* in an array passes your set criteria. This method does not return a new array, but rather simply checks for true or false.

 <iframe src="https://medium.com/media/f6c84eab34174868ca8f114b27f9828b" frameborder=0></iframe>

### .every

Like the .some method, but this one checks that *every item* in the array is true under the criteria that you have set. This one again simply returns true or false.

 <iframe src="https://medium.com/media/ba68c68d39e8067fc8129c498c78e0b6" frameborder=0></iframe>

## Thank You

Thank you for taking the time to read through this little list of JavaScript tips. I hope you found something useful that you can use in your code and maybe make your life a bit easier. Check out my work at [theran.co](https://theran.co) or check me out on [twitter](https://twitter.com/wellBuilt). Happy Coding!
