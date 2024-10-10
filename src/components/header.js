
export function createHeader() {
    const header = document.createElement('header');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/header.css';
    document.head.appendChild(style);

    header.innerHTML = `
        <div class="container">
            <div class="enlaces">
                <div>Enlace 1</div>
                <div>Enlace 2</div>
                <div>Enlace 3</div>
                <div>Enlace 4</div>
            </div>
            <div>
                <img class="img_login" src="../public/assets/login.png" alt="Logo">
            </div>
        </div>
    `;
    return header;
}