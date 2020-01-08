import '../css/style.scss';
import moduleSection from '../js/body-module.mjs';

const body = document.body;
const defaultModuleSection = moduleSection();
const dynamicModuleSection = moduleSection("Dynamic ES6 Module");

body.appendChild(defaultModuleSection);
body.appendChild(dynamicModuleSection);
