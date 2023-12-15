const openModal = document.querySelector('.modal .modal-btn')
const closeModal = document.querySelector('.modal .close-btn')
const modalOverlay = document.querySelector('.modal .modal-overlay')

openModal.addEventListener('click', () => {
    modalOverlay.classList.toggle('open-modal')
})
closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})