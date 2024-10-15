export function createCareer() {
    const career = document.createElement('career');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/sidebar.css';
    document.head.appendChild(style);

    career.innerHTML = `
        CAREER
    `;

    return career;
}