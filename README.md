# webpack-boilerplate
## Webpack Boilerplate for HTML, CSS, and JavaScript Projects
### Build with Lodash, Sass, and ES6
---

Clone this boilerplate for a default modern developer environment.

### Basic Use
* Run NPM Scripts on command line in cloned directory to Install Node Packages and Start Developer Environment:
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
* Development Environment clears [dist folder](https://github.com/benmcnulty/webpack-boilerplate/blob/master/dist/) and serves bundle from memory with live-reloading.
* Production Preview builds to [dist folder](https://github.com/benmcnulty/webpack-boilerplate/blob/master/dist/) and serves a transpiled, concatenated, minified bundle.
* View Default Output: [gh-pages](https://benmcnulty.github.io/webpack-boilerplate/)

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
