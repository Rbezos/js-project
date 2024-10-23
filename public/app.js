import { createHeader } from '../src/components/header.js';
import { createFooter } from '../src/components/footer.js';
import { createMain } from '../src/components/main.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = createHeader();
    const footer = createFooter();
    const main = createMain();

    document.getElementById('main-header').appendChild(header.html);
    document.getElementById('app').appendChild(main.html);
    document.getElementById('main-footer').appendChild(footer);

    header.callback(); 
    main.callback(); 
});