/** @format */

const checkboxItemsFeedback = document.querySelectorAll('.feedback-item-check-item');
const containerFeedback = document.querySelector('.feedback-item-box');

let scrollOffsetX = 0;
let scrollWidth = 0;
let widthElement = 0;
let positionElement = 0;

containerFeedback.addEventListener('scroll', onScroll);
window.addEventListener('resize', getParamScroll);

getParamScroll();

function getParamScroll() {
	scrollOffsetX = containerFeedback.scrollLeft;
	scrollWidth = containerFeedback.scrollWidth;
	widthElement = containerFeedback.offsetWidth;
	positionElement = (scrollWidth - widthElement) / 2 - 18;
}

function onScroll(e) {
	const scrollOffsetX = e.currentTarget.scrollLeft;
	const scrollCountElement = Math.floor(scrollOffsetX / positionElement);
	checkboxItemsFeedback.forEach((item, index) => {
		if (index === scrollCountElement && !item.classList.contains('active')) {
			checkboxItemsFeedback.forEach(item => {
				item.classList.remove('active');
			});
			item.classList.add('active');
		}
	});
}

checkboxItemsFeedback.forEach((item, index) => {
	item.dataset.id = index;
	item.addEventListener('click', e => {
		containerFeedback.scrollLeft = positionElement * Number(item.dataset.id);
	});
});
