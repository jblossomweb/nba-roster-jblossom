# NBA React Eval - Part 1

![](https://media.giphy.com/media/vOoLte53vWFiO8lDxq/giphy.gif)

## Live App

- Vercel: https://nba-roster-jblossom.vercel.app
- Netlify: https://vigorous-heisenberg-fc4b21.netlify.app

## Developer Quick Start

- install dependencies: `yarn install`
- run dev server: `yarn dev`

### other commands

- run storybook: `yarn storybook`
- build app: `yarn build`
- build storybook: `yarn storybook-build`

## Notes

- there is a basic grid for team rosters. teams load server-side, and players fetch client-side.
- there is an experimental virtualized grid for full league roster and search/filter. teams and players load client-side.

## To Do

- a player page would be nice
- more tests

## Original Instructions

Step 1. Bootstrap a new [NextJS](https://nextjs.org/) site by using `create-next-app`



Step 2. Add [TailwindCSS](https://tailwindcss.com) as a project dependency



Step 3. Create an API endpoint `/api/players`. The endpoint should respond with the contents of `./data/players.json`



Step 4. Create an API endpoint `/api/teams`. The endpoint should respond with the contents of `./data/teams.json`



Step 5. Update `./pages/index.js` to fetch the players and teams API **from the clients browser**. Create a "Loading" component that is visible until both endpoints have been fetched.



Step 6. Create a `PlayerCard` component that matches the design of `./docs/player-card.png`. For each player in the `players` API response, render an instance of this component. (Roboto is the font being used)



Step 7. Use Flex box to render the player cards in a grid, as well as a media query to set the amount of grid columns at various breakpoints

| screens size | columns |
| ------------ | ------- |
| `< 640px`    | 1       |
| `>= 640px`   | 2       |
| `>= 960px`   | 3       |

### Player JSON Schema

| Field    | Description               |
| -------- | ------------------------- |
| pid      | Player ID                 |
| tid      | Team ID                   |
| ln       | Last Name                 |
| fn       | First Name                |
| num      | Jersey Number             |
| pos      | Position                  |
| pts      | Points Per Game           |
| reb      | Rebounds Per Game         |
| ast      | Assists Per Game          |
| stl      | Steals Per Game           |
| headshot | Player Headshot Image URL |


### Team JSON Schema

| Field | Description        |
| ----- | ------------------ |
| tid   | Team ID            |
| city  | Team City          |
| name  | Team Name          |
| color | Primary Team Color |
| logo  | Team Logo Image URL|



### Testing

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
