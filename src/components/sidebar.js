export function createSidebar() {
    const sidebar = document.createElement('sidebar');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/sidebar.css';
    document.head.appendChild(style);

    sidebar.innerHTML = `
        <div class="sidebar">
            <div>HOME</div>
            <div>SOBRE MI</div>
            <div>TRAYECTORIA</div>
            <div>PROYECTOS</div>
            <div>CONTACTO</div>
        </div>
        <div class="sidebar_overlay"></div>
    `;

    return sidebar;
}