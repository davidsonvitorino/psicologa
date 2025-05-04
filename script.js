// Menu Mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
  });

  // Fechar menu ao clicar em link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav ul').classList.remove('show');
    });
  });

  // Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
  });

  // Formulário de agendamento
const formAgendamento = document.getElementById('form-agendamento');
const modalAgendamento = document.getElementById('modal-agendamento');
const closeModal = document.querySelector('.close-modal');
const fecharModalBtn = document.getElementById('fechar-modal');

formAgendamento.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você pode adicionar validações adicionais
    
    // Simular envio do formulário
    modalAgendamento.style.display = 'flex';
    
    // Limpar formulário
    this.reset();
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modalAgendamento.style.display = 'none';
});

fecharModalBtn.addEventListener('click', () => {
    modalAgendamento.style.display = 'none';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modalAgendamento) {
        modalAgendamento.style.display = 'none';
    }
});

// Formulário de Contato
const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você pode adicionar validações e lógica de envio
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Adicionar classe ao header quando scrollar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Adicionar isso ao CSS para o header scrolled
// header.scrolled {
//     padding: 10px 0;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }