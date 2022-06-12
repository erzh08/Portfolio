var lang = "en";
var elements = document.querySelectorAll("[data]");
function change_lang() {
	console.log("Chamada");
	if (lang == "en") {
		lang = "pt";
	} else {
		lang = "en";
	}
	fetch(`./translation/${lang}.json`)
		.then((res) => res.json())
		.then((translation) => {
			elements.forEach((element) => {
				var keys = element.dataset.i18n.split(".");
				var text = keys.reduce((obj, i) => obj[i], translation);
				if (text) {
					element.innerHTML = text;
				}
			});
		})
		.catch(() => {
			console.error(`Could not load ${lang}.json`);
		});
};
