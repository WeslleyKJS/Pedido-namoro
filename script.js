// Função para ativar animações de rolagem usando Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Adiciona um pouco de tempo para animações
    const introSection = document.getElementById('intro');
    window.addEventListener('load', () => {
        introSection.style.opacity = '1';
    });
});
