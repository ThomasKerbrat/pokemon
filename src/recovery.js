
export function recovery() {
	return new Promise(function (resolve, reject) {
		Promise.all([
			fetch("/json/pokemon.json").then(response => response.json()),
		]).then(function (response) {
			const [
				pokemon,
			] = response;

			resolve({
				pokemon: pokemon,
			});
		})
		.catch(reject);
	});
}

