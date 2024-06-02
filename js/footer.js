const createFooter = () => {
	let nav = document.querySelector('.footer');

	nav.innerHTML = `
		<div class="row">
			<div class="footer-info">
				<h4 class="footerheader">Informationen</h4>
				<p>Webseite erstellt von Finjas</p>
				<p>Klasse: G12</p>
				<p>Zweck: Informatikprojekt</p>
				<p>Ausgestellte Produkte stehen NICHT zum Verkauf, dienen nur zu Schauzwecken!</p>
				<p>Quelle der Bilder: <a href="https://unsplash.com">unsplash.com</a> <a href="https://unsplash.com/de/lizenz">(lizenzfrei)</a></p>
			</div>
			<div class="footer-socials">
				<h4 class="footerheader">Soziale Netzwerke</h4>
				<a href="#" style="color:orangered"><i class="ri-instagram-line"></i> Instagram<br /></a>
				<a href="#" style="color:red"><i class="ri-youtube-line"></i> YouTube<br /></a>
				<a href="#" style="color:skyblue"><i class="ri-twitter-line"></i> Twitter<br /></a>
				<a href="#" style="color:darkgray"><i class="ri-tiktok-line"></i> TikTok</a>
			</div>
		</div>
	`;
}

createFooter();