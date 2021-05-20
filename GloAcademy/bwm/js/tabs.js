//Tabs
const interior = document.querySelectorAll('[data-tabs-field="interior"]');
const body = document.querySelectorAll('[data-tabs-field="body"]');
const designBtn = document.querySelectorAll('button.design-list__item');

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
});