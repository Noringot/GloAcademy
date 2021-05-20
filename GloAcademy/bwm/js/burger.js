
//Burger
const burgerBtn = document.querySelector('.humburger-menu');
const burgerMenu = document.querySelector('.menu');
const burgerMenuNodes = [...document.querySelector('.menu-list').children];
const burgerFunToggle = () => {
	burgerBtn.classList.toggle('humburger-menu-active');
	burgerMenu.classList.toggle('menu-active');
};
burgerBtn.addEventListener('click', burgerFunToggle);
burgerMenuNodes.forEach( item => {
	item.addEventListener('click', event => {
		burgerFunToggle();
	});
});