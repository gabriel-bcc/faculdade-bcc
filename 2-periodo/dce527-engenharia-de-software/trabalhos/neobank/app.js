/* JS do MVP NeoBank+
    Autor: Gustavo Zimmermann
    Responsável pela navegação SPA, modo escuro e simulações.
*/

document.addEventListener('DOMContentLoaded', () => {

    // Seletores dos elementos principais
    const navLinks = document.querySelectorAll('.nav-link');
    const logoLink = document.querySelector('.logo-link');
    const pages = document.querySelectorAll('.page');
    
    // Tempo da animação (ms). Tem que ser igual ao do CSS!
    const transitionTime = 300; 

    // --- LÓGICA DE NAVEGAÇÃO (SPA) ---
    
    /**
     * Função principal que controla a troca de páginas (SPA)
     * @param {string} pageId - O ID da página para mostrar (ex: 'home', 'dashboard')
     */
    function showPage(pageId) {
        const currentPage = document.querySelector('.page.active');
        const nextPage = document.getElementById(pageId + '-page');

        // Proteção para links quebrados
        if (!nextPage) {
            console.error(`Página com ID "${pageId}-page" não encontrada.`);
            return;
        }

        // Não faz nada se já estamos na página
        if (currentPage && currentPage.id === nextPage.id) {
            return;
        }
        
        // Atualiza o link 'active' no menu de navegação
        navLinks.forEach(nav => nav.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Controla a animação de fade-out/fade-in
        if (currentPage) {
            // 1. Inicia o fade-out da página atual
            currentPage.classList.remove('visible');

            // 2. Espera a animação de fade-out terminar
            setTimeout(() => {
                // 3. Esconde a página antiga
                currentPage.classList.remove('active'); 

                // 4. Mostra a página nova (ainda invisível)
                nextPage.classList.add('active');
                
                // 5. Delay mínimo para forçar o 'reflow' e a animação de 'fade-in' funcionar
                setTimeout(() => {
                    nextPage.classList.add('visible');
                }, 10); 

            }, transitionTime);
        } else {
            // Se for a primeira página a carregar
            nextPage.classList.add('active');
            setTimeout(() => {
                nextPage.classList.add('visible');
            }, 10);
        }
    }

    // Adiciona o clique em todos os links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o link de recarregar a página
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Adiciona o clique no logo para voltar pra home
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('home');
    });

    // --- LÓGICA DO MODO ESCURO ---

    const themeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    /**
     * Aplica o tema (dark/light) e salva no localStorage
     * @param {string} theme - 'dark' ou 'light'
     */
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; // Ícone de sol
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙'; // Ícone de lua
            localStorage.setItem('theme', 'light');
        }
    }

    // Puxa o tema salvo no navegador ou usa 'dark' como padrão
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // Adiciona o clique no botão de tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // --- LÓGICA DAS SIMULAÇÕES ---

    // Simulação de Cadastro
    const formCadastro = document.getElementById('form-cadastro');
    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário
        const successMessage = document.getElementById('cadastro-success');
        successMessage.style.display = 'block';

        // Simula um "loading" e redireciona
        setTimeout(() => {
            successMessage.style.display = 'none';
            formCadastro.reset();
            showPage('dashboard'); // Manda o usuário para o dashboard após o "cadastro"
            
            // Esconde o alerta de fraude (já que é uma conta nova)
            const alerta = document.getElementById('alerta-fraude');
            if (alerta) alerta.style.display = 'none';
        }, 2000);
    });

    // Simulação de PIX Mockado
    const formPix = document.getElementById('form-pix');
    formPix.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMessage = document.getElementById('pix-success');
        successMessage.style.display = 'block';
        
        setTimeout(() => {
            successMessage.style.display = 'none';
            formPix.reset();
        }, 2000);
    });

    // Simulação de Emissão de Cartão Virtual Mockado
    const btnEmitirCartao = document.getElementById('btn-emitir-cartao');
    const cartaoVirtual = document.getElementById('cartao-virtual');
    
    btnEmitirCartao.addEventListener('click', () => {
        cartaoVirtual.style.display = 'flex'; // Exibe o cartão
        btnEmitirCartao.style.display = 'none'; // Esconde o botão
    });

    // Define a 'home' como a página inicial ao carregar o site
    showPage('home'); 
});