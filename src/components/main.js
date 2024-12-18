
import { createSidebar } from '/src/components/sidebar.js';
import { createAboutMe } from '/src/components/about_me.js';
import { createCareer } from '/src/components/career.js';
import { createProjects } from '/src/components/projects.js';

export function createMain() {
    const main = document.createElement('main');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/main.css';
    document.head.appendChild(style);

    const sidebar = createSidebar();
    const aboutMe = createAboutMe();
    const career = createCareer();
    const proyects = createProjects();

    main.innerHTML = `
        <div>
            <div class="sidebar_container">
            ${sidebar.outerHTML}
            </div>
            <div class="container">
                <div id="about_me">
                ${aboutMe.html.outerHTML}
                </div>
                <div id="career">
                ${career.html.outerHTML}
                </div>
                <div id="proyects">
                ${proyects.html.outerHTML}
                </div>
            </div>
        </div>
    `;

    return {
        html: main,
        callback: () => {
        }
    }
}