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
				<div class="search-box-block">
					<div class="search">
						<input type="text" class="search-box" placeholder="Produkt oder Kategorie suchen" autocomplete="off"></input>
						<button class="search-button" onclick="doSearch()"><i class="ri-search-line"></i></button>
					</div>
					<div class="result-box"></div>
				</div>
				<div class="nav-right">
					<a href="upload.html"><i class="ri-upload-line"></i></a>
					` + getThemeButton() + `
					<a href="shoppingcart.html"><i class="ri-shopping-bag-3-line"></i></a>
				</div>
			</div>
		</div>
	`;
}

createNav();

function getThemeButton() {
	if(localStorage.getItem("theme") === "dark-mode") {
		return `<a onclick="toggleTheme()"><i class="ri-sun-line"></i></a>`;
	} else if(localStorage.getItem("theme") === "light-mode") {
		return `<a onclick="toggleTheme()"><i class="ri-moon-line"></i></a>`;
	}
}