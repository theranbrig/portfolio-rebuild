<div class="hero-section">
    <div class="hero-image-container">
        <img class="hero-image" src="https://images.unsplash.com/photo-1510222755157-fc26750f1199?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="blurred chalkboard"/>
    </div>
    <div class="hero-text-container">
        <h1 class="hero-text">How to build a calculator with React Hooks and the React Context API</h1>
    </div>
</div>

Author: Theran Brigowatz

Originally Published March 15, 2019 for [FreeCodeCamp.org](https://medium.com/free-code-camp/building-a-calculator-with-react-hooks-and-react-context-api-debcabbc5f54)

If you are like me, when you first heard of React Hooks you were maybe a little bit ambivalent or confused by what all the hype was about. What’s the big deal if I don’t have to write out class components anymore? However, once I dove in and got to using them, I couldn’t really see myself going back to my pre-Hook days. In the immortal words of Blues Traveller, “The hook brings you back. I ain’t tellin’ you no lie.”

For a while, I was looking for a guide about how to use Hooks in connection with the Context API. After only finding a few examples out there that explained the concept fully, I decided to do what any good developer should do: pore over the docs and build something myself. Struggling through it and learning it on your own is one of the best ways to absorb knowledge. This is a guide for how to build the same project that I did with the use of Hooks and Context.

## Overview

This project is going to be a basic calculator app similar to the iPhone calculator. Since this is just a simple desktop app I have replaced the % button with a back button. Though I wouldn’t use this to take the SATs, you could definitely add up the number of toes you have on it.

There is a working [deployed version](https://calc-u-later.netlify.com/) of the project, or you can view all of the code on [GitHub](https://github.com/theranbrig/calculator).

<img class="content-image" src="https://cdn-images-1.medium.com/max/2984/1*0XzsNDAyjANtW7Q7dqCkQA.png" alt="calculator design">

Our calculator design - Not award winning by any stretch of the imagination.

## The Project

### Getting Started

To get started we are just going to use create-react-app. You can get started by running the following:

    npx create-react-app calculator
    cd calculator
    npm start

### File Structure & CSS

The file structure of the app should look like the following. In the `src` folder create the following files or just leave the `App.js` and `index.js`.

    src
    ├── App.js
    ├── index.js
    └── components
        ├── BackButton.js
        ├── Calculator.js
        ├── ClearButton.js
        ├── Display.js
        ├── EqualButton.js
        ├── FunctionButton.js
        ├── NegativeButton.js
        ├── NumberButton.js
        ├── NumberProvider.js
        └── styles
            └── Styles.js

If you want to follow along exactly you can also install Styled Components for the CSS.

    npm -i styled-components

You can then add the Styled CSS from [this link](https://gist.github.com/theranbrig/dbf478ac4c961d6c8a193de582420ce1) to the `Styles.js` file or add your own.

### Main App Structure

The `Calculator.js` file should setup the display and number pad. It should contain all of the button types.

```jsx
import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import { CalculatorStyles } from './styles/Styles';

const Calculator = () => (
  <CalculatorStyles>
    <div className='display'>
      <h1>CALC-U-LATER</h1>
      <Display />
    </div>
    <div className='number-pad'>
      <ClearButton />
      <BackButton />
      <NegativeButton />
      <FunctionButton buttonValue='/' />
      <NumberButton buttonValue={7} />
      <NumberButton buttonValue={8} />
      <NumberButton buttonValue={9} />
      <FunctionButton buttonValue='*' />
      <NumberButton buttonValue={4} />
      <NumberButton buttonValue={5} />
      <NumberButton buttonValue={6} />
      <FunctionButton buttonValue='-' />
      <NumberButton buttonValue={1} />
      <NumberButton buttonValue={2} />
      <NumberButton buttonValue={3} />
      <FunctionButton buttonValue='+' />
      <div className='zero-button'>
        <NumberButton buttonValue={0} />
      </div>
      <NumberButton buttonValue='.' />
      <EqualButton />
    </div>
  </CalculatorStyles>
);

export default Calculator;
```

You will notice that all of the button components are added in here along with the number display. Each of the button components are essentially the same. They should all follow the same basic structure. The `zero-button` gets a separate `div` since we are using CSS Grid for the layout and it needs to span two columns. (PS — If you want to know more about CSS Grid I did a [little article](https://medium.com/@theran.brigowatz/gettin-griddy-with-it-build-your-own-css-grid-and-drop-the-frameworks-7d8c498c8b1b) on the basics.)

You may notice that the `buttonValue` prop is only needed for the `NumberButton` and `FunctionButton` components. Each of the buttons should follow the same basic structure with a unique name. You can reference the file structure up above to see which buttons are needed. The buttons should have the symbol written in the button component if they are not passed a `buttonValue` via props. Create one of these for each of the button types in your file structure.

```jsx
import React from 'react';

const ButtonName = ({ buttonValue }) => {
  return <button type='button'>{buttonValue}</button>;
};

export default ButtonName;
```

After this you should have the basic structure of a calculator. We are going to come back to the display in just a bit. Now we are going to get into the inner workings of the app and see how we can use our Hooks and Context.

### Building the Context API Provider

We are now going to create the `NumberProvider.js` . This is the heart of your app and where our functions are going to live. If you have never used the React Context API it is a great tool to help pass data from one component to another.

Think of when you have components that are nested within each other. In the past you would have to “prop drill” . This is when you pass the data or function through as props in down through nested components. This is hardly ideal, especially when you start to go several layers deep.

However, with this provider component, it allows you to pass data to any nested component, no matter how deep. This number provider will wrap our App component. Now whenever we want to get data, or use a function that lives in the provider, it is globally available. This gets us out of having to “prop drill” through nested components. You maintain the single source of truth that is the essence of React. To get started you need to create the provider. It should look like the following:

```jsx
import React from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const number = '0';
  return (
    <NumberContext.Provider
      value={{
        number,
      }}>
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
```

The basic provider is created and any value that is passed in is now available to all nested components. In order to make this available we are going to wrap our `App` component so it is globally available. Our `App` will have this code.

```jsx
import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

const App = () => (
  <NumberProvider>
    <Calculator />
  </NumberProvider>
);

export default App;
```

### Using the Context Provider

Now we can add in the code for our display. We can display the value by passing in the `useContext` function from the new React Hooks API. We no longer have to pass in prop through nested components. The display should look like:

```jsx
import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/Styles';

const Display = () => {
  const { number } = useContext(NumberContext);
  return (
    <DisplayStyles>
      <h2>{number}</h2>
      <p>Enter Some Numbers</p>
    </DisplayStyles>
  );
};

export default Display;
```

The number that you passed three levels up in the `NumberProvider` is immediately available to the `Display` component by calling `useContext` and passing our created `NumberContext`. Your number display is now up and running as it is showing `number` which we have set to zero.

Now of course our calculator is showing a single zero. This is great if you are counting the number of hours of sleep I get with a new born son, but not so great if trying to add anything else, so let’s use some hooks going get this calculator calculating.

### Getting Started with Hooks

If you haven’t used a hook before, it essentially allows you to get rid of the class syntax, and instead have state within functional components. Here we can add the following to our `NumberProvider.js` file in order to create our first hook.

```jsx
import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState('');

  const handleSetDisplayValue = (num) => {
    if (!number.includes('.') || num !== '.') {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        handleSetDisplayValue,
        number,
      }}>
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
```

There might be some syntax you have not seen. Rather than writing out our class with state we break each part of state into its own smaller `number` variable. There is also `setNumber` which acts the same as a `setState` function, but now works for a specific variable, and can be called when necessary. `useState` allows us to set an initial value.

We are now able to use this all in our function to pass the number button values into the display. In this app the calculator is using strings to get the input. There are checks to make sure that you can not have multiple . in your number and that you do not have series of zeroes to start your number.

### Building Button Components

Now you can call this function using the Context API in any of the nested components.

```jsx
import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NumberButton;
```

Now you have working string of numbers maker. You can see how you can start to inject the values that you set in the `NumberProvider` into the other components of the app via the `useContext` function. State and the functions that affect it are held in the `NumberProvider` . You just have to call in the specific context that you want.

You can start to see how this would be great as you start to add more complexity to your app. Say you want a user component to check that you are logged in to use special features. You can create a separate provider that holds the user data and makes that available any nested component.

We can continue to add in functions to our calculator and pass them to the proper component through the `useContext` function that is built in.

### Completed Provider Functions

The completed NumberProvider is found below and contains the following functions that are used with hooks.

- `handleSetDisplayValue` sets the value that you are typing into the display. We are checking that it there is only one decimal in the number string and we are limiting the number length to 8 characters. Think of this as more a tip calculator than one to get you through your calculus exam. It takes in the `buttonValue` property in `NumberButton.js` .

- `handleSetStoredValue` takes our display string and stores it so that we can enter another number. This is our stored value. It will be used as a helper function.

- `handleClearValue` resets everything back to 0. This is your clear function. It will get passed to `ClearButton.js`.

- `handleBackButton` allows you to delete your previously entered characters one at a time until you get back to 0. This belongs in the `BackButton.js` file.

- `handleSetCalcFunction` is where you get your math function. It sets if you are adding, subtracting, dividing, or multiplying. It gets passed into the `FunctionButton.js` file and takes in the `buttonValue` property.

- `handleToggleNegative` does just as the name implies. It allows you do so for either the display value or a stored value after a calculation. This of course goes in `NegativeButton.js`.

- `doMath` does the Math. Finally. Since this is only a simple four function calculator it is just using simple switch function depending upon the `functionType` that we have in state. We are using `parseInt` since we are passing our number in as strings. Also we are rounding to only three decimal places, to make sure that we do not have crazy long numbers.

```jsx
import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleSetDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(
            `${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`
          );
          break;
        case '-':
          setStoredNumber(
            `${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`
          );
          break;
        case '/':
          setStoredNumber(
            `${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`
          );
          break;
        case '*':
          setStoredNumber(
            `${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`
          );
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
      }}>
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
```

### The Finished Display

You will also need a display. In this case it will show the `number` and the `storedNumber` along with your `functionType`. There are a few check such as showing a 0 when you have an empty string as a number.

```jsx
import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/Styles';

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <DisplayStyles>
      <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
      <p>{!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}</p>
    </DisplayStyles>
  );
};

export default Display;
```

For brevity sake, I am not going to include all of the button functions since they are pretty much the same as the `NumberButton.js` file above. Just be sure that you pass in a `buttonValue` prop when necessary, and that you are passing in the correct function from the above list.

## Conclusion

I hope that this clears up a bit about how React Hooks and the Context API can be used together. Using these built in React features offers several benefits.

- Simple to understand syntax and gets rid of the clutter of class components. No more super and constructors. Just a few clean variables.

- Easier to set and use state within and across components. No more messy prop drilling through multiple component.

- Eliminates need for Redux in small projects, where you don’t need to hold too much in complex state. You probably aren’t going to re-create Facebook with it, but it will do the job on small-scale apps.

Please let me know your thoughts or if there are any issues that you come across in the code. Hopefully this shone a bit of light onto something that you may not have been familiar with before. React Hooks and Context are great ways to simplify your React apps and write cleaner code.

### See All the Code

If you would like to see the entire code for this project it can be found over in:

##### [GitHub Repo](https://github.com/theranbrig/calculator.)

##### [Calc-U-Later Deploy](https://calc-u-later.netlify.com/)

Check out more of my articles, projects, and other content at [theran.dev](https://theran.dev/blog) or on [twitter](https://twitter.com/wellBuilt).
