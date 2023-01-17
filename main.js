const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3818de6e5fmshf4c330a8b17a4acp15ef42jsnf0bd399c7fe1',
		'X-RapidAPI-Host': 'yusufnb-quotes-v1.p.rapidapi.com',
	},
};

function fetchingData() {
	fetch(
		'https://yusufnb-quotes-v1.p.rapidapi.com/widget/~einstein.json',
		options
	)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}

fetchingData();
