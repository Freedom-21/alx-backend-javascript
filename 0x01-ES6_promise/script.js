import { createComponent } from './component.js';

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const component = createComponent("This is a reusable component!");
    app.appendChild(component);
});
