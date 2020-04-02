window.onload = function() {
	const num = document.querySelector('#number');
	const btn = document.querySelector('#button');
	const display = document.querySelector('.display');
	let results = '';

	btn.addEventListener('click', loadData);

	function loadData(e) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `http://api.icndb.com/jokes/random/${num.value}`, true);
		xhr.onload = function() {
			if (this.status === 200) {
				const jokes = JSON.parse(this.responseText);
				console.log(this.responseText);

				jokes.value.forEach((joke) => {
					results += `<li>${joke.joke}</li></br>`;
				});
				display.innerHTML = results;
			}
		};
		xhr.send();
		e.preventDefault();
	}
};
