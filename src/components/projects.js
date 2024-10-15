export function createProjects() {
    const projects = document.createElement('projects');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/sidebar.css';
    document.head.appendChild(style);

    projects.innerHTML = `
        PROYECTOS
    `;

    return projects;
}