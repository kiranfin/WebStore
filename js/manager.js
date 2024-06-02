let currentPage = 1;
let maxElements = 20;
let maxVisiblePages = 5;
let maxSale = 80;
let currentImageString = '';
let currentuploadcategories = [];

let currentSorter = '';

const availablesorts = ["default", "dateadded", "price", "sale"];

const categories = [
    {
        identifier: "furniture",
        icon: "ri-hotel-bed-line",
        color: "burlywood",
        title: "Möbel"
    },
    {
        identifier: "garden",
        icon: "ri-leaf-line",
        color: "limegreen",
        title: "Garten"
    },
    {
        identifier: "shoes",
        icon: "ri-footprint-line",
        color: "saddlebrown",
        title: "Schuhe"
    },
    {
        identifier: "accessoires",
        icon: "ri-glasses-line",
        color: "skyblue",
        title: "Accessoires"
    },
    {
        identifier: "clothes",
        icon: "ri-t-shirt-2-line",
        color: "cyan",
        title: "Klamotten"
    },
    {
        identifier: "cars",
        icon: "ri-car-fill",
        color: "red",
        title: "Autos"
    },
    {
        identifier: "decoration",
        icon: "ri-home-heart-line",
        color: "orange",
        title: "Dekoration"
    },
    {
        identifier: "technology",
        icon: "ri-smartphone-line",
        color: "lightblue",
        title: "Technik"
    }
];

let products = getProductsFromLocal();
let availablesearches = getAvailableSearches();

function getCategories(element) {
    let arraytodo = [];
    categories.forEach((category) => {
        arraytodo.push(`<div class="categorywrap">
            <a href="category.html?category=${category["identifier"]}"><button class="categorybutton"><i class="${category["icon"]}" style="color:${category["color"]}"></i> ${category["title"]}</button></a>
        </div>`);
    });

    let final = arraytodo.join("\n");
    document.querySelector("." + element).innerHTML = final;
}

function getProducts(element, sorter, count, surroundingelement) {
    let arraytodo = [];

    if(sorter === "price") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => (a.price - ((a.sale * 0.01) * a.price).toFixed(2)) - (b.price - ((b.sale * 0.01) * b.price).toFixed(2)));
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${product["id"]})">
                    ` + getImageFromProduct(product) + `
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products.toSorted((a, b) => (a.price - ((a.sale * 0.01) * a.price).toFixed(2)) - (b.price - ((b.sale * 0.01) * b.price).toFixed(2)));
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${sortarray[i]["id"]})">
                    ` + getImageFromProduct(sortarray[i]) + `
                    <h4>${sortarray[i]["title"]}</h4>
                    ` + getPriceAndSale(sortarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(sortarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    } else if(sorter === "sale") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => a.sale - b.sale).reverse();
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${product["id"]})">
                    ` + getImageFromProduct(product) + `
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products.toSorted((a, b) => a.sale - b.sale).reverse();
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${sortarray[i]["id"]})">
                    ` + getImageFromProduct(sortarray[i]) + `
                    <h4>${sortarray[i]["title"]}</h4>
                    ` + getPriceAndSale(sortarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(sortarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    } else if(sorter === "dateadded") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded)).reverse();
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${product["id"]})">
                    ` + getImageFromProduct(product) + `
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded)).reverse();
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${sortarray[i]["id"]})">
                    ` + getImageFromProduct(sortarray[i]) + `
                    <h4>${sortarray[i]["title"]}</h4>
                    ` + getPriceAndSale(sortarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(sortarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    } else if(sorter === "default" || sorter === null) {
        if(count === -1) {
            let sortarray = products.map((x) => x);
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${product["id"]})">
                    ` + getImageFromProduct(product) + `
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products.map((x) => x);
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${sortarray[i]["id"]})">
                    ` + getImageFromProduct(sortarray[i]) + `
                    <h4>${sortarray[i]["title"]}</h4>
                    ` + getPriceAndSale(sortarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(sortarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    }

    let final = arraytodo.join("\n");
    document.querySelector("." + element).innerHTML = final;
}

function getProductsArray(sorter, count) {
    let arraytodo = [];

    if(sorter === "price") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => (a.price - ((a.sale * 0.01) * a.price).toFixed(2)) - (b.price - ((b.sale * 0.01) * b.price).toFixed(2)));
            arraytodo = sortarray.map((x) => x);
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.toSorted((a, b) => (a.price - ((a.sale * 0.01) * a.price).toFixed(2)) - (b.price - ((b.sale * 0.01) * b.price).toFixed(2)));
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(product);
                    i++;
                });
            }
        }
    } else if(sorter === "sale") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => a.sale - b.sale).reverse();
            arraytodo = sortarray.map((x) => x);
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.toSorted((a, b) => a.sale - b.sale).reverse();
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(product);
                });
            }
        }
    } else if(sorter === "dateadded") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded)).reverse();
            arraytodo = sortarray.map((x) => x);
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded)).reverse();
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(product);
                });
            }
        }
    } else if(sorter === "default" || sorter === null) {
        if(count === -1) {
            let sortarray = products.map((x) => x);
            arraytodo = sortarray.map((x) => x);
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.map((x) => x);
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(product);
                });
            }
        }
    }
    return arraytodo;
}

