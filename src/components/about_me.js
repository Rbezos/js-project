export function createAboutMe() {
    const aboutMe = document.createElement('aboutMe');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/sidebar.css';
    document.head.appendChild(style);

    aboutMe.innerHTML = `
        ABOUT ME
    `;

    return aboutMe;
}