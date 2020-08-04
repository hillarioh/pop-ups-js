const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.querySelector('.overlay');

openModalButtons.forEach(link => {
    link.addEventListener('click', () => {
        const modal = document.querySelector(link.dataset.modalTarget)
        openModal(modal)
        
    });
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}