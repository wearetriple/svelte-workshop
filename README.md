# PokeApp - Svelte Workshop

We've created a workshop that will guide you through all the coding standards that Triple manages and will get you started in a Svelte application.
This also is the main reason that we've set this up.
If you're interested to learn more about Svelte these are some good starting points:

- https://svelte.dev/docs - The official Svelte documentation
- https://learn.svelte.dev - The official Svelte tutorial

## Get the app up and running

To get this app started, always run the following commands:

Install the packages:

```tcl
yarn
```

Start the application:

```tcl
yarn dev --open
```

This will get the app started and running on port `5173`

## The Design

There is a design that is created in Figma. Figma is the tool that we use for all the designs within Triple.
This way you will get to know how to work with Figma and to recreate the design in the web application.
https://www.figma.com/file/dsgGXcu5WELIvRW90m5308/Pokemon-Code-Challenge?node-id=15%3A2863
Only refer to the web designs, the mobile designs can be ignored.

## The API

The app is build on the PokeAPI, all documentation of this API can be found on the following url:
https://pokeapi.co/

## The challenges

To get you started, a small base has already been setup in Svelte, the first API calls are already implemented and from here on you should be able to continue by taking on each challenge step by step.
The most important thing to know is that you can always aks questions to your mentor. This is why they are here, and why they are seated near you. They are already familiar with the challenge and therefore will be able to help you where needed.
Next to that you'll need to know that there is no deadline for this, you can work on the challenges and get to know Svelte on your own tempo. As you can see the user story's are setup with MoSCoW, so not all challenges **must** be done.

With each PR you can 'check' the user story that is related to it, so you have a clear overview of what still needs to be done.

### First Challenge

- [ ] The user must be able to see all the pokemons in the styled overview

  - [ ] The user must be able to see the number of the pokemon
  - [ ] The user must be able to see the image of the pokemon
  - [ ] The user must be able to see an options button

- [ ] The user must be able to use the 'more' popup of a single Pokemon

  - [ ] The user must be able to open and close dropdown
  - [ ] The user must be able to click on `Open Pokemon` button and open a modal

- [ ] The user must be able to open a single Pokemon in a Modal View.

  - [ ] The user must be able to close the Modal View
  - [ ] The user must be able to see the number, name, image and types of a pokemon

- [ ] The user must be able to see all the about and stats of a pokemon in two tabs
  - [ ] The user must be switch between tabs
  - [ ] The user must be able to see more details about the pokemon
  - [ ] The user must be able to see more details about the stats of a pokemon

### Search challenge

- [ ] Search: build the search feature
  - [ ] The user must be able to see a search bar in the sidebar
  - [ ] The user must be able to search for different pokemons

### Routing challenge

- [ ] Routing: change modals to individual pages - Hint -> use SvelteKit
  - [ ] The user must be able to navigate to the pokemon detail page
  - [ ] The user must be able to see the pokemon based on the id

### Favorites challenge

- [ ] Favorites: build the favorites feature
  - [ ] The user must be able to click the a favorite button in the dropdown menu
  - [ ] The user must be able to navigate to the favorites page
  - [ ] The user must be able to see all the favorite pokemons
  - [ ] The user must be able to search the favorite pokemons
