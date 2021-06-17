"use strict";

const endtime = new Date('17 July 2021, 16:10:00');

function getTimeRemaining(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		days,
		hours,
		minutes,
		seconds
	};
}

function clock() {
	const days = document.querySelector(".days");
	const hours = document.querySelector(".hours");
	const minutes = document.querySelector(".minutes");
	const seconds = document.querySelector(".seconds");
	const card = document.querySelector(".seconds-card");

	const timeInterval = setInterval(() => {
		const t = getTimeRemaining(endtime);
		days.textContent = (t.days < 10) ? ('0' + t.days).slice(-2) : t.days;
		hours.textContent = ('0' + t.hours).slice(-2);
		minutes.textContent = ('0' + t.minutes).slice(-2);
		seconds.textContent = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeInterval);
		}
	}, 1000);
}

clock();