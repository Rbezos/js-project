
export function createHeader() {
    const header = document.createElement('header');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/header.css';
    document.head.appendChild(style);

    header.innerHTML = `
        <div class="container">
            <div id="burguer_menu">
                <label class="burger" for="burger">
                    <input type="checkbox" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div class="enlaces">
                <div>HOME</div>
                <div>SOBRE MI</div>
                <div>TRAYECTORIA</div>
                <div>PROYECTOS</div>
                <div>CONTACTO</div>
            </div>
            <div>
                <img class="img_login" src="../public/assets/login.png" alt="Logo">
            </div>
        </div>
    `;

    const btn_burguer_menu = header.querySelector('#burger');
    btn_burguer_menu.addEventListener('change', () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    });

    return header;
}