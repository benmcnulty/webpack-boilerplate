import '../css/body-module.scss';
export default (text = "Default ES6 Module") => {
    const moduleSection = document.createElement("section");
    const textBox = document.createElement("p");
    textBox.innerHTML = text;

    moduleSection.classList.add("module-block");
    textBox.classList.add("module-element");

    moduleSection.appendChild(textBox);
    return moduleSection;
};
