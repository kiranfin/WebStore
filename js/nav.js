const createNav = () => {
	let nav = document.querySelector('.navbar');

	nav.innerHTML = `
		<div class="nav">
			<img src="img/logo.png" class="brand-logo" alt="">
			<a href="index.html" class="logo">Web Store</a>
			<ul class="categories">
				<li><a href="index.html">Home</a></li>
				<li><a href="categories.html">Kategorien</a></li>
				<li><a href="products.html">Produkte</a></li>
			</ul>
			<div class="nav-items">
				<div class="search">
					<input type="text" class="search-box" placeholder="Produkt oder Kategorie suchen">
					<button class="search-button"><i class="ri-search-line"></i></button>
				</div>
				<div class="nav-right">
					<a href="upload.html"><i class="ri-upload-line"></i></a>
					<a href="#"><i class="ri-settings-2-line"></i></a>
					<a href="#"><i class="ri-user-line"></i></a>
				</div>
			</div>
		</div>
	`;
}

createNav();