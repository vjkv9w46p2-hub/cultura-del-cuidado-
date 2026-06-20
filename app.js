document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Alternador de Modo Claro / Modo Oscuro ---
    const themeToggle = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const modeText = themeToggle.querySelector('.mode-text');

    themeToggle.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-theme');
        if (bodyElement.classList.contains('dark-theme')) {
            modeText.textContent = 'Modo Claro';
        } else {
            modeText.textContent = 'Modo Oscuro';
        }
    });

    // --- 2. Despliegue de Tarjetas Interactivas (Magisterio) ---
    const cardButtons = document.querySelectorAll('.btn-card-toggle');
    
    cardButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const expandedContent = card.querySelector('.card-expanded-content');
            
            expandedContent.classList.toggle('hidden');
            
            if (expandedContent.classList.contains('hidden')) {
                button.textContent = 'Ver más resumen';
            } else {
                button.textContent = 'Ocultar información';
            }
        });
    });

    // --- 3. Buscador Global Inteligente ---
    const globalSearch = document.getElementById('global-search');
    const searchBtn = document.getElementById('search-btn');

    function performSearch() {
        const query = globalSearch.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.card');
        const accordionItems = document.querySelectorAll('.accordion-item');

        // Búsqueda en tarjetas
        cards.forEach(card => {
            const searchData = card.getAttribute('data-search') || '';
            const textContent = card.textContent.toLowerCase();
            if (textContent.includes(query) || searchData.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Búsqueda en acordeón canónico
        accordionItems.forEach(item => {
            const canonData = item.getAttribute('data-canon') || '';
            const textContent = item.textContent.toLowerCase();
            if (textContent.includes(query) || canonData.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchBtn.addEventListener('click', performSearch);
    globalSearch.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // --- 4. Filtro de Cánones Específico ---
    const canonFilter = document.getElementById('canon-filter');
    canonFilter.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.accordion-item');
        
        items.forEach(item => {
            const match = item.getAttribute('data-canon').toLowerCase().includes(value) || 
                          item.textContent.toLowerCase().includes(value);
            item.style.display = match ? 'block' : 'none';
        });
    });

    // --- 5. Acordeón Desplegable (Derecho Canónico) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const body = header.nextElementSibling;
            const icon = header.querySelector('.icon');

            header.setAttribute('aria-expanded', !isExpanded);
            body.classList.toggle('hidden');
            icon.textContent = isExpanded ? '+' : '−';
        });
    });

    // --- 6. Sistema de Navegación por Pestañas (Tabs de Chile) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => content.classList.add('hidden'));

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            document.getElementById(targetTab).classList.remove('hidden');
        });
    });

    // --- 7. Mapa Conceptual Interactivo Base de Datos ---
    const nodesData = {
        prevencion: {
            title: "Cultura de la Prevención y Buen Trato",
            desc: "Basado en el documento ISE (2020). Consiste en establecer un marco ético de 20 orientaciones obligatorias, fijando límites emocionales y físicos claros y un entorno seguro para la acción pastoral."
        },
        denuncia: {
            title: "Obligatoriedad de Denuncia",
            desc: "Mandato universal decretado en 'Vos estis lux mundi'. Clérigos y religiosos tienen la obligación jurídica estricta de denunciar inmediatamente cualquier indicio de abuso o encubrimiento formal ante canales competentes."
        },
        acompanamiento: {
            title: "Acompañamiento Espiritual Integral",
            desc: "Protección del fuero interno. Quien realice acompañamiento espiritual debe disponer de supervisión profesional, salvaguardando estrictamente la asimetría de poder para evitar manipulaciones de conciencia o controles relacionales indeseados."
        },
        justicia: {
            title: "Justicia y Reparación",
            desc: "Tránsito hacia el modelo penal definitivo ('Pascite Gregem Dei'). Se elimina el Secreto Pontificio para coordinar esfuerzos transparentes con la justicia civil del Estado, enfocando el proceso en el resguardo ontológico de la víctima."
        }
    };

    const mapNodes = document.querySelectorAll('.map-node');
    const placeholderText = document.getElementById('map-placeholder');
    const realContent = document.getElementById('map-real-content');
    const nodeTitle = document.getElementById('node-title');
    const nodeDesc = document.getElementById('node-desc');

    mapNodes.forEach(node => {
        node.addEventListener('click', () => {
            const key = node.getAttribute('data-node');
            if (nodesData[key]) {
                placeholderText.classList.add('hidden');
                realContent.classList.remove('hidden');
                nodeTitle.textContent = nodesData[key].title;
                nodeDesc.textContent = nodesData[key].desc;
            }
        });
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});
// --- 8. Contadores Animados ---
const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {

    const target = parseInt(counter.textContent);

    let current = 0;

    const updateCounter = () => {

        if(current < target){

            current++;
            counter.textContent = current;

            setTimeout(updateCounter, 80);
        }
    };

    counter.textContent = "0";

    updateCounter();
});