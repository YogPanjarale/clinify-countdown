let countDownDate = new Date("June 12, 2021 21:00:00").getTime();

setInterval(() => {
	let now = new Date().getTime();
	let timeleft = countDownDate - now;

	let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.querySelector('.days').innerHTML=days;
  document.querySelector('.hours').innerHTML=hours;
  document.querySelector('.minutes').innerHTML=minutes;
  document.querySelector('.seconds').innerHTML=seconds;
}, 1000);
