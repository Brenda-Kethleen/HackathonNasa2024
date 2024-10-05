function navigateTo(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            section.scrollIntoView({ behavior: 'smooth' }); // Navegação suave
        } else {
            section.classList.add('hidden');
        }
    });
}

function calculateImpact() {
    const electronics = document.getElementById('electronics').value || 0;
    const clothes = document.getElementById('clothes').value || 0;
    const vehicles = document.getElementById('vehicles').value || 0;

    // Exemplo de cálculo de impacto - pode ser ajustado
    const totalImpact = (electronics * 100) + (clothes * 50) + (vehicles * 1000);

    document.getElementById('result').innerHTML = `Seu impacto estimado é de ${totalImpact} kg de CO2.`;
}
