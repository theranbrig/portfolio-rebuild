## Overview

Finding a good way to add user authorization to a Firebase and Next.js app was not the easiest out there to find. So I thought that I would do writeup that explains the process that I have pieced together lately in the hopes that it could help others out as well.

If you want to have authorized and protected routes, this way does a user authentication check on ever page as it lives in the `_app.js` file. You then have all of the necessary user data on hand for each request. We are going to be creating a Firebase Token when the user logs in and then using the Next.js API routes we will be able to check is it is an authorized token with each page request. The user data is then available at the page level, making it available for any other components on your page.

We are going to take advantage of the Next.js feature for `getInitialProps`. This allows you to render the page with data already populated, rather than waiting for your API data call in the `useEffect` function. This speeds up load time and ensures you have user data when you load the page.

I will be assuming familiarity with the basics of both Next.js and Firebase. If you have any questions please leave them in the comment section.

Let's get started.

## The Code

First of all we need to create a `UserContext.js` file. This is where going to create a Context Provider for all of the user data and Firebase functions. Although you could stop here and just pass the user data along through context, it would mean that you would have loading time on each page, rather than utilizing the Next.js feature for `getInitialProps`.

We will put this all together later. But for now your `UserContext.js` file should be similar to the following.

Right now we just have the login function, but you can also add in your logout, signup, or other Firebase functions here as well.

We will be use js-cookie to create and remove cookies.

You can install that with:

```
yarn add js-cookie
```

```jsx
import React, { useEffect, useState } from 'react';

import cookie from 'js-cookie';
import firebase from '../firebaseSetup';

export const UserContext = React.createContext();

const tokenName = 'firebaseToken';

const UserProvider = ({ children }) => {
  const emailLogin = async (email, password, redirectPath) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in.');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAuthStateChange = () => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        cookie.set(tokenName, token, { expires: 14 });
      } else {
        cookie.remove(tokenName);
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={{ emailLogin }}>{children}</UserContext.Provider>;
};

export default UserProvider;
```

The magic here lies in this section:

```jsx
// Add or remove cookie with Firebase Auth Token on sign in or logout.
const onAuthStateChange = () => {
  return firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken();
      cookie.set(tokenName, token, { expires: 14 });
    } else {
      cookie.remove(tokenName);
    }
  });
};

useEffect(() => {
  const unsubscribe = onAuthStateChange();
  return () => {
    unsubscribe();
  };
}, []);
```

Here the `onAuthStateChange` is called in the `useEffect` hook. When a user logs in a cookie is created that stores the Firebase Authentication Token, or if they logout the cookie is destroyed. We will check that token through the Next.js API routes.

Now in the `_app.js` we will get our initial props. We need to add a `getInitialProps` function to call the Next.js API routes and return the user data.

We will use fetch from "isomorphic-unfetch" which can be added with:

```
yarn add isomorphic-unfetch
```

```jsx
MyApp.getInitialProps = async (appContext) => {
  const { ctx } = appContext;
  // Calls `getInitialProps` and fills `appProps.pageProps`
  let error;
  const appProps = await App.getInitialProps(appContext);
  if (typeof window === 'undefined') {
    const { firebaseToken } = cookies(ctx);
    if (firebaseToken) {
      try {
        const headers = {
          'Context-Type': 'application/json',
          Authorization: JSON.stringify({ token: firebaseToken }),
        };
        const result = await fetch(`${server}/api/validate`, { headers }).then((res) => res.json());
        return { ...result, ...appProps };
      } catch (e) {
        console.log(e);
      }
    }
  }
  return { ...appProps };
};
```

In order to have the correct server called for production and development you can use the following:

```javascript
const dev = process.env.NODE_ENV === 'development';

const server = dev ? 'http://localhost:3000' : 'https://mydomain.com/';
```

One last thing is needed to tie the whole thing together. Now we need add in a Next.js API route. In your pages folder you need to create a `api/validate.js` file. I highly suggest learning more about the Next.js API routes as they really help to take advantage of the SSR functionality that Next.js offers.

Here we are going to create the logic that populates our page with the Firebase data.

- A note here: You will need to create a Firebase Admin instance in order to use this, you cannot simply use a standard Firebase instance.

```jsx
import { firebaseAdmin } from '../../utilities/firebaseAdminSetup';

const validate = async (token) => {
  // Check that the user has a valid token
  const decodedToken = await firebaseAdmin.auth().verifyIdToken(token, true);
  let userData;
  // Get user Firebase data from token
  const user = await firebaseAdmin.auth().getUser(decodedToken.uid);
  // Get any additional user data from the Firebase DB
  await firebaseAdmin
    .firestore()
    .collection('users')
    .doc(decodedToken.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData = { ...doc.data() };
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  // Assign the result that will be passed to your _app.js file
  const result = {
    user: {
      uid: user.uid,
      email: user.email,
      username: userData.username,
      emailVerified: user.emailVerified,
    },
  };
  return result;
};

export default async (req, res) => {
  try {
    // Check if there is a token and if not return undefined.
    const { token } = JSON.parse(req.headers.authorization || '{}');
    if (!token) {
      return res.status(403).send({
        errorCode: 403,
        message: 'Auth token missing.',
      });
    }
    // Call the validate function above that gets the user data.
    const result = await validate(token);
    return res.status(200).send(result);
  } catch (err) {
    // Return undefined if there is no user.
    console.log(err);
    const result = undefined;
    return res.status(200).send(result);
  }
};
```

You now have `user` available as `props` on any page route. User validation is now a snap and now can be consumed by any other component.

This type of pattern comes in handy for any server side data fetching that you want to do. It is one of the great features of Next.js that you should try to utilize throughout your applications.
