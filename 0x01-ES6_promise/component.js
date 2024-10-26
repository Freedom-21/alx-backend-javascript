import config from './config.js';

export function createComponent(text) {
    const element = document.createElement("div");
    element.textContent = text;
    element.style.color = config.themeColor;
    return element;
}
