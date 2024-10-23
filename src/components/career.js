export function createCareer() {
    const career = document.createElement('career');

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../public/styles/career.css';
    document.head.appendChild(style);

    career.innerHTML = `
        <div class="section purple">
            <div>
                <div class="title">3OES LEADING SOFTWARE</div>
                <div class="knowledge_container">
                    <div class="item">
                        <div class="item_title">ISQUAD / MISQUAD</div>
                        <div class="list_item">
                            <div class="list_item_title">Tecnologias</div>
                            <div class="list_item_desc">
                                Tecnologias Descripción
                            </div>
                        </div>
                        <div class="list_item">
                            <div class="list_item_title">Funciones</div>
                            <div class="list_item_desc">
                                Funciones Descripción
                            </div>
                        </div>
                        <div class="list_item" style="border-bottom:0">
                            <div class="list_item_title">Logros</div>
                            <div class="list_item_desc">
                                Funciones Descripción
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_title">NILLUM</div>
                        <div class="list_item">
                            <div class="list_item_title">Tecnologias</div>
                        </div>
                        <div class="list_item">
                            <div class="list_item_title">Funciones</div>
                        </div>
                        <div class="list_item" style="border-bottom:0">
                            <div class="list_item_title">Logros</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_title">WORDPRESS</div>
                        <div class="list_item">
                            <div class="list_item_title">Tecnologias</div>
                        </div>
                        <div class="list_item">
                            <div class="list_item_title">Funciones</div>
                        </div>
                        <div class="list_item" style="border-bottom:0">
                            <div class="list_item_title">Logros</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return {
        html: career,
        callback: () => {
            const itemTitles = document.querySelectorAll(".list_item_title");
            itemTitles.forEach(itemTitle => {
                itemTitle.addEventListener('click', () => {
                    const desc = itemTitle.nextElementSibling;
                    if (desc && desc.classList.contains('list_item_desc')) {
                        const total_desc = document.querySelectorAll(".list_item_desc");
                        total_desc.forEach(element => {
                            if(element != itemTitle) {
                                element.classList.remove('active');
                            }
                          });
                        desc.classList.toggle("active");
                        
                    }
                });
            });
        }
    };
}