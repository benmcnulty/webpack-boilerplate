# webpack-boilerplate
## Webpack Boilerplate for HTML, CSS, and JavaScript Projects
### Build with Lodash, Sass, and ES6
---
  
Clone this repository for a default modern web development environment.  
This template includes preconfigured tooling to reduce friction when starting a frontend project.  
Working understanding of Git, CLI, Node, HTML, CSS, and JavaScript are required.  
NPM, Webpack, Lodash, Sass, and ES6 are recommended.  
  

**Attention Junior Developers**  
Don't worry about understanding everything about each of the tools in use here, 
that knowledge will be gained through experience. 
You can use this boilerplate to write HTML ([index.inc](/src/html/index.inc)), CSS ([style.scss](/src/css/style.scss)), and JavaScript ([index.js](/src/js/index.js)) without getting overwhelmed with the details of templating, preprocessing, or modules.  
  
Nevertheless, those higher level concepts and tools enable us to write reusable code that works across most browsers with less effort; you will want to level up to using them sooner than later. When you feel ready, this boilerplate was built to assist in that process as well.  
  
*The file extension .inc denotes a file with HTML markup that is not a complete .html document. The file extension .scss handles plain CSS right alongside the Sassy stuff. Some JavaScript files use the .mjs extension to indicate they are ES6 modules. Generic HTML, CSS, and JavaScript will work in their respective files.*
  
Feel free to reach out on Twitter if you have questions, are struggling, or just want to chat with someone who also thinks in code. I'm happy to know this template is in use and even happier to help you use it.  
  
[@benmcnulty](https://twitter.com/BenMcNulty)  
&nbsp;  
&nbsp;  

### Getting Started
1. Use this repository as a template for creating a new repository.
2. Clone the new repository to a local development folder.
3. Run NPM Scripts from a command line in your cloned folder to *Install* Node Packages and *Start* Development Environment:
```sh
npm install && npm start
```
  
### General Use
* Add HTML5 Elements directly to [index.inc](/src/html/index.inc) and/or include Lodash Templating
* Add CSS3 Styles directly to [style.scss](/src/css/style.scss) and/or include Sassy CSS
* Add JavaScript directly to [index.js](/src/js/index.js) and/or include ES6 Modules
  
### Modular Use
* Example ES6 Module: [body-module.mjs](/src/js/body-module.mjs)
* Example Sass Module imported in ES6 Module: [body-module.scss](/src/css/body-module.scss)
  
### Current Build Tooling
* NPM Scripts Build Processes: [package.json](/package.json)
* Webpack Dev Environment & Bundler: [webpack.config.js](/webpack.config.js)
* HTML from Lodash Template: [index.inc](/src/html/index.inc)
* CSS from Sass Stylesheet: [style.scss](/src/css/style.scss)
* JavaScript from Webpack Bundle: [index.js](/src/js/index.js)
  
### Additional Tooling
* Transpiling with Babel
* Linting with JSHint
  
### Build Notes
* Development environment clears [docs](/docs/) folder and serves bundle from memory with live-reloading.
* Production builds to [docs](/docs/) folder for publishing to GitHub Pages and locally serves a transpiled, concatenated, minified bundle.
* Default production build is public on GitHub Pages: [Webpack Boilerplate](https://benmcnulty.github.io/webpack-boilerplate/)
  
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
  