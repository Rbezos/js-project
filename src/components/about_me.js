export function createAboutMe() {
    const aboutMe = document.createElement('aboutMe');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/about_me.css';
    document.head.appendChild(style);

    aboutMe.innerHTML = `
        <div class="section">
            <div class="title">ABOUT ME</div>
            <div class="block_info">
                <div class="img_about_me">
                    <img src="../public/assets/login.png">
                </div>
                <div class="info_about_me">
                    <div class="description_about_me">
                        Web Developer with 4 years of experience in designing, managing, and maintaining websites using technologies like
                        HTML, CSS, JavaScript and PHP. I have worked on projects utilizing frameworks such as CodeIgniter, which has given
                        me a comprehensive understanding of web development. I am a committed and proactive individual, always eager to
                        deeply engage in projects and explore new technologies that allow me to grow professionally.
                    </div>
                </div>
            </div>
        </div>
    `;

    return {
        html: aboutMe,
        callback: () => {
            
        }
    };
}