import '../scss/body-module.scss';
export default (text = "Boilerplate for HTML, SASS, and ES6 Webpack Projects") => {
    const element = document.createElement("p");
    element.innerHTML = text;
    return element;
};
