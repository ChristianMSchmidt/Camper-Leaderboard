# Camper Leaderboard
 A Camper Leaderboard for [freeCodeCamps React Projects](https://www.freecodecamp.com/challenges/build-a-camper-leaderboard)  

## User-Stories:
- I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.
- I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.
- I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

## Uses:
- [babel](https://babeljs.io/) to compile Javascript
- [webpack](https://webpack.js.org/) with the [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin#api) to bundle all the `.js`-files and compile/extract `.scss`-files
- [react](https://facebook.github.io/react/) to build the site and [react-router](https://github.com/ReactTraining/react-router) as router


## File Structure:
```
.
├ .gitignore
├ package.json
├ README.md
├ webpack.config.js
└ src
  ├ server.js
  ├ routes.js
  ├ client.js
  ├ components
  | ├ 404.js
  | ├ AppRoutes.js
  | ├ Layout.js
  | ├ Table.js
  | ├ FirstRow.js
  | └ TableRows.js
  |
  └ scss
    ├ style.scss
    ├ Layout.scss
    ├ table.scss
    ├ max-width-630.scss
    └ 404.scss
```