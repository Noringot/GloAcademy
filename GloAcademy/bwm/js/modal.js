// Modal
const modalWin = document.querySelector('.modal');
const moreBtn = document.querySelector('.more');
const modalCloseEl = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');

const openModal = () => {
	modalWin.classList.remove('hidden');
	document.body.style.overflow = 'hidden';
	document.addEventListener('keydown', modalCloseKeydown);
};
const closeModal = () => {
	modalWin.classList.add('hidden');
	document.body.style.overflow = '';
	document.removeEventListener('keydown', modalCloseKeydown);
};
function modalCloseKeydown(event) {
	if (event.code == 'Escape'){
		closeModal();
	}
}

moreBtn.addEventListener('click', openModal);
modalCloseEl.addEventListener('click', closeModal);
modalWin.addEventListener('click', event => {
	if (event.target.classList.contains('overlay')){
		closeModal();
	}
});
modalForm.addEventListener('submit', e => {
	e.preventDefault();
	modalForm.reset();
	closeModal();
});