/*! @license
 * Tooltips
 * simple js&css tooltips
 * copyright Marcel Hauser (https://ice-creme.de/)
*/

/* create tooltip element */
const tooltipEl = document.createElement('div');
tooltipEl.classList.add('tooltip');
document.body.appendChild(tooltipEl);


/*
 * show tooltips
 */
const showTooltip = el => {
	if (!el) return;

	let tooltipText = el.getAttribute('data-tooltip');
	let tooltipPos = el.getAttribute('data-tooltip-position') || 'bottom';

	let posX, posY;

	tooltipEl.classList.remove('tooltip--top', 'tooltip--bottom', 'tooltip--right', 'tooltip--left');
	tooltipEl.innerHTML = tooltipText;
	tooltipEl.classList.add(`tooltip--${tooltipPos}`);

	tooltipEl.style.display = 'block';

	switch (tooltipPos) {
		case 'top':
			posX = el.offsetLeft - ((tooltipEl.offsetWidth / 2) - (el.offsetWidth / 2));
			posY = el.offsetTop - tooltipEl.offsetHeight - 10;
			break;
		case 'left':
			posX = el.offsetLeft - tooltipEl.offsetWidth - 10;
			posY = el.offsetTop + ((el.offsetHeight / 2) - (tooltipEl.offsetHeight / 2));
			break;
		case 'right':
			posX = el.offsetLeft + el.offsetWidth + 10;
			posY = el.offsetTop + ((el.offsetHeight / 2) - (tooltipEl.offsetHeight / 2));
			break;
		default:
			posX = el.offsetLeft - ((tooltipEl.offsetWidth / 2) - (el.offsetWidth / 2));
			posY = el.offsetTop + el.offsetHeight + 10;
	}

	tooltipEl.style.left = `${posX}px`;
	tooltipEl.style.top = `${posY}px`;
}


/*
 * remove tooltips
 */
const hideTooltip = () => {
	tooltipEl.style.display = 'none';
}


/*
 * initialize the tooltips
 */
const toolTipEls = document.querySelectorAll('[data-tooltip]');
toolTipEls.forEach(el => {
	el.addEventListener('mouseover', function() {
		showTooltip(el);
	});

	el.addEventListener('mouseout', function() {
		hideTooltip();
	});
});
