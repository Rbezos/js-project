export function createProjects() {
    const projects = document.createElement('projects');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/proyects.css';
    document.head.appendChild(style);

    projects.innerHTML = `
        <div class="section">
            <div>
                <div class="title">PROYECT</div>
            </div>
        </div>
    `;

    return {
        html: projects,
        callback: () => {

        }
    };
}