export const ArticlesContent = [
  {
    id: 0,
    active: false,
    title: "",
    date: "",
    summary: "",
    related_project_id: 0,
    images: [""],
    links: {
      github: "",
      other: [
        {
          url: "",
          url_display: "",
        },
      ],
    },
    content: [""],
  },
  {
    id: 1,
    active: true,
    title: "pickup",
    date: "09/03/2023",
    summary:
      "Community based litter picking app, Java/Spring & PostgreSQL back-end, React front-end.",
    related_project_id: 1,
    images: ["/article-images/pickup_1.png"],
    links: [
      {
        url: "https://github.com/kelsiesmurphy/pickup",
        url_display: "GitHub",
      },
      {
        url: "https://www.joinpickup.co",
        url_display: "joinpickup.co",
      },
      {
        url: "https://app.swaggerhub.com/apis/jomonty_cs_swagger/pickup_v2/1.0.0",
        url_display: "pickup API docs - SwaggerHub",
      },
    ],
    content: [
      "For my final project at Codeclan, I worked with 2 other students to produce pickup, a community space for litter picking events with user authentication, event creation and a comment system, and continuously updating statistics on communities, events and users. This was a full stack app made using Java, Spring Boot, PostgreSQL on the backend with Javascript, React and Tailwind on the frontend.",
      "Our primary goal was to build a fully functional app, and have both the front and the backend hosted. We achieved this with vercel for the frontend, and neon postgres with a Digital Ocean droplet hosting a java application for the backend.",
      "This project was incredible to work on, from conception through planning and development, it was filled with challenges and I enjoyed it immensely. Early in our planning process I built out an API specifcation using swagger to enable the front and backend to be developed concurrently.",
      "I planned and developed the entirety of the server, learning loads about Java and Spring Boot along the way. Hosting was it's own challenge, but I'm super proud to have managed to get it online and have a working demo.",
      "Full details of the project and my team are available on the GitHub repo's README.",
    ],
  },
  {
    id: 2,
    active: false,
    title: "Go & React CRM Demo",
    date: "13/04/2023",
    summary:
      "Full-Stack CRM demo, built to introduce myself to Go and Bootstrap.",
    related_project_id: 2,
    images: ["/article-images/go_react_crm_1.png"],
    links: [
      {
        url: "https://github.com/jomonty/go-el3-full-stack-demo",
        url_display: "GitHub",
      },
    ],
    content: [
      "A full stack lightweight CRM, with JWT based authentication, full CRUD functionality with MySQL for persistence, file upload and download capability and styled using Bootstrap5.",
      "I really enjoyed making this. I was looking for a way to push myself beyond what I've achived in past work and I was curious about Go, so I was super excited to get started.",
      "Not having used Go before, I started off with tutorials covering each of the main features I wanted the app to have (RESTful API, ORM, authentication etc), and built mini-projects for each one before planning out and building out the functionality, consolidating and continuing to learn as I went.",
      "On the front end, I've been trying to get exposure to as many CSS frameworks as possible so it was great to get a chance to use Bootstrap. Honestly, I found it a little fiddly to begin with, having just spent some time using TailwindCSS, but I quickly found that once I got familiar with the components it is really quick to get things running with.",
    ],
  },
  {
    id: 3,
    active: false,
    title: "",
    date: "",
    summary: "",
    related_project_id: 0,
    images: [""],
    links: [
      {
        url: "",
        url_display: "",
      },
    ],
    content: [""],
  },
  {
    id: 4,
    active: true,
    title: "beeCareful",
    date: "08/02/2023",
    summary:
      "Apiary management system, ExpressJS & MongoDB back-end, React front-end.",
    related_project_id: 4,
    images: ["/article-images/beeCareful_1.png"],
    links: [
      {
        url: "https://github.com/jomonty/javascript_project_beeCareful",
        url_display: "GitHub",
      },
    ],
    content: [
      "This was a group project at Codeclan. Our brief was to build a full-stack application using React, Express and MongoDB, and get experience using git in a team. One of our team members is a beekeeper so we decided to build an app to manage apiaries (groups of colonies), colonies and inspections.",
      "Our MVP included a React front-end, an Express/MongoDB backend and CRUD functionality for colonies and inspections, we had extensions covering dynamic display of information on colonies depending on properties of the latest inspection, inclusion of an API call to OpenWeather to show upcoming weather for the colonies, and the capability to have multiple apiaries.",
      "We discovered some challenges early on in the project - we essentially wanted a relational structure in the data model which needed some thought for MongoDB, this was my job. I designed a relational data model for the database, and I designed and built the server using Express, managing to keep the complexity of the logic needed to manage the relational structure (mostly!) abstracted to the server code.",
      "I also implemented a skeleton structure for the client, client-side logic to handle CRUD operations and managed our git workflow as well as problem solving and bug fixing through the full client. Working through this project in a team was a great experience and it really hammered home the importance of a good git workflow.",
      "Full details of the project and my team are available on the GitHub repo's README.",
    ],
  },

  {
    id: 5,
    active: true,
    title: "The Little Gym",
    date: "14/12/2022",
    summary: "Simple gym management system, built with Python/Flask.",
    related_project_id: 5,
    images: ["/article-images/the_little_gym_1.png"],
    links: [
      {
        url: "https://github.com/jomonty/python_project_gym_app",
        url_display: "GitHub",
      },
    ],
    content: [
      "A full stack app build with Python, Flask, PostgreSQL, HTML & CSS with CRUD functionality to allow a gym to manage memberships, classes, and the registration of members to classes.",
      "This was my first end to end full stack app and I really enjoyed designing and building it. We have a few restrictions to keep us to the Python/Flask stack such as no JS, no ORM, no prebuilt CSS libraries.",
      "I designed the database in PostgreSQL, database handling and interaction in Python with the psycopg2 library, route handling with Flask, templates with Jinja, styling with CSS and unit tests with Pythons unittest module. The logic in the controller/router was by far the most challenging though most enjoyable part of the project.",
      "Full details of the brief are available in the GitHub repo's README.",
    ],
  },
];
