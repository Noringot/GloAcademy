document.addEventListener('DOMContentLoaded', () => {


	const techCharBtns = document.querySelectorAll('.feature__link'),
			overflow = document.querySelectorAll('.feature__item');
	
	overflow.forEach( (item) =>{
		// item.style.overflow = 'hidden';
	});

	techCharBtns.forEach( (item) => {
		item.addEventListener('click', event => {
			
			if(!item.classList.contains('feature__link_active')){
				remove();
				active(item);
			}else{
				remove();
			}
			
			
		});
	});

	function active(item) {
		item.classList.add('feature__link_active');
		item.parentElement.querySelector('.feature-sub').classList.remove('hidden');
	}

	function remove() {
		techCharBtns.forEach( (item) => {
			item.classList.remove('feature__link_active');
			item.parentElement.querySelector('.feature-sub').classList.add('hidden');
		});
	}


});