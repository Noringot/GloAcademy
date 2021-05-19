document.addEventListener('DOMContentLoaded', () => {

	//Tabs
	const techCharBtns = document.querySelectorAll('.feature__link'),
			overflow = document.querySelectorAll('.feature__item'),
			interior = document.querySelectorAll('[data-tabs-field="interior"]'),
			body = document.querySelectorAll('[data-tabs-field="body"]'),
			designBtn = document.querySelectorAll('button.design-list__item');
			console.log(interior);
	

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

	
	designBtn.forEach((item, i)=> {
		item.addEventListener('click', event => {
			designBtn.forEach(btn => btn.classList.remove('design-list__item_active'));
			item.classList.add('design-list__item_active');
			if(i === 0){
				body.forEach(el => el.classList.add('hidden'));
				interior.forEach(el => el.classList.remove('hidden'));
			}else{
				body.forEach(el => el.classList.remove('hidden'));
				interior.forEach(el => el.classList.add('hidden'));
			}
		});
	})


	// Scroll
	const scrollElements = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
	scrollElements.forEach(item => {
		item.addEventListener('click', event => {
			event.preventDefault();
			
			const id = item.getAttribute('href').substring(1);
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
	

});