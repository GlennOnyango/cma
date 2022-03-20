fetch('https://datahub.io/core/country-list/r/0.html')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));