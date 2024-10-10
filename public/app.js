import { createHeader } from '../src/components/header.js';
import { createFooter } from '../src/components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = createHeader();
    const footer = createFooter();
    document.getElementById('main-header').appendChild(header);
    document.getElementById('main-footer').appendChild(footer);
});