
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
                <div>Home</div>
                <div>About me</div>
                <div>Career</div>
                <div>Proyects</div>
                <div>Contact</div>
            </div>
            <div>
                <img class="img_login" src="../public/assets/login.png" alt="Logo">
            </div>
        </div>
    `;



    return {
        html: header,
        callback: () => {
            const btn_burguer_menu = header.querySelector('#burger');
            btn_burguer_menu.addEventListener('change', () => {
                const sidebar = document.querySelector('.sidebar');
                const sidebar_overlay = document.querySelector('.sidebar_overlay');
                sidebar.classList.toggle('active');
                sidebar_overlay.classList.toggle('active');
            });
            const sidebar_overlay = document.querySelector('.sidebar_overlay');
            sidebar_overlay.addEventListener('click', () => {
                btn_burguer_menu.click();
            });
        }
    };
}