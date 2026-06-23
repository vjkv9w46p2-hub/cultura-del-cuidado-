// BASE DE DATOS DOCTRINAL DE LOS 4 DOCUMENTOS
const databaseModales = {
    'm-ant2001': `
        <h2 style="color:var(--azul-profundo);margin-bottom:15px;font-family:Cinzel,serif;">Contexto Previo al Año 2001</h2>
        <p><strong>Situación Histórica:</strong> Hasta finales del siglo XX, los delitos cometidos por miembros del clero eran abordados de forma aislada e independiente por cada diócesis[cite: 1]. La aplicación del Código de Derecho Canónico de 1983 era desigual y la gran mayoría de las causas permanecía recluida en el ámbito local[cite: 1].</p>
        <p style="margin-top:10px;"><strong>Emergencia de la Crisis:</strong> Durante las décadas de 1980 y 1990 la aparición pública de múltiples casos en diversos países evidenció que las estructuras locales eran incapaces de proveer soluciones uniformes, céleres y transparentes, provocando una grave crisis de confianza institucional y obligando a idear reformas universales[cite: 1].</p>
    `,
    'm-sst': `
        <h2 style="color:var(--azul-profundo);margin-bottom:15px;font-family:Cinzel,serif;">Sacramentorum Sanctitatis Tutela (2001-2010)</h2>
        <p><strong>Naturaleza y Fin:</strong> Motu Proprio netamente penal promulgado por San Juan Pablo II con el objeto de centralizar los delitos canónicos más graves contra la fe y los sacramentos[cite: 1].</p>
        <p style="margin-top:10px;"><strong>Aportes Principales:</strong> Eleva el abuso sexual de menores a la categoría unificada de <em>delicta graviora</em> y arrebata la potestad discrecional a los obispos locales, obligándolos a remitir toda causa a la Congregación para la Doctrina de la Fe[cite: 1]. Introduce la sanción máxima de expulsión del estado clerical[cite: 1].</p>
        <p style="margin-top:10px;"><strong>Análisis Moral:</strong> Coloca la dignidad del menor en el centro jurídico, determinando que el ministerio sacerdotal constituye una asimetría de autoridad espiritual sagrada; su uso para fines abusivos corrompe la misión y es una traición radical a la confianza depositada por la persona y la comunidad[cite: 1].</p>
    `,
    'm-cma': `
        <h2 style="color:var(--azul-profundo);margin-bottom:15px;font-family:Cinzel,serif;">Como una Madre Amorosa (2016)</h2>
        <p><strong>Naturaleza y Fin:</strong> Motu Proprio del Papa Francisco que introduce la remoción del cargo para obispos y superiores religiosos que hayan sido negligentes en la protección de menores[cite: 1].</p>
        <p style="margin-top:10px;"><strong>Innovación Ética y Moral:</strong> Incorpora al derecho canónico la responsabilidad moral por el <strong>pecado de omisión</strong>, inspirado en el Evangelio de Mateo[cite: 1]. Establece que la autoridad no es un escudo institucional o corporativo, sino un servicio auditable[cite: 1]. Omitir la investigación o trasladar acusados para salvaguardar la imagen institucional quebranta gravemente el bien común y destruye la credibilidad del Evangelio[cite: 1].</p>
    `,
    'm-velm': `
        <h2 style="color:var(--azul-profundo);margin-bottom:15px;font-family:Cinzel,serif;">Vos Estis Lux Mundi (2019-2023)</h2>
        <p><strong>Procedimiento Universal:</strong> Nacido de la Cumbre del Vaticano de 2019, este documento regula de manera taxativa la ruta de detección e investigación de abusos[cite: 2].</p>
        <p style="margin-top:10px;"><strong>Aportes:</strong> Obliga a cada diócesis del planeta a instituir plataformas fijas y seguras para la acogida de denuncias[cite: 2]. Rompe el pacto de silencio confiriendo a los Metropolitanos la potestad legal de investigar formalmente a obispos acusados o encubridores[cite: 2]. En 2023 se consolidó de manera definitiva y permanente, blindando la protección a denunciantes y testigos[cite: 2].</p>
    `,
    'm-pgd': `
        <h2 style="color:var(--azul-profundo);margin-bottom:15px;font-family:Cinzel,serif;">Pascite Gregem Dei (2021)</h2>
        <p><strong>Reforma del Código de Derecho Canónico:</strong> Sustituye de forma integral el Libro VI sobre sanciones penales en la Iglesia, vigente desde 1983[cite: 2].</p>
        <p style="margin-top:10px;"><strong>Efecto Jurídico y Moral:</strong> Tipifica de modo autónomo el abuso de autoridad, la malversación y la omisión deliberada de superiores[cite: 2]. Introduce con vigor los principios de proporcionalidad punitiva y justicia restaurativa, reconociendo que el castigo penal es un imperativo ético de caridad pastoral para sanar el tejido comunitario herido[cite: 2].</p>
    `,
    'm-chile': `
        <h2 style="color:var(--azul-profundo);margin-bottom:15px;font-family:Cinzel,serif;">Caso Chile: De la Crisis a la Cultura del Cuidado</h2>
        <p><strong>Evolución de la CECh:</strong> Frente al colapso de confianza derivado de denuncias e insuficiencias previas, las Líneas Guías "Cuidado y Esperanza" impusieron protocolos uniformes y la colaboración obligatoria con los tribunales civiles estatales[cite: 3].</p>
        <p style="margin-top:10px;"><strong>Punto de Inflexión (2018):</strong> La Carta del Papa Francisco al Pueblo de Dios que peregrina en Chile desnudó las raíces sistémicas del problema: el <strong>clericalismo</strong> y el abuso de conciencia[cite: 3]. En respuesta, la Asamblea de Punta de Tralca ejecutó una autocrítica histórica, asumiendo compromisos de reparación integral, transparencia y la inclusión de laicos y mujeres en los órganos directivos de prevención[cite: 3].</p>
    `,
    'm-ise': `
        <h2 style="color:var(--azul-profundo);margin-bottom:15px;font-family:Cinzel,serif;">Integridad en el Servicio Eclesial (ISE)</h2>
        <p><strong>Marco Antropológico y Preventivo:</strong> Documento del 2020 articulado con el Informe UC que define la integridad como la coherencia entre el discipulado y el comportamiento diario[cite: 4]. Desarrolla directrices fundamentales para desactivar el abuso:</p>
        <ul style="margin-left:20px;margin-top:10px;">
            <li><strong>Orientación 10:</strong> Reconocer la asimetría y desequilibrio de poder inherente al encargo pastoral, ejerciéndolo de forma compasiva y expuesto al escrutinio[cite: 4].</li>
            <li><strong>Orientación 11:</strong> Respetar las fronteras físicas y emocionales, prohibiendo familiaridades opacas y obligando a interactuar en ambientes visibles y abiertos[cite: 4].</li>
            <li><strong>Orientación 12:</strong> El fuero interno es sagrado; el acompañamiento espiritual requiere idoneidad técnica y derivación médica/psicológica inmediata si se requiere[cite: 4].</li>
        </ul>
    `
};

