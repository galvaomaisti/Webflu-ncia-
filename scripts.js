document.addEventListener('DOMContentLoaded', function () {
    const voltarTopo = document.querySelector('.voltar-topo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            voltarTopo.classList.add('show');
        } else {
            voltarTopo.classList.remove('show');
        }
    });

    const links = document.querySelectorAll('header ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Ajuste para altura do cabeçalho
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('ativo');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('ativo');
            }
        });
    });
});
