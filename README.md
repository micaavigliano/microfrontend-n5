# microfrontend-n5

## Set-up

- clone the repo
- run `npm install`
- Once the installation finished, run `npm run install-all` in order to install the `node_modules` for all the projects.
- Then, run `npm run start` so all the projects can start. A little note about this: the only project that will pop up will be the `host` project. If you want to test isolated the other projects you can use the following URLs: [Harry Potter](http://localhost:8081/) and [Rick n Morty](http://localhost:8083/)
- Done! Everything is set up to start using :)

## Stack

React, Typescript, Styled-Components, Storybook, i18n, Module Federation

## What did I do?

I created four different projetcs:

- Host: our main app. Here is where we are going to find our final application, all the interactions and info about the characters of both serie/movie
- hp-app: here we are going to find the fetch for the Harry Potter's API and the button for this movie
- rick-morty-app: here we are going to find the fetch for the Rick n Morty's API and the button for this movie
- shared-resources: here we are going to find all those resources that are going to be reusable throughout our applications. Among them we can find: Button, Dropdown, Modal and List. In addition to that, we are going to find reusable hooks
- all the components are fully accessible. Can be interacted both with mouse and keyboard. Also contains focus management so we can be in fully control of our actions

  
