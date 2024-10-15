import { createHeader } from '../src/components/header.js';
import { createFooter } from '../src/components/footer.js';
import { createMain } from '../src/components/main.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = createHeader();
    const footer = createFooter();
    const main = createMain();

    document.getElementById('main-header').appendChild(header);
    document.getElementById('app').appendChild(main);
    document.getElementById('main-footer').appendChild(footer);
});