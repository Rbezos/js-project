export function createAboutMe() {
    const aboutMe = document.createElement('aboutMe');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/about_me.css';
    document.head.appendChild(style);

    aboutMe.innerHTML = `
        <div class="section">
            <div class="title">SOBRE MI</div>
            <div class="info_">
                <div class="img_about_me">
                    <img src="../public/assets/login.png">
                </div>
            </div>
        </div>
    `;

    return aboutMe;
}