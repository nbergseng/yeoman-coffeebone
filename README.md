#Yeoman Coffeebone generator

yeoman-coffeebone is a set of generators for yeoman, that can help create rapid prototypes with a nodejs/mongodb backend, and a backbone.js frontend.

##Requirements

- [Node.js](http://nodejs.org) (and npm)
- [Mongodb](http://www.mongodb.org)
- [yeoman](http://yeoman.io)

##What is it?

A set of generators that reflect some of my (ever changing) opinions on how to structure a backbone app, with a nodejs/mongodb backend.

The app created will have configuration in package.json

- Backend using express.js and mongodb (mongoose)
- Frontend and backend code is in CoffeeScript (thats the coffee part of the name)
- Frontend uses backbone (thats the bone part of the name)
- Frontend code is structures in AMD modules, and uses require.js to build a production javascript file.
- Frontend templates uses handlebars, that are inlined in the production js build
- Compass version of Twitter Bootstrap is included, along with all jquery-plugins from Bootstrap

There are generators for creating

- backbone models, views and collections
- express routes
- mongoose schemas
- rest endpoints (with autowiring of schema,route,collection and model)

##What is it not?

A framework!? Nope, it is just opinions, and generators.

##How to use it?

Take a look at [coffeebone.com](http://www.coffeebone.com).

##Things to come?

- backend generator configuration (I want this to work with rails/postgress as well as with nodejs/mongodb)
- inclusion of marionette

##How to help?

Send me feedback, any way you prefer. Or [create a issue here](https://github.com/clauswitt/yeoman-coffeebone/issues?state=open). I am also open to pull requests, and suggestions on how to make the whole coffeebone experience better. (I am still learning about yeoman generators).
