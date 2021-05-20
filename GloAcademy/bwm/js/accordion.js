document.addEventListener('DOMContentLoaded', () => {

	//Accordion
	const techCharBtns = document.querySelectorAll('.feature__link');

	techCharBtns.forEach( (item) => {
		item.addEventListener('click', event => {
			
			if(!item.classList.contains('feature__link_active')){
				techCharBtns.forEach( (item) => {
					item.classList.remove('feature__link_active');
					item.parentElement.querySelector('.feature-sub').classList.add('hidden');
				});

				item.classList.add('feature__link_active');
				item.parentElement.querySelector('.feature-sub').classList.remove('hidden');
			}else{
				techCharBtns.forEach( (item) => {
					item.classList.remove('feature__link_active');
					item.parentElement.querySelector('.feature-sub').classList.add('hidden');
				});
			}			
		});
	});

});