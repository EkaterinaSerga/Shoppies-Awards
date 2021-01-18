# The Shoppies: Movie awards for entrepreneurs

## About

Welcome to 'The Shoppies'. The Shoppies is a small web application that allows users to search for a movie title and save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

This project was created with [Fullstack Academy Boilermaker](https://github.com/FullstackAcademy/boilermaker) as a starting point.

It utilizes React on the front-end and Node.js on the back-end making calls to an external OMDB API. To be able to store information about nominations list and user's nominations I added an Express server and a postgres database.

## How to run the project

In the project directory, please run the following commands in the presented order:

* `npm install`
* Make sure your Postgres database is running!
* Create 2 databases: `createdb shoppies-awards` & `createdb shoppies-awards-test`(the second one is used for running tests)
* Create a file called `secrets.js` in the project root to fill in missing values for environmental variables
* Seed the database: `npm run seed` (please bear in mind that database will re-seed every time you run this command)
* Start the server and run the app in the development mode: `npm run start-dev`
* Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

Hope you enjoy the app!

### Authors:

**Ekaterina Serga** - _Initial work_ - [EkaterinaSerga](https://github.com/ekaterinaSerga)