function getTagsFromProduct(id) {
    todoproduct = getProductFromId(id);
    if(todoproduct !== null) {
        let todoarray = todoproduct.tags;
        let final = [];
        todoarray.forEach((tag) => {
            final.push(`<div class="product-category">${convertToCategoryTitle(tag)}</div>`);
        });
        return final.join("\n");
    }
}

function getProductFromId(todoid) {
    var item = products.find(item => item.id === todoid);
    return item;
}

function convertToCategoryTitle(identifier) {
    var item = categories.find(item => item.identifier === identifier);
    return item.title;
}

function getRandomProducts(element, count, surroundingelement) {
    arraytodo = [];
    for(let i = 0; i < count; i++) {
        product = products[Math.floor(Math.random()*products.length)];
        arraytodo.push(`<div class="${surroundingelement}">
            ` + getImageFromProduct(product) + `
            <h4>${product["title"]}</h4>
            ` + getPriceAndSale() + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
            </div>`);
    }
    let final = arraytodo.join("\n");
    document.querySelector("." + element).innerHTML = final;
}

function getSuggestions(count) {
    arraytodo = [];
    if(count >= products.length) {
        products.forEach((product) => {
            arraytodo.push(`<div class="product swiper-slide">
                <div class="box">
                    <div class="img">
                        ` + getImageFromProduct(product) + `
                    </div>
                    <div class="info">
                        <h2>${product["title"]}</h2>
                        <div class="cardrow">
                            ` + getPriceAndSaleSuggestions(product["id"]) + `
                            <div class="btn">
                                <a href="#"><button class="cardbutton" onclick="onProductClick(${product["id"]})">Mehr Infos</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
        });
    } else {
        newproducts = products.map((x) => x);
        for(let i = 0; i < count; i++) {    
            product = newproducts[Math.floor(Math.random()*newproducts.length)];
            arraytodo.push(`<div class="product swiper-slide">
                <div class="box">
                    <div class="img">
                        ` + getImageFromProduct(product) + `
                    </div>
                    <div class="info">
                        <h2>${product["title"]}</h2>
                        <div class="cardrow">
                            ` + getPriceAndSaleSuggestions(product["id"]) + `
                            <div class="btn">
                                <a href="#"><button class="cardbutton" onclick="onProductClick(${product["id"]})">Mehr Infos</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
            newproducts.splice(newproducts.indexOf(product), 1);
        }
    }
    let final = arraytodo.join("\n");
    document.querySelector(".swiper-wrapper").innerHTML = final;
}

function getPriceAndSale(id) {
    todoproduct = getProductFromId(id);
    if(todoproduct !== null) {
        oldprice = todoproduct.price.toFixed(2); //4500.99
        price = convertPrice(oldprice);
        sale = todoproduct.sale;
        salepricestraight = oldprice - ((sale * 0.01) * oldprice);
        osaleprice = salepricestraight.toFixed(2);
        saleprice = convertPrice(osaleprice);
        if(sale !== 0) {
            return `<p style="text-decoration:line-through">${price} €</p><p style="color:red"> ${saleprice} € (${sale}%)</p>`;
        } else {
            return `<p>${price} €</p>`;
        }
    }
}

function convertPrice(price) {
    //500.99
    if(price.charAt(price.length - 3) === ".") {
        nondeci = price.slice(0, -3); //500
        if(nondeci.length > 3) {
            sliceprice = nondeci.slice(0, -3); //4
            return sliceprice + "." + nondeci.replace(sliceprice, "") + "," + price.replace(price.slice(0, -2), "");
        } else {
            toreplace = nondeci + price.replace(nondeci, "");
            return toreplace.replace(".", ",");
        }
    } else {
        if(price.length > 3) {
            sliceprice = nondeci.slice(0, -3); //4
            return sliceprice + "." + price.replace(sliceprice, "");
        } else {
            toreplace = price;
            return toreplace.replace(".", ",");
        }
    }
}

function getPriceAndSaleSuggestions(id) {
    todoproduct = getProductFromId(id);
    if(todoproduct !== null) {
        oldprice = todoproduct.price.toFixed(2);
        price = convertPrice(oldprice);
        sale = todoproduct.sale;
        salepricestraight = oldprice - ((sale * 0.01) * oldprice);
        oldsaleprice = salepricestraight.toFixed(2);
        saleprice = convertPrice(oldsaleprice);
        if(sale !== 0) {
            return `<div class="cardsale"><p style="text-decoration:line-through">${price} €</p><p style="color:red"> ${saleprice} € (${sale}%)</p></div>`;
        } else {
            return `<p>${price} €</p>`;
        }
    }
}

function getCurrentPage() {
    return currentPage;
}

function setCurrentPage(page) {
    currentPage = page;
}

function getProductsFromPage(element, sorter, count, surroundingelement, page) {
    prarray = getProductsArray(sorter, count);
    prev = (page - 1) * maxElements; //1*20
    all = page * maxElements; //40
    prcount = prarray.length; //21
    let arraytodo = [];
    if(prcount < all) {
        if(page - 1 <= 0) {
            for(let i = 0; i < prcount; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${prarray[i]["id"]})">
                    ` + getImageFromProduct(prarray[i]) + `
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
            let final = arraytodo.join("\n");
            document.querySelector("." + element).innerHTML = final;
        } else {
            for(let i = prev; i < prcount; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${prarray[i]["id"]})">
                    ` + getImageFromProduct(prarray[i]) + `
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
            let final = arraytodo.join("\n");
            document.querySelector("." + element).innerHTML = final;
        }
    } else {
        if(page - 1 <= 0) {
            for(let i = 0; i < all; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${prarray[i]["id"]})">
                    ` + getImageFromProduct(prarray[i]) + `
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
            let final = arraytodo.join("\n");
            document.querySelector("." + element).innerHTML = final;
        } else {
            for(let i = prev; i < all; i++) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${prarray[i]["id"]})">
                    ` + getImageFromProduct(prarray[i]) + `
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
            let final = arraytodo.join("\n");
            document.querySelector("." + element).innerHTML = final;
        }
    }
}

function getPageButtons(element) {
    arraytodo = [];
    pagecount = Math.ceil(products.length / maxElements);
    
    arraytodo.push(`<button onclick='decreaseCurrentPage("page-button")' class="prev-page-btn"><i class="ri-arrow-left-s-line"></i></button>\n<ul class="number-buttons">`);
    for(let i = 1; i <= pagecount; i++) {
        if(i !== currentPage) {
            arraytodo.push(`<li onclick='updateCurrentPage("page-button")' value="${i}" class="page-button">${i}</li>`);
        } else {
            arraytodo.push(`<li onclick='updateCurrentPage("page-button")' value="${i}" class="page-button active">${i}</li>`);
        }
    }
    arraytodo.push(`</ul>\n<button onclick='increaseCurrentPage("page-button")' class="next-page-btn"><i class="ri-arrow-right-s-line"></i></button>`);

    let final = arraytodo.join("\n");
    document.querySelector("." + element).innerHTML = final;
}

function updateCurrentPage(element) {
    let buttons = document.getElementsByClassName(element);
    for(button of buttons) {
        button.classList.remove("active");
    }
    event.target.classList.add("active");
    setCurrentPage(event.target.value);
    getProductsFromPage("productrow", getCurrentSorter(), -1, "products", currentPage);
    getPageButtons("page-buttons");
    document.documentElement.scrollTop = 0;
}

function decreaseCurrentPage(element) {
    if(currentPage > 1) {
        let buttons = document.getElementsByClassName(element);
        for(button of buttons) {
            button.classList.remove("active");
        }
        setCurrentPage(currentPage - 1);
        buttons[currentPage - 1].classList.add("active");
        getProductsFromPage("productrow", getCurrentSorter(), -1, "products", currentPage);
        getPageButtons("page-buttons");
        document.documentElement.scrollTop = 0;
    }
}

function increaseCurrentPage(element) {
    total = Math.ceil(products.length / maxElements);
    if(currentPage < total) {
        let buttons = document.getElementsByClassName(element);
        for(button of buttons) {
            button.classList.remove("active");
        }
        setCurrentPage(currentPage + 1);
        buttons[currentPage - 1].classList.add("active");
        getProductsFromPage("productrow", getCurrentSorter(), -1, "products", currentPage);
        getPageButtons("page-buttons");
        document.documentElement.scrollTop = 0;
    }
}

function getCurrentSorter() {
    return currentSorter;
}

function setCurrentSorter(sorter) {
    currentSorter = sorter;
}

function updateCurrentSorter() {
    setCurrentSorter(event.target.value);
    getProductsFromPage("productrow", getCurrentSorter(), -1, "products", currentPage);
    getPageButtons("page-buttons");
    document.documentElement.scrollTop = 0;
}

function getMaxElements() {
    return maxElements;
}

function setMaxElements(count) {
    maxElements = count;
}

function updateMaxElements(element) {
    let options = document.getElementsByClassName(element);
    for(option of options) {
        option.classList.remove("active");
    }
    event.target.classList.add("active");
    setMaxElements(event.target.value);
    getProductsFromPage("productrow", getCurrentSorter(), -1, "products", currentPage);
    getPageButtons("page-buttons");
}

function initCurrentSorter() {
    url = window.location.search;
    const urlparams = new URLSearchParams(url);
    if(urlparams.has('sorter')) {
        sorter = urlparams.get('sorter');
        currentSorter = sorter;
    } else if(currentSorter === ''){
        currentSorter = "default";
    }
}

initCurrentSorter();

function convertSorter(sorter) {
    if(sorter === "default") return "Standard";
    if(sorter === "dateadded") return "Datum";
    if(sorter === "price") return "Preis";
    if(sorter === "sale") return "Sale";
}

function getSorterOptions(element) {
    arraytodo = [];

    if(availablesorts.includes(currentSorter)) {
        name = convertSorter(currentSorter);
        arraytodo.push(`<option id="${currentSorter}" class="option" value="${currentSorter}">${name}</option>`);
    }
    availablesorts.forEach((sort) => {
        if(sort !== currentSorter) {
            name = convertSorter(sort);
            arraytodo.push(`<option id="${sort}" class="option" value="${sort}">${name}</option>`);
        }
    });

    let final = arraytodo.join("\n");
    document.querySelector("." + element).innerHTML = final;
}

function getClaimedIds() {
    let final = [];
    products.forEach((product) => {
        final.push(product.id);
    });
    return final;
}

function getFreeId() {
    claimedids = getClaimedIds();
    for(let i = 0; true; i++) {
        if(!claimedids.includes(i)) {
            return i;
            break;
        }
    }
}

function debugProducts() {
    console.log(products);
    titles = ["Komode", "Wohnzimmertisch", "Sofa", "Gartenschaukel", "Gartenzwerg", "Hochbeet", "Sandalen", "Sportsneaker", "Schwarze Handtasche", "Goldene Kette", "Rotes T-Shirt", "Blaue Jeans", "Schwarzer Hoodie", "Fiat 500", 
            "Opel Astra", "Duftkerzen", "Lichterkette", "Samsung S24 Ultra", "Game Boy", "Apple AirPods Max"];
        prices = [469.99, 199.99, 629.99, 549.95, 59, 199, 77, 159.95, 49.99, 13.90, 5.14, 165, 29.90, 36990, 41990, 3.49, 34.99, 1075.95, 150.81, 579];
        imgs = ["./img/komode.jpg", "./img/wohnzimmertisch.jpg", "./img/sofa.jpg", "./img/gartenschaukel.jpg", "./img/gartenzwerg.jpg", "./img/hochbeet.jpg", "./img/sandalen.jpg", "./img/sportsneaker.jpg", "./img/handtasche.jpg", 
            "./img/kette.jpg", "./img/shirt.jpg", "./img/jeans.jpg", "./img/hoodie.jpg", "./img/fiat.jpg", "./img/opel.jpg", "./img/duftkerzen.jpg", "./img/lichterkette.jpg", "./img/s24.jpg", "./img/gameboy.jpg", "./img/kopfhörer.jpg"];
        descriptions = ["Eichenkomode perfekt für das Schlafzimmer!", "Massives Eichenholz, geölt, Tisch mit zwei Ablagflächen", "Füße: Massives Buchenholz, Bezug: dunkelgrauer Webstoff", "Maße: ca.200 x 114,5 x 168 cm, Stahl + Kissen", 
            "Material: Polyresin, mit Laterne", "Maße: 200 x 100 x 72 cm, Material: Douglasie", "Herren Outdoor-Sandalen, Material: Leder, Größe: 42", "Freizeit-Sneaker für Herren, Größe: 43, Spaziergänge, Freizeit, jedes Wetter", 
            "Schwarze Damen-Handtasche, Material: Lederimitat", "Goldene Halskette, Masse: 7,5g", "Material: Baumwolle, Größe: S", "Damen-Jeans, indigioblau, Größe: 30", "Material: Sweatstoff, Kapuze, schwarz, Größe: M", 
            "37,3kWh, 235km Reichweite, 159 Wh/km Verbrauch", "Elektrisch, 115kW Leistung, 15,4kWh/100km", "Duft: Vanille, aromatisch", "Kupfer/Polyester, schwarz, outdoor", "256GB, 6,8 Zoll, schwarz", "grau, portable Konsole", 
            "20 Stunden Wiedergabe mit einer Aufladung, personalisiertes 3D-Audio"];
        catetags = [["furniture"], ["furniture"], ["furniture"], ["furniture", "garden"], ["garden", "decoration"], ["garden", "furniture"], ["shoes"], ["shoes"], ["accessoires"], ["accessoires"], ["clothes"], ["clothes"], ["clothes"], 
            ["cars"], ["cars"], ["decoration"], ["decoration"], ["technology"], ["technology", "decoration"], ["technology"]];
        users = ["Anna", "Ben", "Clara", "Emma", "David", "Felix", "Greta", "Hugo", "Ivonne", "Jonas", "Katharina", "Leon", "Maria", "Noah", "Olivia", "Paul", "Sophie", "Tim", "Ulrike", "Vincent"];
        dates = ["2021-01-22T17:53:36.000+02:00", "2023-01-01T22:51:35.000+02:00", "2020-06-26T15:54:01.000+02:00", "2020-09-01T22:19:07.000+02:00", "2023-09-28T01:57:58.000+02:00", "2023-03-07T15:27:39.000+02:00", 
            "2020-04-11T15:19:14.000+02:00", "2023-11-14T01:32:57.000+02:00", "2023-08-03T11:02:30.000+02:00", "2022-07-25T06:56:47.000+02:00", "2021-11-03T09:38:30.000+02:00", "2022-08-22T22:12:41.000+02:00", 
            "2021-05-10T09:39:11.000+02:00", "2022-12-01T12:10:35.000+02:00", "2021-07-07T10:53:24.000+02:00", "2021-01-31T10:58:51.000+02:00", "2022-10-09T22:51:40.000+02:00", "2023-01-01T01:22:33.000+02:00", 
            "2020-03-29T16:01:00.000+02:00", "2023-04-22T14:42:11.000+02:00"];
    console.log(titles.length);
    console.log(prices.length);
    console.log(imgs.length);
    console.log(descriptions.length);
    console.log(catetags.length);
    console.log(users.length);
    console.log(dates.length);
}

//addProduct("hamsti", 500, "./img/hamsti.jpg", "eins hamsti", ["cars"], "Andi");

function addProduct(title, price, img, description, tags, user, id = getFreeId()) {
    sale = 0;
    now = new Date();
    date = toIsoString(now);
    copyproducts = products.map((x) => x);
    copyproducts.push({id: id, title: title, price: price, sale: sale, img: img, description: description, tags: tags, user: user, dateadded: date});
    saveProductsToLocal(copyproducts);
}

function removeProduct(product) {
    copyproducts = products.map((x) => x);
    index = copyproducts.indexOf(product);
    if(index > -1) {
        copyproducts.splice(index, 1);
        saveProductsToLocal(copyproducts);
    }
}

function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            return (num < 10 ? '0' : '') + num;
        };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(Math.floor(Math.abs(tzo) / 60)) +
        ':' + pad(Math.abs(tzo) % 60);
}

function getProductsFromLocal() {
    local = localStorage.getItem("products");
    if(local === null) {
        titles = ["Komode", "Wohnzimmertisch", "Sofa", "Gartenschaukel", "Gartenzwerg", "Hochbeet", "Sandalen", "Sportsneaker", "Schwarze Handtasche", "Goldene Kette", "Rotes T-Shirt", "Blaue Jeans", "Schwarzer Hoodie", "Fiat 500", 
            "Opel Astra", "Duftkerzen", "Lichterkette", "Samsung S24 Ultra", "Game Boy", "Apple AirPods Max"];
        prices = [469.99, 199.99, 629.99, 549.95, 59, 199, 77, 159.95, 49.99, 13.90, 5.14, 165, 29.90, 36990, 41990, 3.49, 34.99, 1075.95, 150.81, 579];
        imgs = ["./img/komode.jpg", "./img/wohnzimmertisch.jpg", "./img/sofa.jpg", "./img/gartenschaukel.jpg", "./img/gartenzwerg.jpg", "./img/hochbeet.jpg", "./img/sandalen.jpg", "./img/sportsneaker.jpg", "./img/handtasche.jpg", 
            "./img/kette.jpg", "./img/shirt.jpg", "./img/jeans.jpg", "./img/hoodie.jpg", "./img/fiat.jpg", "./img/opel.jpg", "./img/duftkerzen.jpg", "./img/lichterkette.jpg", "./img/s24.jpg", "./img/gameboy.jpg", "./img/kopfhörer.jpg"];
        descriptions = ["Eichenkomode perfekt für das Schlafzimmer!", "Massives Eichenholz, geölt, Tisch mit zwei Ablagflächen", "Füße: Massives Buchenholz, Bezug: dunkelgrauer Webstoff", "Maße: ca.200 x 114,5 x 168 cm, Stahl + Kissen", 
            "Material: Polyresin, mit Laterne", "Maße: 200 x 100 x 72 cm, Material: Douglasie", "Herren Outdoor-Sandalen, Material: Leder, Größe: 42", "Freizeit-Sneaker für Herren, Größe: 43, Spaziergänge, Freizeit, jedes Wetter", 
            "Schwarze Damen-Handtasche, Material: Lederimitat", "Goldene Halskette, Masse: 7,5g", "Material: Baumwolle, Größe: S", "Damen-Jeans, indigioblau, Größe: 30", "Material: Sweatstoff, Kapuze, schwarz, Größe: M", 
            "37,3kWh, 235km Reichweite, 159 Wh/km Verbrauch", "Elektrisch, 115kW Leistung, 15,4kWh/100km", "Duft: Vanille, aromatisch", "Kupfer/Polyester, schwarz, outdoor", "256GB, 6,8 Zoll, schwarz", "grau, portable Konsole", 
            "20 Stunden Wiedergabe mit einer Aufladung, personalisiertes 3D-Audio"];
        catetags = [["furniture"], ["furniture"], ["furniture"], ["furniture", "garden"], ["garden", "decoration"], ["garden", "furniture"], ["shoes"], ["shoes"], ["accessoires"], ["accessoires"], ["clothes"], ["clothes"], ["clothes"], 
            ["cars"], ["cars"], ["decoration"], ["decoration"], ["technology"], ["technology", "decoration"], ["technology"]];
        users = ["Anna", "Ben", "Clara", "Emma", "David", "Felix", "Greta", "Hugo", "Ivonne", "Jonas", "Katharina", "Leon", "Maria", "Noah", "Olivia", "Paul", "Sophie", "Tim", "Ulrike", "Vincent"];
        dates = ["2021-01-22T17:53:36.000+02:00", "2023-01-01T22:51:35.000+02:00", "2020-06-26T15:54:01.000+02:00", "2020-09-01T22:19:07.000+02:00", "2023-09-28T01:57:58.000+02:00", "2023-03-07T15:27:39.000+02:00", 
            "2020-04-11T15:19:14.000+02:00", "2023-11-14T01:32:57.000+02:00", "2023-08-03T11:02:30.000+02:00", "2022-07-25T06:56:47.000+02:00", "2021-11-03T09:38:30.000+02:00", "2022-08-22T22:12:41.000+02:00", 
            "2021-05-10T09:39:11.000+02:00", "2022-12-01T12:10:35.000+02:00", "2021-07-07T10:53:24.000+02:00", "2021-01-31T10:58:51.000+02:00", "2022-10-09T22:51:40.000+02:00", "2023-01-01T01:22:33.000+02:00", 
            "2020-03-29T16:01:00.000+02:00", "2023-04-22T14:42:11.000+02:00"];

        let tosave = [];
        for(let i = 0; i < titles.length; i++) {
            tosave.push({id: i, title: titles[i], price: prices[i], sale: 0, img: imgs[i], description: descriptions[i], tags: catetags[i], user: users[i], dateadded: dates[i]});
        }
        saveProductsToLocal(tosave);
    }
    local = localStorage.getItem("products");
    todo = JSON.parse(local);
    console.log(todo);
    return todo;
}

function saveProductsToLocal(productarray) {
    serialized = JSON.stringify(productarray);
    localStorage.setItem("products", serialized);
}

function clearLocal() {
    localStorage.clear();
}

function getProductsFromCategory(element, surroundingelement) {
    let arraytodo = [];

    url = window.location.search;
    const urlparams = new URLSearchParams(url);
    if(urlparams.has('category')) {
        categoryname = urlparams.get('category');
        category = getCategoryByIdentifier(categoryname);
        arraytodo.push(`<h1 class="categoryheader"><i class="${category["icon"]}" style="color:${category["color"]}"></i> ${category["title"]}</h1>\n<div class="productrow">`);
        products.forEach((product) => {
            if(product.tags.includes(category["identifier"])) {
                arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${product["id"]})">
                    ` + getImageFromProduct(product) + `
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `
                    <div class="productrow">` + getTagsFromProduct(product["id"]) + `</div></div>`);
            }
        });
        arraytodo.push(`</div`);
    }

    let final = arraytodo.join("\n");
    document.querySelector("." + element).innerHTML = final;
}

function getCategoryByIdentifier(identifier) {
    var item = categories.find(item => item.identifier === identifier);
    return item;
}

function randomSale() {
    resetSale();

    arraytodo = [];
    newproducts = products.map((x) => x);
    randomcount = Math.floor(Math.random()*newproducts.length);
    for(let i = 0; i < randomcount; i++) {
        pr = newproducts[Math.floor(Math.random()*newproducts.length)];
        pr["sale"] = Math.floor(Math.random() * maxSale);
        arraytodo.push(pr);
        newproducts.splice(newproducts.indexOf(pr), 1);
    }
    let merge = newproducts.concat(arraytodo);
    let final = merge.toSorted((a, b) => a.id - b.id);
    saveProductsToLocal(final);
}

function resetSale() {
    newproducts = products;
    newproducts.forEach((product) => {
        product["sale"] = 0;
    });
    saveProductsToLocal(newproducts);
}

function getAvailableSearches() {
    let final = [];

    products.forEach((product) => {
        final.push(product["title"]);
    });

    categories.forEach((category) => {
        final.push(category["title"]);
    });
    return final;
}

searchbox = document.querySelector('.search-box');
resultbox = document.querySelector(".result-box");
resultbox.style.display = 'none';

window.onclick = (event) => {
    if (!event.target.matches(".result-box") && !event.target.matches(".resultli")) {
        resultbox.style.display = 'none';
    }
    if(event.target.matches(".search-box") && event.target.value.length > 0){
        resultbox.style.display = 'block';
    }
    if (!event.target.matches(".category-result-box") && !event.target.matches(".resultli")) {
        if(document.querySelector(".category-result-box") !== null) {
            document.querySelector(".category-result-box").style.display = 'none';
            document.querySelector(".category-result-box").style.border = '1px solid transparent';
        }
    }
}

searchbox.onkeyup = function() {    
    let result = [];
    let input = searchbox.value;
    result = getResultsFor(input);
    if(result.length !== 0) {
        displayResultInBox(result);
    }
}

function displayResultInBox(result) {
    const content = result.map((list) => {
        return `<a href='search.html?search=${list}'><li class='resultli'>${list}</li></a>`;
    });

    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

searchbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        doSearch();
    }
});

function doSearch() {
    searchbox = document.querySelector('.search-box');
    val = searchbox.value;
    window.location.href="search.html?search=" + val;
}

function getResultsFor(search) {
    result = [];
    if(search.length > 0) {
        resultbox.style.display = 'block';
        result = availablesearches.filter((keyword) => {
            return keyword.toLowerCase().includes(search.toLowerCase());
        });
    }
    return result;
}

function getAvailableCategorySearches() {
    let final = [];
    categories.forEach((category) => {
        document.querySelector(".category-result-box").style.display = 'block';
        document.querySelector(".category-result-box").style.border = '1px solid #000000';
        final.push(category["title"]);
    });
    return final;
}

function getCategoriesFor(search) {
    result = [];
    if(search.length > 0) {
        available = getAvailableCategorySearches();
        result = available.filter((keyword) => {
            return keyword.toLowerCase().includes(search.toLowerCase());
        });
    }
    return result;
}

function getSearchResults(productelement, productsurroundingelement, categoryelement) {
    url = window.location.search;
    const urlparams = new URLSearchParams(url);
    if(urlparams.has('search')) {
        search = urlparams.get('search');

        results = getResultsFor(search);
        if(results.length > 0) {
            document.querySelector(".small-container-nosearch").innerHTML = `<h1 class="searchheader">Suchergebnisse für "${search}"</h1>`;
            getCategoriesFromSearch(search, categoryelement);
            getProductsFromSearch(search, productelement, productsurroundingelement);
        } else {
            document.querySelector(".small-container-nosearch").innerHTML = `<h1 class="searchheader">Keine Suchergebnisse gefunden!</h1>
            \n<a href="index.html"><button class="viewmorebutton">Zur Startseite <i class="ri-arrow-right-double-fill"></i></button></a>`;
        }
    }
}

function getProductsFromSearch(search, element, surroundingelement) {
    let arraytodo = [];
    results = getResultsFor(search);
    arraytodo.push(`<h1 class="productsheader">Produkte</h1>\n<div class="productrow">`);
    results.forEach((result) => {
        product = getProductByTitle(result);
        if(product !== undefined) {
            arraytodo.push(`<div class="${surroundingelement}" onclick="onProductClick(${product["id"]})">
                ` + getImageFromProduct(product) + `
                <h4>${product["title"]}</h4>
                ` + getPriceAndSale(product["id"]) + `
                <div class="productrow">` + getTagsFromProduct(product["id"]) + `</div></div>`);
        }
    });
    arraytodo.push(`</div>`);

    if(arraytodo.length > 2) {
        let final = arraytodo.join("\n");
        document.querySelector("." + element).innerHTML = final;
    }
}

function getCategoriesFromSearch(search, element) {
    let arraytodo = [];
    results = getResultsFor(search);
    arraytodo.push(`<h1 class="categoryheader">Kategorien</h1><div class="categoryrow">`);
    results.forEach((result) => {
        category = getCategoryByTitle(result);
        if(category !== undefined) {
            arraytodo.push(`<div class="categorywrap">
                <a href="category.html?category=${category["identifier"]}"><button class="categorybutton"><i class="${category["icon"]}" style="color:${category["color"]}"></i> ${category["title"]}</button></a>
            </div>`);
        }
    });
    arraytodo.push(`</div`);

    if(arraytodo.length > 2) {
        let final = arraytodo.join("\n");
        document.querySelector("." + element).innerHTML = final;
    }
}

function getCategoryByTitle(title) {
    var item = categories.find(item => item.title === title);
    return item;
}

function getProductByTitle(title) {
    var item = products.find(item => item.title === title);
    return item;
}

function onProductClick(id) {
    window.location.href="product.html?id=" + id;
}

function getProductSite(element) {
    url = window.location.search;
    const urlparams = new URLSearchParams(url);
    if(urlparams.has('id')) {
        id = urlparams.get('id');
        product = getProductFromId(parseInt(id, 10));

        if(product !== null && product !== undefined) {
            date = new Date(product["dateadded"]);
            viewdate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
            final = `
            <div class="prrow">
                <div class="imgs">
                    ` + getImageFromProduct(product) + `
                </div>
                <div class="prinfos">
                    <h1 class="prheader">${product["title"]}</h1>
                    <div class="prprice">` + getPriceAndSale(parseInt(id, 10)) + `</div>
                    <p class="prdescription">Beschreibung:<br>${product["description"]}</br></p>
                </div>
            </div>
            <div class="productrowbutton">
                <div>
                    ` + getTagsFromProduct(product["id"]) + `
                    <p class="pruser">Von: ${product["user"]}</p>
                    <p class="prdate">Veröffentlicht: ${viewdate}</p>
                </div>
                <a href="products.html?sorter=sale"><button class="viewmorebutton">Zum Warenkorb hinzufügen <i class="ri-arrow-right-double-fill"></i></button></a>
            </div>
            `;

            document.querySelector("." + element).innerHTML = final;
        } else {
            error = `<h1 class="searchheader">Error: Kein Produkt mit der Id</h1>`;
            document.querySelector("." + element).innerHTML = error;
        }
    } else {
        error = `<h1 class="searchheader">Error: Kein Produkt mit der Id</h1>`;
        document.querySelector("." + element).innerHTML = error;
    }
}

function initTheme() {
    local = localStorage.getItem("theme");
    if(local === null || local === undefined) {
        localStorage.setItem("theme", "light-mode");
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.add(local);
    }
}

initTheme();

function toggleTheme() {
    if(document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem("theme", "dark-mode");
        updateThemeButtonAndOtherStuff("nav-right");
    } else if(document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem("theme", "light-mode");
        updateThemeButtonAndOtherStuff("nav-right");
    }
}

function getThemeButton() {
    if(localStorage.getItem("theme") === "dark-mode") {
        return `<a onclick="toggleTheme()"><i class="ri-sun-line"></i></a>`;
    } else if(localStorage.getItem("theme") === "light-mode") {
        return `<a onclick="toggleTheme()"><i class="ri-moon-line"></i></a>`;
    }
}

function updateThemeButtonAndOtherStuff(element) {
    button = getThemeButton();
    document.querySelector("." + element).innerHTML = `<a href="upload.html"><i class="ri-upload-line"></i></a>` + button + `<a href="#"><i class="ri-shopping-bag-3-line"></i></a>`;
}

function onUploadClick() {
    titlebox = document.querySelector(".title-box");
    descriptionbox = document.querySelector(".description-box");
    pricebox = document.querySelector(".price-box");
    categorybox = document.querySelector(".category-box");
    userbox = document.querySelector(".user-box");
    inputbutton = document.getElementById("fileinput");
    labelinput = document.querySelector(".custom-file-upload");
    if(titlebox.value.length > 0 && descriptionbox.value.length > 0 && pricebox.value.length > 0 && userbox.value.length > 0) {
        id = getFreeId();
        title = titlebox.value;
        description = descriptionbox.value;
        price = pricebox.value;
        user = userbox.value;
        tags = currentuploadcategories.map((x) => x);
        img = currentImageString;
        if(title.length <= 50 && price > 0 && price <= 100000 && description.length <= 300 && user.length <= 40 && img.length > 0 && currentuploadcategories.length > 0) {
            addProduct(title, price, img, description, tags, user, id);
            window.location.href="product.html?id=" + id;
        } else {
            if(title.length > 50) {
                titlebox.style.border = '1px solid red';
                titlebox.value = '';
                titlebox.placeholder = 'Titel überschreitet maximale Breite!';
            }
            if(price < 0 || price > 100000) {
                pricebox.style.border = '1px solid red';
                pricebox.value = '';
                pricebox.placeholder = 'Min: 0.01 - Max: 100000';
            }
            if(description.length > 300) {
                descriptionbox.style.border = '1px solid red';
                descriptionbox.value = '';
                descriptionbox.placeholder = 'Maximal 300 Buchstaben!';
            }
            if(user.length > 40) {
                userbox.style.border = '1px solid red';
                userbox.value = '';
                userbox.placeholder = 'Maximal 40 Buchstaben!';
            }
            if(img.length == 0) {
                labelinput.style.border = '1px solid red';
            }
        }
    } else {
        if(titlebox.value.length === 0) {
            titlebox.style.border = '1px solid red';
        }
        if(descriptionbox.value.length === 0) {
            descriptionbox.style.border = '1px solid red';
        }
        if(pricebox.value.length === 0) {
            pricebox.style.border = '1px solid red';
        }
        if(categorybox.value.length === 0) {
            categorybox.style.border = '1px solid red';
        }
        if(userbox.value.length === 0) {
            userbox.style.border = '1px solid red';
        }
    }
}

function initFileInput() {
    fileinput = document.getElementById("fileinput");
    labelinput = document.querySelector(".custom-file-upload");
    fileinput.addEventListener("change", e => {
        const file = fileinput.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            currentImageString = reader.result;
            updatePreview();
        });
        reader.readAsDataURL(file);
    });
}

function updatePreview() {
    previewheader = document.querySelector(".previewheader");
    previewheader.style.display = 'block';
    preview = document.querySelector(".preview");
    preview.src = currentImageString;
    preview.style.display = 'block';
}

function initCategoryBox() {
    categorybox = document.querySelector(".category-box");
    categorybox.onkeyup = function() {    
        let result = [];
        let input = categorybox.value;
        result = getCategoriesFor(input);
        if(result.length !== 0) {
            displayCategoryInBox("category-result-box", result);
        }
    }
}

function addCategoryToSelected(categorysearch) {
    category = getCategoryByTitle(categorysearch);
    categoryupload = document.querySelector(".categoryupload");
    html = categoryupload.innerHTML;
    if(!html.includes(`<button class="product-category" onclick="removeCategoryFromSelected('${category["title"]}')"><i class="ri-close-line"></i> ${category["title"]}</button>`)) {
        newhtml = html.concat("\n", `<button class="product-category" onclick="removeCategoryFromSelected('${category["title"]}')"><i class="ri-close-line"></i> ${category["title"]}</button>`);
        currentuploadcategories.push(category["identifier"]);
        categoryupload.innerHTML = newhtml;
    }
}

function removeCategoryFromSelected(categorysearch) {
    category = getCategoryByTitle(categorysearch);
    categoryupload = document.querySelector(".categoryupload");
    html = categoryupload.innerHTML;
    newhtml = html.replace(`<button class="product-category" onclick="removeCategoryFromSelected('${categorysearch}')"><i class="ri-close-line"></i> ${categorysearch}</button>`, "");
    currentuploadcategories.splice(currentuploadcategories.indexOf(category["identifier"]), 1);
    categoryupload.innerHTML = newhtml;
}

function displayCategoryInBox(element, result) {
    const content = result.map((list) => {
        return `<li class='resultli' onclick="addCategoryToSelected('${list}')">${list}</li>`;
    });

    document.querySelector("." + element).innerHTML = "<ul>" + content.join('') + "</ul>";
}

function getImageFromProduct(product) {
    storage = product["img"];
    if(storage.startsWith("./img/")) {
        return `<img src="${storage}">`
    } else if(storage.startsWith("data:image/jpeg;base64") || storage.startsWith("data:image/png;base64") || storage.startsWith("data:image/webp;base64") || storage.startsWith("data:image/gif;base64")) {
        return `<img src="${storage}">`
    }
}