const changeColor = function (color) {
  const target = document.querySelector(".light-container");
	const currentColor = target.dataset.currentColor;

	if (currentColor === color) {
		delete target.dataset.currentColor;
	} else {
		target.dataset.currentColor = color;
	}
};

const changeMessage = function (color) {
	document.querySelector(".message").textContent = `${color}`;
};

const lightItems = document.querySelectorAll(".light-item[data-color]");

for (const item of lightItems) {
	item.addEventListener("click", function () {
		const colorName = item.dataset.color;

		changeColor(colorName);
		changeMessage(colorName);
	});
}