// MODALES CONTROL
function openModal(key) {
    const content = databaseModales[key];
    if(content) {
        document.getElementById('modal-body-content').innerHTML = content;
        document.getElementById('custom-modal').classList.add('active');
    }
}

function closeModal() {
    document.getElementById('custom-modal').classList.remove('active');
}

// MAPA CONCEPTUAL
function showNodeDesc(nodeName, description) {
    const container = document.getElementById('node-display-box');
    container.innerHTML = `<strong>${nodeName}:</strong> ${description}`;
    container.style.borderColor = 'var(--dorado)';
    container.style.background = '#fff';
}

// QUIZ GAMIFICADO CON HISTORIAL DOCTRINAL
const quizQuestions = [
    {
        q: "¿Qué innovación ética introduce el documento 'Como una Madre Amorosa' (2016) para la jerarquía?",
        options: [
            "La centralización de los juicios penales únicamente en el tribunal local.",
            "La remoción del cargo por pecados de omisión y negligencia grave en el cuidado pastoral.",
            "La disolución de los tribunales civiles del Estado."
        ],
        correct: 1
    },
    {
        q: "Según el Informe de la Universidad Católica y el ISE, ¿cómo se define el fenómeno del 'Doble Ciego'?",
        options: [
            "Un procedimiento canónico secreto.",
            "La imposibilidad física de acceder a los expedientes judiciales romanos.",
            "La incapacidad comunitaria de registrar señales de abuso debido a una confianza idolátrica en el clérigo."
        ],
        correct: 2
    },
    {
        q: "¿Cuál es la articulación funcional entre Vos Estis Lux Mundi y Pascite Gregem Dei?",
        options: [
            "Vos Estis Lux Mundi regula el procedimiento y la denuncia; Pascite Gregem Dei establece la tipificación y sanción.",
            "Ambos documentos anulan las directrices previas de Sacramentorum Sanctitatis Tutela.",
            "Son estatutos aplicables únicamente a la Iglesia chilena y latinoamericana."
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    if(currentQuestionIndex >= quizQuestions.length) {
        document.getElementById('quiz-wrapper').classList.add('hidden');
        document.getElementById('certificate-box').classList.remove('hidden');
        return;
    }
    
    const current = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}. ${current.q}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    current.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.classList.add('quiz-opt-btn');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, current.correct, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct, element) {
    const buttons = document.querySelectorAll('.quiz-opt-btn');
    buttons.forEach(b => b.removeAttribute('onclick')); // Bloquear clics adicionales
    
    if(selected === correct) {
        element.classList.add('correct');
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1500);
    } else {
        element.classList.add('wrong');
        buttons[correct].classList.add('correct');
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 2500);
    }
}

// BARRA DE PROGRESO DE NAVEGACIÓN
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + "%";
};

// INICIALIZACIÓN
window.onload = () => {
    loadQuestion();
};