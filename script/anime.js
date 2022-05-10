window.onload = () => {
	let anchors = document.getElementsByClassName('box');
	let shadow = document.getElementById('shadow');
	shadow.addEventListener('click', () => {
		let boxes = document.getElementsByClassName('full');
		gsap.to('.trans', {x: -3300, duration: 2});
		setTimeout(() => {
			boxes[0].classList.add('box');
			boxes[0].classList.remove('full');
			shadow.style.zIndex = 0;
			shadow.style.width = "0px";
			shadow.style.height = "0px";
		}, 400);
	});

	/* Click on box */
	for (const anchor of anchors) {
		anchor.onclick = async() => {
			gsap.to('.trans', {x: 3300, duration: 1});
			setTimeout(() => {
				shadow.style.height = "100%";
				shadow.style.width = "100%";
				shadow.style.position = "absolute";
				shadow.style.zIndex = 1;
				anchor.classList.remove('box');
				anchor.classList.add('full');
			}, 430);

			switch (anchor.id) {
				case "experience":
					anchor.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(media/aharen_reina_kr.png)";
					break;
				case "experience":
					anchor.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(media/aharen_reina_kr.png)";
					break;
				case "experience":
					anchor.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(media/aharen_reina_kr.png)";
					break;
				case "experience":
					anchor.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(media/aharen_reina_kr.png)";
					break;
			}
		};
	}
};
