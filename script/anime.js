window.onload = () => {
	let anchors = document.getElementsByClassName('nav-btn');
	let boxes = document.getElementsByClassName('box');
	let shadow = document.getElementById('shadow');

	/* Click on box */
	for (const anchor of anchors) {
		anchor.onclick = async () => {
			gsap.to('.trans', {x: 3300, duration: 1});
			setTimeout(() => {
				shadow.style.height = "100%";
				shadow.style.width = "100%";
				shadow.style.position = "absolute";
				shadow.style.zIndex = 2;

				switch (anchor.id) {
				case "contact-nav":
					document.getElementById("contact").style.display = "flex";
					break;
				case "projects-nav":
					document.getElementById("projects").style.display = "flex";
					break;
				case "skills-nav":
					document.getElementById("skills").style.display = "flex";
					break;
				case "about-nav":
					document.getElementById("about").style.display = "flex";
					break;
				}
			}, 430);
		};
	}

	shadow.addEventListener('click', () => {
		gsap.to('.trans', {x: -3300, duration: 2});
		setTimeout(() => {
			for (const box of boxes) {
				if (box.style.display == "flex"){
					box.style.display = "none";
					break;
				}
			}
			shadow.style.zIndex = 0;
			shadow.style.width = "0px";
			shadow.style.height = "0px";
		}, 400);
	});
};
