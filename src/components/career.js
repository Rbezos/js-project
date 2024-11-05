export function createCareer() {
    const career = document.createElement('career');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/career.css';
    document.head.appendChild(style);

    career.innerHTML = `
        <div class="section">
            <div>
                <div class="title">CAREER</div>
            </div>
        </div>
    `;
    return {
        html: career,
        callback: () => {
        }
    };
}