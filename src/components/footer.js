
export function createFooter() {
    const footer = document.createElement('footer');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/footer.css';
    document.head.appendChild(style);

    footer.innerHTML = `
        <div class="container">
            <div>
                <p class="title">Contacto</p>
            </div>
            <hr>
            <div class="container-list">
                <div>
                    <ul>
                        <li>Correo: rodrigobezos@gmail.com</li>
                        <li>Telefono: 667325403</li>
                        <li>Direccion: Valladolid, España</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Linkedin: </li>
                        <li>Github: </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    return footer;
}