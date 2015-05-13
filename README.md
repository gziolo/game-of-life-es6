Conway's Game of life [![Build Status](https://travis-ci.org/gziolo/game-of-life-es6.png?branch=master)](https://travis-ci.org/gziolo/game-of-life-es6) [![npm version](https://badge.fury.io/js/game-of-life-es6.svg)](http://badge.fury.io/js/game-of-life-es6)
============
ES6 JavaScript algorithm implementation. More details can be found on my blog in the post [Using JavaScript ES6 in practice](http://gziolo.pl/2015/05/13/using-javascript-es6-in-practice/).

## Installation

You can install *Game of life* using npm:

```
npm install -g game-of-life-es6
```

## Usage

#### Node

```js
var GameOfLife = require('game-of-life-es6'),
  world = new GameOfLife.World(1, 1);
```

#### Browser

```html
<script src="dist/bundle.js"></script>
<script>
  var world = new GameOfLife.World(1, 1);
</script>
```

## API 

Please check [API Documentation](https://github.com/gziolo/game-of-life-es6/blob/master/lib/README.md) for more details.

## Rules ##

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbours dies, as if caused by under-population.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overcrowding.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

## Good coding pratices ##

According to Kent Back four rules for a simple system are in order (most important first):

1. Run all the tests
2. Contain no duplicate code
3. Express all the ideas the author wants to express
4. Minimize classes and methods

SOLID principles:

1. Single Responsibility (SRP): ```A class (component) should have one, and only one, reason
to change```.
2. Open-Closed (OCP): ```A system should be open for extension, but closed for
modification```.
3. Liskov Substitution (LSP): ```Derived types should be substitutable for their base types```.
4. Interface Segregation (ISP): ```Abstractions should not depend upon details. Details should depend upon abstractions```.
5. Dependency Inversion (DIP): ```Interfaces should be small, focused on a specific use case```. 

The DRY (Don't Repeat Yourself) Principle states:

```
Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
```

## Contributing

### Requirements

- Node 0.12.x or io.js 1.x
- grunt-cli: run npm install -g grunt-cli if needed.
- Windows only: remember to set Git and Node path in environment variable %PATH%.

### Grunt tasks

- `grunt dependencies` - helps to update package.json file
- `grunt spec` - lints the code and runs unit tests 
- `grunt build` - lints the code, runs unit tests, creates `dist/bundle.js` transformed ES5 code
- `grunt` - runs `grunt build`

## Useful Links

### General
- [Game of Life (Wikipedia)](http://en.wikipedia.org/wiki/Conway's_Game_of_Life)
- [Coderetreat](http://coderetreat.org/)
- [Legacy Code Retreat - Rescuing legacy code without fear](http://legacycoderetreat.typepad.com/)

### Code Design
- [Principles of Object Oriented Design](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)
- [Is Design Dead? - article by Martin Fowler](http://martinfowler.com/articles/designDead.html)
- [Don't Repeat Yourself](http://c2.com/cgi/wiki?DontRepeatYourself)
- [XP Simplicty Rules](http://c2.com/xp/XpSimplicityRules.html)
- [Understanding the Four Rules of Simple Design - book by Corey Haines](https://leanpub.com/4rulesofsimpledesign)
- [The Four Elements of Simple Design](http://www.jbrains.ca/permalink/the-four-elements-of-simple-design)

### ES6

- [Overview of ECMAScript 6 features](https://github.com/lukehoban/es6features)
- [An aggregation of tooling for ES6](https://github.com/addyosmani/es6-tools)
- [ECMAScript 6 new features overview & comparison](http://es6-features.org/)
- [ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/)

#### Articles
- [Using JavaScript ES6 in practice](http://gziolo.pl/2015/05/13/using-javascript-es6-in-practice/)
- [Variables and scoping in ECMAScript 6](http://www.2ality.com/2015/02/es6-scoping.html)
- [Classes in ECMAScript 6](http://www.2ality.com/2015/02/es6-classes-final.html)
- [ES6 generators in depth](http://www.2ality.com/2015/03/es6-generators.html)
- [Iterables and iterators in ECMAScript 6](http://www.2ality.com/2015/02/es6-iteration.html)
- [ECMAScript 6 modules: the final syntax](http://www.2ality.com/2014/09/es6-modules-final.html)
- [Practical Workflows for ES6 Modules - article by Guy Bedford](http://guybedford.com/practical-workflows-for-es6-modules)
- [Author In ES6, Transpile To ES5 As A Build-step: A Workflow For Grunt](http://addyosmani.com/blog/author-in-es6-transpile-to-es5-as-a-build-step-a-workflow-for-grunt/)
- [Using Grunt & the ES6 Module Transpiler](http://www.thomasboyt.com/2013/06/21/es6-module-transpiler)
- [ES6 modules today with Babel (6TO5)](http://es6rocks.com/2014/10/es6-modules-today-with-6to5/)
- [Lint Like It’s 2015 (babel-eslint)](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)

#### Books
- [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read/)
- [Exploring ES6: Upgrade to the next version of JavaScript](http://exploringjs.com/)
- [You Don't Know JS: ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)
- [JavaScript Allongé, The "Six" Edition](https://leanpub.com/javascriptallongesix)
- [Learn JavaScript Isomorphic App Development](https://leanpub.com/learn-javascript-react-nodejs-es6/)

#### Tools
- [Traceur](https://github.com/google/traceur-compiler)
- [Babel](https://babeljs.io/)
- [An ES6 Module Loader polyfill](https://github.com/ModuleLoader/es6-module-loader)

#### Examples
- [Traceur-TodoMVC – a Backbone.js app written with ES6](http://addyosmani.com/blog/traceur-todomvc/)

[More resources to learn ECMAScript 6!](https://github.com/ericdouglas/ES6-Learning)

### Grunt tasks
- [Grunt](http://gruntjs.com/)
- [ESLint](http://eslint.org/)
- [Karma](http://karma-runner.github.io/)
- [Mocha](http://visionmedia.github.io/mocha/)
- [ChaiJS online test suite](http://chaijs.com/api/test/)
- [Sinon docs](http://sinonjs.org/docs/)
- [Grunt basics](http://24ways.org/2013/grunt-is-not-weird-and-hard/)
- [How to squeeze the most out of your build configuration](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)
- [Testing Asynchronous JavaScript](http://martinfowler.com/articles/asyncJS.html)
