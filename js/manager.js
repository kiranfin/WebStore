let currentPage = 1;
let maxElements = 20;
let maxVisiblePages = 5;
let maxSale = 80;

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
            let sortarray = products.toSorted((a, b) => a.price - b.price);
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${product["img"]}">
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products.toSorted((a, b) => a.price - b.price);
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${sortarray[i]["img"]}">
                    <h4>${sortarray[i]["title"]}</h4>
                    ` + getPriceAndSale(sortarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(sortarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    } else if(sorter === "sale") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => a.sale - b.sale).reverse();
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${product["img"]}">
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products.toSorted((a, b) => a.sale - b.sale).reverse();
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${sortarray[i]["img"]}">
                    <h4>${sortarray[i]["title"]}</h4>
                    ` + getPriceAndSale(sortarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(sortarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    } else if(sorter === "dateadded") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded));
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${product["img"]}">
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded));
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${sortarray[i]["img"]}">
                    <h4>${sortarray[i]["title"]}</h4>
                    ` + getPriceAndSale(sortarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(sortarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    } else if(sorter === "default" || sorter === null) {
        if(count === -1) {
            let sortarray = products;
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${product["img"]}">
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let sortarray = products;
            for(let i = 0; i < count; i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${sortarray[i]["img"]}">
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
            let sortarray = products.toSorted((a, b) => a.price - b.price);
            arraytodo = sortarray;
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.toSorted((a, b) => a.price - b.price);
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
            arraytodo = sortarray;
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
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded));
            arraytodo = sortarray;
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded));
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(product);
                });
            }
        }
    } else if(sorter === "default" || sorter === null) {
        if(count === -1) {
            let sortarray = products;
            arraytodo = sortarray;
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products;
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
            <img src="${product["img"]}">
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
                        <img src="${product["img"]}" alt="img">
                    </div>
                    <div class="info">
                        <h2>${product["title"]}</h2>
                        <div class="cardrow">
                            ` + getPriceAndSaleSuggestions(product["id"]) + `
                            <div class="btn">
                                <a href="#"><button class="cardbutton">Mehr Infos</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
        });
    } else {
        newproducts = products;
        for(let i = 0; i < count; i++) {    
            product = newproducts[Math.floor(Math.random()*newproducts.length)];
            arraytodo.push(`<div class="product swiper-slide">
                <div class="box">
                    <div class="img">
                        <img src="${product["img"]}" alt="img">
                    </div>
                    <div class="info">
                        <h2>${product["title"]}</h2>
                        <div class="cardrow">
                            ` + getPriceAndSaleSuggestions(product["id"]) + `
                            <div class="btn">
                                <a href="#"><button class="cardbutton">Mehr Infos</button></a>
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
        price = todoproduct.price;
        sale = todoproduct.sale
        salepricestraight = price - ((sale * 0.01) * price);
        saleprice = salepricestraight.toFixed(2);
        if(sale !== 0) {
            return `<p style="text-decoration:line-through">${price}€</p><p style="color:red"> ${saleprice}€ (${sale}%)</p>`;
        } else {
            return `<p>${price}€</p>`;
        }
    }
}

function getPriceAndSaleSuggestions(id) {
    todoproduct = getProductFromId(id);
    if(todoproduct !== null) {
        price = todoproduct.price;
        sale = todoproduct.sale
        salepricestraight = price - ((sale * 0.01) * price);
        saleprice = salepricestraight.toFixed(2);
        if(sale !== 0) {
            return `<div class="cardsale"><p style="text-decoration:line-through">${price}€</p><p style="color:red"> ${saleprice}€ (${sale}%)</p></div>`;
        } else {
            return `<p>${price}€</p>`;
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
    pr = getProducts(element, sorter, count, surroundingelement);
    prarray = getProductsArray(sorter, count);
    prev = (page - 1) * maxElements; //0
    all = page * maxElements; //20
    prcount = prarray.length; //4
    let arraytodo = [];
    if(prcount < all) {
        if(page - 1 <= 0) {
            for(let i = 0; i < prcount; i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${prarray[i]["img"]}">
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
            let final = arraytodo.join("\n");
            document.querySelector("." + element).innerHTML = final;
        } else {
            for(let i = (prev - 1); i < (prcount - 1); i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${prarray[i]["img"]}">
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
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${prarray[i]["img"]}">
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
            let final = arraytodo.join("\n");
            document.querySelector("." + element).innerHTML = final;
        } else {
            for(let i = (prev - 1); i < (all - 1); i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${prarray[i]["img"]}">
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
    for(let i = 0; false; i++) {
        if(!claimedids.includes(i)) break;
        return i;
    }
}

//addProduct("hamsti", 500, "./img/hamsti.jpg", "eins hamsti", ["cars"], "Andi");

function addProduct(title, price, img, description, tags, user) {
    id = getFreeId();
    sale = 0;
    now = new Date();
    date = toIsoString(now);
    products.push({id: id, title: title, price: price, sale: sale, img: img, description: description, tags: tags, user: user, dateadded: date});
    saveProductsToLocal(products);
}

function removeProduct(product) {
    index = products.indexOf(product);
    if(index > -1) {
        products.splice(index, 1);
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
            "2020-03-29T16:01:00.000+02:00", "2023-04-22T14:42:11.000+02:00 "];

        let tosave = [];
        for(let i = 0; i < titles.length; i++) {
            tosave.push({id: i, title: titles[i], price: prices[i], sale: 0, img: imgs[i], description: descriptions[i], tags: catetags[i], user: users[i], dateadded: dates[i]});
        }
        saveProductsToLocal(tosave);
    }
    local = localStorage.getItem("products");
    todo = JSON.parse(local);
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
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${product["img"]}">
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

console.log(products);

function randomSale() {
    newproducts = products;
    newproducts.forEach((product) => {
        product["sale"] = 0;
    });
    saveProductsToLocal(newproducts);

    arraytodo = [];
    newproducts = products;
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