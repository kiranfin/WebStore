import products from "./json/products.json" assert {type: 'json'};
import categories from "./json/categories.json" assert {type: 'json'};

let currentPage = 1;
let maxElements = 20;
let maxVisiblePages = 5;

let currentSorter = '';

const availablesorts = ["default", "dateadded", "price", "sale"]; 

function getCategories(element) {
    let arraytodo = [];
    categories.forEach((category) => {
        arraytodo.push(`<div class="categorywrap">
            <a href="#"><button class="categorybutton"><i class="${category["icon"]}" style="color:${category["color"]}"></i> ${category["title"]}</button></a>
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
        for(let i = 0; i < count; i++) {
            product = products[Math.floor(Math.random()*products.length)];
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
    console.log(currentSorter);
    console.log(document.getElementsByClassName('sorter'));
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