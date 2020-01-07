import './scss/style.scss';
import moduleSection from './js/body-module.js';

const defaultModuleSection = moduleSection();
const dynamicModuleSection = moduleSection("Dynamic ES6 Module");

document.body.appendChild(defaultModuleSection);
document.body.appendChild(dynamicModuleSection);