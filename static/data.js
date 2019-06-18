export default [
  {
    title: 'Grouper',
    technology: 'Next.js React, Graphql, Prisma',
    created: 'Winter 2018',
    description: 'Realtime Group Shopping App',
    slug: 'grouper',
    image: 'https://i.imgur.com/AdmJjnY.png',
    logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551527103/Fish.png',
    extendedDescription:
      'Group shopping and lists made easy. Check them off as you go and get real-time updates as you shop. Split up and let others get items. Mark them off as you find them. This was built to utilize Next.js with React on the frontend for quick SSR React Components and caching. Apollo Boost works to connect the backend data to the client side, as well has hold local state. All GraphQL Mutations and Queries are handled through Apollo. The API uses GraphQL with a GraphQL server to connect to a Prisma database that is built using PostgreSQL. The relational data structure allows for quick querying to the server. A testing suite was built using Jest and Enzyme to make sure that everything is up and running properly. Snapshot testing was integrated as well. The app is deployed using Heroku on both the front and back ends. This was a quick five day build meant to act as a coding challenge interview, so it is far from perfect yet.',
    gitLink: 'https://github.com/theranbrig/grouper',
    deployLink: 'https://grouper-frontend.herokuapp.com/',
    screenShots: [
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_300/v1559996358/Grouper_New_Home.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_300/v1559996358/Grouper_List.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_300/v1559996358/Grouper_Add_Item.png',
    ],
    icon: 'fas fa-fish',
    tech: [
      'devicon-react-original',
      'graphql',
      'devicon-javascript-plain',
      'devicon-nodejs-plain',
      'devicon-css3-plain',
      'devicon-heroku-plain',
      'devicon-postgresql-plain',
    ],
  },
  {
    title: 'Grown',
    technology: 'Next.js React, Graphql, Prisma',
    created: 'Fall 2018',
    description: 'Farmers Market Shopping App',
    slug: 'grown-farms',
    image: 'https://i.imgur.com/G6UWh3c.png',
    logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Farm.png',
    extendedDescription:
      'Grown is a full-stack JavaScript project built upon React and GraphQL. It is a place for farmers to sell their products online and for consumers to order products online for later pick up at farmer markets. It is built primarily with React and Apollo on the client side, with GraphQL Yoga amd Prisma connected on the backend.As of right now the farms are available as stores where users can order products. Markets and search are planned features for the next sprint and are coming later. Also I plan on updating the styling in order to fit in more with the feel of the app and product. It is a work in progress still. I welcome feedback and suggestions.',
    gitLink: 'https://github.com/theranbrig/grown',
    deployLink: 'https://grownfarms.herokuapp.com/',
    screenShots: [
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967944/3_-_eBabmvL.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967943/2_-_kQF1X9z.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967943/1_-_BmMq37W.png',
    ],
    icon: 'fas fa-leaf',
    tech: [
      'devicon-react-original',
      'graphql',
      'devicon-javascript-plain',
      'devicon-nodejs-plain',
      'devicon-css3-plain',
      'devicon-heroku-plain',
      'devicon-postgresql-plain',
    ],
  },
  {
    title: 'Wiki-What',
    technology: 'Express, Node, SQL',
    created: 'Summer 2018',
    description: 'RESTful Wiki Collaboration Site',
    slug: 'wiki-what',
    image: 'https://i.imgur.com/zQDt9KE.png',
    logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Globe.png',
    extendedDescription:
      'Full RESTful API site for wiki collaboration.  Users are able to upgrade to premium features through Stripe payments.  There is full authentication and crediential checking for premium feature users.  The entire app has been unit and integration tested with Jasmine.  There are full CRUD capabilities for both users and Wikis.  It uses a markdown editor with uniform styling.  I also worked to make sure that the Wiki styling is both clean, modern and stylish; something that is often missing from most Wiki sites.  Though it is primarily meant to be used as a full desktop site, it is mobile responsive.  This was primarily an back-end project to build a complete REST app.  All back-end components are modular and separated for easy scaling and feature addition.  It uses PostgreSQL as a database for wikis and users, with validation that is handled by Passport',
    gitLink: 'https://github.com/theranbrig/wiki-what',
    deployLink: 'https://wikiwhat-theranbrig.herokuapp.com/',
    screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967917/MKnPtcn.jpg'],
    icon: 'fas fa-globe',
    tech: [
      'devicon-javascript-plain',
      'devicon-express-original',
      'devicon-nodejs-plain',
      'devicon-css3-plain',
      'devicon-heroku-plain',
      'devicon-postgresql-plain',
      'devicon-jasmine-plain',
    ],
  },
  {
    title: 'Vane',
    technology: 'React, Firebase, MaterialUI',
    created: 'Spring 2018',
    description: 'React Mobile Weather PWA',
    slug: 'vane',
    image: 'https://i.imgur.com/0cvRvQK.png',
    logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Cloud.png',
    extendedDescription:
      'This quick and simple mobile app was built in order to solidify my foundation for ReactJS in my developer boot camp. I built this as an extra project on my own to make sure that I had a good handle on the basic concepts of ReactJS.  This was first built by fetching data from the Yahoo Weather API and using Axios to handle the API requests. Axios ensured that I can handle my API requests with each search that is performed, without further complicating my app life cycle. Components were then rendered out using ReactJS and Material UI. Material UI was used to help with a responsive UX and UI, and helped to maintain styling. I also added styling that that uses a color palette based on the temperature from hot to cold. Screenshots of the color palette in the app can be found here. Finally I have added Firebase in to allow for user authentication via Google. Users may save cities for quick access when signed in.',
    gitLink: 'https://github.com/theranbrig/weather-app',
    deployLink: 'https://vane.netlify.com',
    screenShots: [
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967962/3_-_ucAXrQ2.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967961/1_-_rGAttGs.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967961/2_-_rSS6yu3.png',
    ],
    icon: 'fas fa-cloud-sun-rain',
    tech: ['devicon-javascript-plain', 'devicon-react-original', 'devicon-css3-plain', 'devicon-html5-plain'],
  },
  // {
  //   title: 'NintenDB',
  //   technology: 'React, Firebase, Node, Express',
  //   created: 'Spring 2019',
  //   description: 'IGDB.com API Project',
  //   slug: 'nintendb',
  //   image: 'https://i.imgur.com/0cvRvQK.png',
  //   logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Cloud.png',
  //   extendedDescription:
  //     "This was built to utilize IGDB.com's APIcalyse and their API.  It is a simple express app on the backend that pulls in data from their API.  All views are done using React on the frontend and it is styled with NES.css for a bit of old school 8-bit styling.  Users may save games after going through random classic games.  User authentication and the database layer is built using Google Firebase for rapid development.",
  //   gitLink: 'https://github.com/theranbrig/igdb-project',
  //   screenShots: [
  //     'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_74,w_689/v1559473764/Screen_Shot_2019-06-02_at_8.06.50_PM.png',
  //     'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_662/v1559473764/Screen_Shot_2019-06-02_at_8.07.55_PM.png',
  //     'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_741/v1559473764/Screen_Shot_2019-06-02_at_8.06.40_PM.png',
  //   ],
  //   icon: 'fas fa-gamepad',
  //   tech: [
  //     'devicon-javascript-plain',
  //     'devicon-react-original',
  //     'devicon-css3-plain',
  //     'devicon-html5-plain',
  //     'devicon-nodejs-plain',
  //     'devicon-heroku-plain',
  //   ],
  // },
  {
    title: 'Bloc Jams',
    technology: 'React, SemanticUI',
    created: 'Spring 2018',
    description: 'React Spotify-like Clone',
    slug: 'bloc-jams',
    image: 'https://i.imgur.com/F3bHADS.png',
    logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526991/Headphones.png',
    extendedDescription:
      'Bloc Jams is a my first React SPA that was built as part of my curriculum through Bloc. It is an SPA for albums and music that uses React Router to create a responsive page that works on mobile as well. I started out by building the basic routes with React Router. After that I built up the functionality of the library, album, and music player controls using React. The page was then finally styled through the use of Semantic UI - React. This was my first time working to build an SPA completely with React. It was a learning experience in managing state and props, while building a responsive webpage.',
    gitLink: 'https://github.com/theranbrig/bloc-jams',
    deployLink: 'https://bloc-jams-theran.netlify.com/',
    screenShots: [
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551969057/1_-_gQ4Hrit.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551969413/2_-_tsYxipW.png',
      'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551969059/3_-_p9Pd8c9.png',
    ],
    icon: 'fas fa-headphones-alt',
    tech: ['devicon-javascript-plain', 'devicon-react-original', 'devicon-css3-plain', 'devicon-html5-plain'],
  },
  {
    title: 'Bloc Chat',
    technology: 'React, Firebase, MaterialUI',
    created: 'Spring 2018',
    description: 'Web Chat with Firebase and React',
    slug: 'bloc-chat',
    image: 'https://i.imgur.com/0CEeP9p.png',
    logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Chat.png',
    extendedDescription:
      'Bloc Chat was built as my second project using React. This was part of my curriculum with Bloc.io and was a great experience in learning the concepts of how to build a React app. The app was first built by creating a list of chat rooms that dynamically updates when a user adds a new chat room. After that, displayed messages for each chat room were generated. In order to create messages as a registered user, Firebase was added for user authentication and to save messages for each user. All messages only display within the given chat room in which they were created. Messages and chat rooms may be deleted and edited when necessary. The page was styled using Material UI. It is mobile responsive, though it is best used on a desktop platform. This was my first time using a database with React and it was a good experience in further learning React and showing the power that it has when used with a dynamic database like Firebase.',
    gitLink: 'https://github.com/theranbrig/bloc-chat',
    deployLink: 'https://bloc-chat-theran.netlify.com',
    screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551968890/xTD2VWq.png'],
    icon: 'far fa-comment-alt',
    tech: ['devicon-javascript-plain', 'devicon-react-original', 'devicon-css3-plain', 'devicon-html5-plain'],
  },
  {
    title: 'News Bites',
    technology: 'Vanilla Javascript, SemanticUI',
    created: 'April 2018',
    description: 'News Site using Vanilla JavaScript',
    slug: 'news-bites',
    image: 'https://i.imgur.com/D54iVFi.png',
    logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526991/Forks.png',
    extendedDescription:
      'The purpose of this assignment was to use an API for the first time and display it on a page. I used the fetch method to make AJAX requests and built the site using HTML, CSS, and Vanilla JavaScript. I used News API to get headlines from major news categories and the page can be updated and viewed easily. It was my first time using an API in conjunction with HTML. I plan on refactoring some of the code in the future, adding a search function, and making a few design tweeks along the way.',
    gitLink: 'https://github.com/theranbrig/api_news_bites',
    deployLink: 'https://news-bites.netlify.com',
    screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_600/v1551967917/oBIjR9C.png'],
    icon: 'fas fa-utensils',
    tech: ['devicon-javascript-plain', 'devicon-css3-plain', 'devicon-html5-plain'],
  },
];

export const icons = [
  { skill: 'HTML', icon: 'devicon-html5-plain' },
  { skill: 'CSS', icon: 'devicon-css3-plain' },
  { skill: 'JavaScript', icon: 'devicon-javascript-plain' },
  { skill: 'React', icon: 'devicon-react-original' },
  { skill: 'Node.js', icon: 'devicon-nodejs-plain' },
  { skill: 'Git', icon: 'devicon-github-plain' },
  { skill: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
];

export const skills = [
  'Express',
  'MVC Architecture',
  'Jasmine',
  'Jest',
  'MongoDB',
  'Sass',
  'Styled Components',
  'Semantic UI',
  'Bootstrap',
  'Material UI',
  'Heroku',
  'Photoshop',
];
