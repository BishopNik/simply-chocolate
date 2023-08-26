/** @format */

const checkboxItemsTopseller = document.querySelectorAll('.ourproducts-item-check-item');
const ourproductsItemBox = document.querySelector('.ourproducts-item-box');
let scrollOffsetX = 0;
let scrollWidth = 0;
let widthElement = 0;
let positionElement = 0;

ourproductsItemBox.addEventListener('scroll', onScroll);
window.addEventListener('resize', getParamScroll);

getParamScroll();

function getParamScroll() {
	scrollOffsetX = ourproductsItemBox.scrollLeft;
	scrollWidth = ourproductsItemBox.scrollWidth;
	widthElement = ourproductsItemBox.offsetWidth;
	positionElement = (scrollWidth - widthElement) / 8 + 27;
}

function onScroll(e) {
	const scrollOffsetX = e.currentTarget.scrollLeft;
	const scrollCountElement = Math.round(scrollOffsetX / positionElement);
	checkboxItemsTopseller.forEach((item, index) => {
		if (index === scrollCountElement && !item.classList.contains('active')) {
			checkboxItemsTopseller.forEach(checkboxItemTopseller => {
				checkboxItemTopseller.classList.remove('active');
			});
			item.classList.add('active');
		}
	});
}

checkboxItemsTopseller.forEach((item, index) => {
	item.dataset.id = index;
	item.addEventListener('click', e => {
		const targetScrollLeft = positionElement * Number(item.dataset.id);
		ourproductsItemBox.scrollTo({
			left: targetScrollLeft,
			behavior: 'smooth',
		});
	});
});
