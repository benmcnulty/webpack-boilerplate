# webpack-boilerplate
## Webpack Boilerplate for HTML, CSS, and JavaScript Projects
### Build with Lodash, Sass, and ES6
---

Clone this repository for a default modern web development environment.

This template includes preconfigured tooling to reduce friction when starting a frontend project.

Working understandings of Git, CLI, Node, HTML, CSS, and JavaScript are required,
NPM, Webpack, Lodash, Sass, and ES6 are recommended.

### General Use
1. Use this repository as a template for creating a new repository.
2. Clone the new repository to a local development folder.
3. Run NPM Scripts from command line in cloned folder to *Install* Node Packages and *Start* Development Environment:
```sh
npm install && npm start
```

* Add HTML5 Elements directly to [index.inc](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/html/index.inc) and/or include Lodash Templating
* Add CSS3 Styles directly to [style.scss](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/css/style.scss) and/or include Sassy CSS
* Add JavaScript directly to [index.js](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/js/index.js) and/or include ES6 Modules

### Modular Use
* Example ES6 Module: [body-module.mjs](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/js/body-module.mjs)
* Example Sass Module imported in ES6 Module: [body-module.scss](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/css/body-module.scss)

### Current Build Tooling
* NPM Scripts Build Processes: [package.json](https://github.com/benmcnulty/webpack-boilerplate/blob/master/package.json)
* Webpack Dev Environment & Bundler: [webpack.config.js](https://github.com/benmcnulty/webpack-boilerplate/blob/master/webpack.config.js)
* HTML from Lodash Template: [index.inc](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/html/index.inc)
* CSS from Sass Stylesheet: [style.scss](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/css/style.scss)
* JavaScript from Webpack Bundle: [index.js](https://github.com/benmcnulty/webpack-boilerplate/blob/master/src/js/index.js)

### Additional Tooling
* Transpiling with Babel
* Linting with JSHint

### Build Notes
* Development environment clears [docs folder](https://github.com/benmcnulty/webpack-boilerplate/blob/master/docs/) and serves bundle from memory with live-reloading.
* Production builds to [docs folder](https://github.com/benmcnulty/webpack-boilerplate/blob/master/docs/) and locally serves a transpiled, concatenated, minified bundle.
* Latest production build is public on GitHub Pages: [gh-pages](https://benmcnulty.github.io/webpack-boilerplate/)

### NPM Scripts
#### Install Node Packages
```sh
npm install
```

#### Start Developer Environment
```sh
npm start
```

#### JavaScript Linting
```sh
npm run lint
```

#### Production Build & Preview
```sh
npm run start:prod
```
