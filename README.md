# CPNT-262 / Assignment 3 - Group Assignment / Ed Adeagno, Will Tengyuan Li, Bryan Velasco

## Links

[GitHub Repo](https://github.com/cosmob3/cpnt262-group-project)
[Netlify Link](https://62511829d01d855b08d59bc8--neon-rugelach-f51736.netlify.app/)

## Attributions

- Hero Photo of Koala from the [Kent C. Dodds website](https://kentcdodds.com/)

- Photo of Team by [fauxels](https://www.pexels.com/photo/photo-of-people-holding-each-other-s-hands-3184423/) from Pexels

- Photo of blue&white code by [ThisIsEngineering](https://www.pexels.com/photo/extreme-close-up-photo-of-codes-on-screen-3861976/) from Pexels

- Photo of code on phone&computer by [Sora Shimazaki](https://www.pexels.com/photo/unrecognizable-hacker-with-smartphone-typing-on-laptop-at-desk-5935791/) from Pexels

- Photo of lit up keyboard by [Anete Lusina](https://www.pexels.com/photo/crop-cyber-spy-typing-on-computer-keyboard-while-hacking-system-5240544/) from Pexels

- Hero Photo of skies from the [Kent C. Dodds website](https://kentcdodds.com/)

- Photo of fingers on keyboard by [Pavel Danilyuk](https://www.pexels.com/photo/person-in-white-long-sleeve-shirt-using-macbook-pro-5496461/) from Pexels

- Photo of Envelope by [Maksim Goncharenok](https://www.pexels.com/photo/gold-letter-y-on-black-background-5605061/) from Pexels

- Some text content also from the [Kent C. Dodds website](https://kentcdodds.com/)

- Some titles for blog cards are lyrics from Kendrick Lamar's song 'LUST.'

### Colour Scheme

- Heading/Titles/Other Alt Text - `text-white` (hex:#FFFFFF)
- Descriptions/Other Text - `text-gray-700` (hex:#374151)
- Background - `bg-gray-800` (hex:#1F2937)

---

## _PLANNING_

### Group Charter

- Commit smaller portions of code so that we can change it as needed
- If you need to change someone's code, send a message in Slack so we can see whether or not it works for the team

### Tools Used

- Design: Figma Mock-up
- Layout: Figjam Wireflow
- API/CMS: Storyblok
- CSS Framework: Tailwindcss
- JS Frameworks: VueJS in NuxtJS (Used Nuxt-3)

### Planing out our website

The following pages

- X A home page
  - X A logo
  - X Navigation
  - X CTA
  - X Text Content
  - X Footer
- X At least 1 page that uses content from an api
- X A team bio/about page (dependent on your site)
  - X Cards about team members.
- X 2 other pages (services/products, contact...)

**API IDEAS:**

- [OpenWeatherMap API Video](https://www.youtube.com/watch?v=InoAIgBZIEA)

- [OpenWeatherMap API](https://openweathermap.org/api)

- [News API Video](https://www.youtube.com/watch?v=yY0ciWj8oco)

  - According to the video the free version of this API has been deprecated

- [News API](https://newsapi.org/docs)

**Name Ideas**

- N.E.W.B (Based off the first letters of all our names)
- N WEB (try and incorporate an N somewhere)

### Nuxt TODO

- X Use reusable components
- X templates use of:
  - X props
  - X slots
  - looping
  - X etc.
- Script
  - X script syntax uses one of the valid forms consistently
  - computed used when needed
  - X logic kept in script tags
  - X async functions used to pull data from CMS

### Backend and Configuration

- X Configuration (making sure it all works)

  - Nuxt
  - Modules

- X Deployment

  - Site Deployment on Netlify

- X File Naming Convention

- X CMS/API integration
  - storyblok or other

### Site Content

- U.X.

  - site navigation
  - page layout and design

- CSS

  - follows recommended practices of chosen css framework

- Assets
  - Image and other assets are properly saved in assets/ or static/ folders
  - Design assets are properly organized and implemented

---

### Component Planning

**r - reusable component**

- TheNavigation Bar

  - hover state

- CTA

- r Hero Section (Transform)

  - title
  - image
  - slot for extra content

- TheFooter

  - Company Name
  - Social (GitHub logo - linked to repo)
  - Copyrights

- r Cards
  - wrappered in `<a>` tag
  - outline hover state on image
  - date
  - title
- Featured article card
  - wrappered in `<a>` tag
  - section title(Featured article)
  - Article title
  - date
  - img

Home Page
About Page - Use Storyblok
Contact Page
Blog Page

### Roles

- Figma Mock-up
  - Ed Adeagbo
    - I've finished the 4 pages but for the page we want to implement the API into I'm not sure how to make it.
    - I've also made a very simple wireflow in figjam just to show parent directories
- API, About Page
  - Will Tengyuan Li
- Components
  - Bryan Velasco

---

## Code Journal

### Bryan

- Trying to set the code up. Working on navigation bar and footer to add to `app.vue` page
- Got a very basic navbar and footer but now for some reason the content on the root index.vue page and TheFooter is being displayed twice

  - Have tried to delete and re-add content: not working
  - Reloaded the page: not working
  - Reloaded the server: not working

- Went for lunch and when I came back I started the server back up and the issue was just fixed... 'gotta love technology'
- Trying to add links to navbar with as little code as possible

![Version 4 NuxtLinks](https://user-images.githubusercontent.com/97326786/162542281-c50b29d4-2245-438f-9027-57ef4832d75e.png)

- But was having a hard time figuring it out, so for the sake of time I'll just do all my links as separate Nuxt links8
- Starting on hero section
- Was trying to make an `AppButton` for the hero section CTA but I was unable to figure out how to pass a url as a prop
- So the hero cta(s) have to be added manually which isn't the worst thing because some pages don't have a cta on their hero section
- Making the navigation bar and hero section responsive
- Good so far!
- Going back to an earlier issue that I had. Made the hero section into a proper reusable component but using a `<slot>` for the image section
- Now working on the short about me section that is part of the landing page
- Was having a hard time getting an image to render... Then I realized I had named the `<slot>` something different than what I was using to invoke it! (A+ detetive work)
- After that it was trying to get everything to align properly
- Now to work on the blog cards section
- I noticed that the title used is the same throughout most of the site so I decided to make an `AppTitle` component to just make it that much easier
- Made some very quick cards - Not optimized at all
- Trying to work from a mobile first approach from here on out
- Working on Featured Article section
  - starting with a mobile first approach
  - done with the mobile approach
  - Working on it as a full page now
  - Using grid box and flex box on the same element is kind of a pain in the butt :'( but we are getting there
  - Forgot to add `sm:` and `md:` but I was simple enough to add those and make it work for both mobile and computer users
- Featured Article Section complete!
- For the blog cards I just used the `AppCard` and was able to just copy and paste what I needed
- Working on contact page
  - used the hero component
  - used our previous form assignment to build the contact page form
- Working on footer because it kept popping up in the middle of the pages
- Added a class of `class="h-full"` to the `app.vue` page and that seem to solve the issue
- Added a link to the github repo of this assignment in the footer
- Going to go through and change whatever images and text I had as a placeholder
- Attributions added for the content used
