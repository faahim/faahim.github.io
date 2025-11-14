export interface Project {
  name: string;
  heading: string;
  details: string;
  thumb: string;
  links: {
    live: string;
    repo: string | null;
  };
}

export interface Writing {
  title: string;
  publishedOn: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    name: "RefinedTweets",
    heading: "Take back control of your X/Twitter feed by creating your own algorithm.",
    details: "RefinedTweets lets you curate your feed based on your preferences, essentially letting you create your own Twitter algorithm. It helps you grow your audience, discover more of the content you want, and improved the user experience by tweaking the UI and so much more! This is a passion project of mine that I've been working on for the past year.",
    thumb: "https://faahim.github.io/refined-tweets/public/RefinedTweets.png",
    links: {
      live: "https://refinedtweets.com",
      repo: null,
    }
  },
  {
    name: "Nest Tab",
    heading: "I was tired of switching between browser, code editor, To-do app and a Timer app. So I created Nest Tab.",
    details: "Nest Tab is a simple Google Chrome extension that replaces your New Tab page with a clean looking page that contains tools to help you stay productive. It currently features a Todo list and a Pomodoro clock that works together, a Shelf to dump URLs that you want to take a look at later, and a Bookmark quick access tool. Nest Tab is created using React. See the repo for more details.",
    thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1519715501/Nest_Screens-main-min_twxhlb.png",
    links: {
      live: "https://faahim.github.io/nest-tab/landing-page/",
      repo: "https://github.com/faahim/nest-tab"
    }
  },
  {
    name: "Weather App",
    heading: "A weather app that you'll actually want to look at. Also, it's cool because it gives you famous quotations based on weather. Very helpful, right? -_-",
    details: "It's a web app that shows live weather information and forecast of your current location. You can also search for any location to see its weather info. I've used JavaScript and jQuery along with HTML and CSS to create it. The app is fully responsive. It uses Dark Sky API for fetching weather information. It also utilizes Google Maps API for all the location related data. I've used Skycons, an amazing animated weather icon set made by Dark Sky, to present the weather data.",
    thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1520693932/weatherApp_xhenuq.png",
    links: {
      live: "https://faahim.github.io/local-weather-viewer/",
      repo: "https://github.com/faahim/local-weather-viewer"
    }
  },
];

export const writingsData: Writing[] = [
  {
    title: "Learning and Burning Out — Me In-front of Mirror #1",
    publishedOn: "Medium",
    link: "https://medium.com/@afiur.fahim/learning-and-burn-out-7f188392d56?source=portfolio"
  },
  {
    title: "CSS Box Model for Beginner: Unlocking the Magic of CSS",
    publishedOn: "Hacker Noon",
    link: "https://hackernoon.com/css-box-model-45ecf4ac219e?source=portfolio"
  },
  {
    title: "HTML Content Flow: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/html-content-flow-d94b7c03f98?source=portfolio"
  },
  {
    title: "CSS Selectors Explained with Demo: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/css-selectors-c4ee17b90886?source=portfolio"
  },
  {
    title: "Getting Started with CSS — A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/coding-in-css-ed88f5a2d3a9?source=portfolio"
  },
  {
    title: "Understanding HTML Block and Inline Elements: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/html-block-and-inline-elements-b65775e86599?source=portfolio"
  },
  {
    title: "All Around HTML Forms: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/creating-html-form-d6879337fcbb?source=portfolio"
  },
  {
    title: "Creating HTML Table: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/creating-html-table-dab3dc57a78a?source=portfolio"
  },
  {
    title: "Creating Lists in HTML: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/creating-list-in-html-93ecd69124a?source=portfolio"
  },
  {
    title: "Creating HTML Links and Images: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/html-links-and-image-d1e0620f78e1?source=portfolio"
  },
  {
    title: "HTML Hierarchy Tree: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/html-hierarchy-tree-7a2947f2bf01?source=portfolio"
  },
  {
    title: "HTML File Structure: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/html-file-structure-438da76fc261?source=portfolio"
  },
  {
    title: "The Basics to Code in HTML: A Learning Journey to Web Development",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/the-basics-to-code-in-html-f4b6aab795c7?source=portfolio"
  },
  {
    title: "A Learning Journey to Web Development: History of HTML",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/a-learning-journey-to-web-development-history-of-html-401c197468c8?source=portfolio"
  },
  {
    title: "Learning Journey to Web Development — The Ultimate Blueprint",
    publishedOn: "UX Art",
    link: "https://medium.com/ux-art/learning-journey-to-web-development-6ebd8e56c4e6?source=portfolio"
  },
];
