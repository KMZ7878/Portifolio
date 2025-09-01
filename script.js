// Função para mostrar a seção especificada e ocultar as outras
        function showSection(sectionId) {
            // Remove classe 'active' de todas as seções
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Adiciona classe 'active' à seção especificada
            document.getElementById(sectionId).classList.add('active');
            
            // Atualiza links de navegação
            updateActiveNavLink(sectionId);
            
            // Fecha menu mobile se estiver aberto
            closeMobileMenu();
        }

        // Função para atualizar o link ativo na navegação
        function updateActiveNavLink(activeSectionId) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Encontra e ativa o link correspondente à seção
            const activeLink = document.querySelector(`[onclick="showSection('${activeSectionId}')"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        // Função para alternar menu mobile
        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.querySelector('.hamburger');
            
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Função para fechar menu mobile
        function closeMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.querySelector('.hamburger');
            
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }

        // Função para lidar com o envio do formulário
        function handleSubmit(event) {
            // Previne o envio padrão do formulário
            event.preventDefault();
            
            // Coleta dados do formulário
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Simula envio (em um projeto real, aqui seria feita a requisição para o servidor)
            alert(`Obrigado, ${formData.name}! Sua mensagem foi recebida. Retornaremos em breve através do e-mail ${formData.email}.`);
            
            // Limpa o formulário após o envio
            document.querySelector('.contact-form').reset();
        }

        // Event listener para fechar menu mobile ao clicar fora dele
        document.addEventListener('click', function(event) {
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.querySelector('.hamburger');
            
            // Verifica se o clique foi fora do menu e do botão hamburguer
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                closeMobileMenu();
            }
        });

        // Event listener para tecla Escape fechar menu mobile
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Efeito de scroll suave no header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });     