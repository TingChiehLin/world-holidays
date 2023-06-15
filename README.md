## World Holidays introduction

This is a practical project in order to improve my skills using the latest technology.

![desktop_preview](./public/desktop_demo.png)

## Deploy on Vercel

You can see my project on Vercel [Demo Link](https://world-holidays.vercel.app)

## Table of contents

- [World Holidays introduction](#world-holidays-introduction)
- [Deploy on Vercel](#deploy-on-vercel)
- [Table of contents](#table-of-contents)
- [Deploy on Vercel](#deploy-on-vercel-1)
- [Set Up API Key](#set-up-api-key)
- [Install dependencies \& Run a server](#install-dependencies--run-a-server)
- [Running Cypress](#running-cypress)
- [Tech I used](#tech-i-used)
- [API](#api)
- [Challenge](#challenge)
- [Learn More](#learn-more)

## Deploy on Vercel

You can see my project on Vercel [Demo Link](https://world-holidays.vercel.app)

## Set Up API Key

First of all, set up API Key

``
1. Create ``.env.local`` file on the root path
2. Inside the file, declare a variable with API Key, like this: ``NEXT_PUBLIC_API_KEY=<your-api-key>``
``

## Install dependencies & Run a server

Next, install node_modules dependencies

```bash
yarn install
```

And then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Cypress

```
yarn cypress open
```

## Tech I used

- React
- Next.js 13
- CSS3 Module
- React Query
- Test Library(Jest and Cypress)

## API

Worldwide Holidays and Observances RESTful API

- [API Documentation](https://calendarific.com/api-documentation)

## Challenge

Some of challenges, I am facing and trying to overcome:

- Show autocomplete while searching
- Add pagination if there are more than 20 holidays.
- The table only shows “Name” and “Date”, and has “Collapso rows” with the type and description. for responsive design
- Implement a dropdown menu
- An “API key” input saved on localStorage
- Use react-query with Next SSR

## Learn More

To learn more from this project, take a look at the following resources:

- [Border Property](https://stackoverflow.com/questions/628301/the-border-radius-property-and-border-collapsecollapse-dont-mix-how-can-i-use) - To resolve border issue
- [React Query Course](https://www.youtube.com/watch?v=NQULKpW6hK4) - data-fetching library with fetching, caching, synchronising, and updating the server state in my react application
- [Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/) - Understanding Decorative Images for img tag
