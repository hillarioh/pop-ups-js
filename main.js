const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('.overlay');
let active = '';

openModalButtons.forEach(link => {
    link.addEventListener('click', () => {
        const modal = document.querySelector(link.dataset.modalTarget);
        openModal(modal);        
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click',()=> {
        const modal = button.closest('.item');
        closeModal(modal);
    });
});

overlay.addEventListener('click',()=>{
    const modals = document.querySelectorAll(active);
    // console.log(active)
    modals.forEach(modal => {
        closeModal(modal)
    })
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    active = `#${modal.id}.active`;
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal==null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

