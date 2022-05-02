"use strict";

let mql = window.matchMedia("(max-width:768px)");
mql.addEventListener("change", test);
let item_Ft_Title;

function test() {
	if (mql.matches) {
		item_Ft_Title = document.querySelectorAll(".item-ft__title");

		item_Ft_Title.forEach((title) => {
			title.addEventListener("click", activeSpoller);
		});
	} else {
		if (item_Ft_Title) {
			item_Ft_Title.forEach((title) => {
				title.removeEventListener("click", activeSpoller);
				if (title.parentElement.dataset.state) title.parentElement.removeAttribute("data-state");
			});
		}
	}
}

test();

let prevElements;
function activeSpoller(e) {
	console.log(e.target);
	if (prevElements) {
		if (prevElements.firstElementChild.outerText !== e.target.outerText) {
			prevElements.removeAttribute("data-state");
		}
	}
	e.target.parentElement.dataset.state
		? e.target.parentElement.removeAttribute("data-state")
		: (e.target.parentElement.dataset.state = "open-spoller");
	prevElements = e.target.parentElement;
}
