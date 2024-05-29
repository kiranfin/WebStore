let currentPage = 1;
let maxElements = 4;

let maxVisiblePages = 5;

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
        color: "white",
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
]; //also change later

const products = [
    {
        id: 0,
        title: "Bett",
        price: 120,
        sale: 30,
        img: "./img/bett.jpg",
        description: "Das hier ist ein toller Hamster ähh Bett, den ich nicht verkaufe",
        tags: ["furniture"],
        user: "kiranfin",
        dateadded: "2024-03-15T15:34:17.000+02:00"
    },
    {
        id: 1,
        title: "Pflanze",
        price: 39.99,
        sale: 0,
        img: "./img/pflanze.jpg",
        description: "Das hier ist ein toller Pflanze ähh, den ich nicht verkaufe",
        tags: ["garden"],
        user: "Gerd",
        dateadded: "2024-04-15T15:34:17.000+02:00"
    },
    {
        id: 2,
        title: "Smartphone S24 Ultra",
        price: 437.46,
        sale: 0,
        img: "./img/s24.jpg",
        description: "Das hier ist ein tolls gakaxy, den ich nicht verkaufe",
        tags: ["technology", "accessoires"],
        user: "kiranfin",
        dateadded: "2024-02-15T15:34:17.000+02:00"
    },
    {
        id: 3,
        title: "Fiat 500",
        price: 6936.99,
        sale: 69,
        img: "./img/fiat.jpg",
        description: "Das hier ist ein tolls fiaaaat, den ich nicht verkaufe",
        tags: ["cars"],
        user: "kiranfin",
        dateadded: "2024-01-15T15:34:17.000+02:00"
    },
    {
        id: 4,
        title: "Bett",
        price: 120,
        sale: 30,
        img: "./img/bett.jpg",
        description: "Das hier ist ein toller Hamster ähh Bett, den ich nicht verkaufe",
        tags: ["furniture"],
        user: "kiranfin",
        dateadded: "2024-03-15T15:34:17.000+02:00"
    },
    {
        id: 5,
        title: "Pflanze",
        price: 39.99,
        sale: 0,
        img: "./img/pflanze.jpg",
        description: "Das hier ist ein toller Pflanze ähh, den ich nicht verkaufe",
        tags: ["garden"],
        user: "Gerd",
        dateadded: "2024-04-15T15:34:17.000+02:00"
    },
    {
        id: 6,
        title: "Smartphone S24 Ultra",
        price: 437.46,
        sale: 0,
        img: "./img/s24.jpg",
        description: "Das hier ist ein tolls gakaxy, den ich nicht verkaufe",
        tags: ["technology", "accessoires"],
        user: "kiranfin",
        dateadded: "2024-02-15T15:34:17.000+02:00"
    },
    {
        id: 7,
        title: "Fiat 500",
        price: 6936.99,
        sale: 69,
        img: "./img/fiat.jpg",
        description: "Das hier ist ein tolls fiaaaat, den ich nicht verkaufe",
        tags: ["cars"],
        user: "kiranfin",
        dateadded: "2024-01-15T15:34:17.000+02:00"
    },
    {
        id: 8,
        title: "Bett",
        price: 120,
        sale: 30,
        img: "./img/bett.jpg",
        description: "Das hier ist ein toller Hamster ähh Bett, den ich nicht verkaufe",
        tags: ["furniture"],
        user: "kiranfin",
        dateadded: "2024-03-15T15:34:17.000+02:00"
    },
    {
        id: 9,
        title: "Pflanze",
        price: 39.99,
        sale: 0,
        img: "./img/pflanze.jpg",
        description: "Das hier ist ein toller Pflanze ähh, den ich nicht verkaufe",
        tags: ["garden"],
        user: "Gerd",
        dateadded: "2024-04-15T15:34:17.000+02:00"
    },
    {
        id: 10,
        title: "Smartphone S24 Ultra",
        price: 437.46,
        sale: 0,
        img: "./img/s24.jpg",
        description: "Das hier ist ein tolls gakaxy, den ich nicht verkaufe",
        tags: ["technology", "accessoires"],
        user: "kiranfin",
        dateadded: "2024-02-15T15:34:17.000+02:00"
    },
    {
        id: 11,
        title: "Fiat 500",
        price: 6936.99,
        sale: 69,
        img: "./img/fiat.jpg",
        description: "Das hier ist ein tolls fiaaaat, den ich nicht verkaufe",
        tags: ["cars"],
        user: "kiranfin",
        dateadded: "2024-01-15T15:34:17.000+02:00"
    },{
        id: 12,
        title: "Bett",
        price: 120,
        sale: 30,
        img: "./img/bett.jpg",
        description: "Das hier ist ein toller Hamster ähh Bett, den ich nicht verkaufe",
        tags: ["furniture"],
        user: "kiranfin",
        dateadded: "2024-03-15T15:34:17.000+02:00"
    },
    {
        id: 13,
        title: "Pflanze",
        price: 39.99,
        sale: 0,
        img: "./img/pflanze.jpg",
        description: "Das hier ist ein toller Pflanze ähh, den ich nicht verkaufe",
        tags: ["garden"],
        user: "Gerd",
        dateadded: "2024-04-15T15:34:17.000+02:00"
    },
    {
        id: 14,
        title: "Smartphone S24 Ultra",
        price: 437.46,
        sale: 0,
        img: "./img/s24.jpg",
        description: "Das hier ist ein tolls gakaxy, den ich nicht verkaufe",
        tags: ["technology", "accessoires"],
        user: "kiranfin",
        dateadded: "2024-02-15T15:34:17.000+02:00"
    },
    {
        id: 15,
        title: "Fiat 500",
        price: 6936.99,
        sale: 69,
        img: "./img/fiat.jpg",
        description: "Das hier ist ein tolls fiaaaat, den ich nicht verkaufe",
        tags: ["cars"],
        user: "kiranfin",
        dateadded: "2024-01-15T15:34:17.000+02:00"
    },{
        id: 16,
        title: "Bett",
        price: 120,
        sale: 30,
        img: "./img/bett.jpg",
        description: "Das hier ist ein toller Hamster ähh Bett, den ich nicht verkaufe",
        tags: ["furniture"],
        user: "kiranfin",
        dateadded: "2024-03-15T15:34:17.000+02:00"
    },
    {
        id: 17,
        title: "Pflanze",
        price: 39.99,
        sale: 0,
        img: "./img/pflanze.jpg",
        description: "Das hier ist ein toller Pflanze ähh, den ich nicht verkaufe",
        tags: ["garden"],
        user: "Gerd",
        dateadded: "2024-04-15T15:34:17.000+02:00"
    },
    {
        id: 18,
        title: "Smartphone S24 Ultra",
        price: 437.46,
        sale: 0,
        img: "./img/s24.jpg",
        description: "Das hier ist ein tolls gakaxy, den ich nicht verkaufe",
        tags: ["technology", "accessoires"],
        user: "kiranfin",
        dateadded: "2024-02-15T15:34:17.000+02:00"
    },
    {
        id: 19,
        title: "Fiat 500",
        price: 6936.99,
        sale: 69,
        img: "./img/fiat.jpg",
        description: "Das hier ist ein tolls fiaaaat, den ich nicht verkaufe",
        tags: ["cars"],
        user: "kiranfin",
        dateadded: "2024-01-15T15:34:17.000+02:00"
    }
]; //change this later

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
            let i = 0;
            let sortarray = products.toSorted((a, b) => a.price - b.price);
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(`<div class="${surroundingelement}">
                        <img src="${product["img"]}">
                        <h4>${product["title"]}</h4>
                        ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                        </div>`);
                    i++;
                });
            }
        }
    } else if(sorter === "sale") {
        if(count === -1) {
            let sortarray = products.toSorted((a, b) => a.sale - b.sale);
            sortarray.forEach((product) => {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${product["img"]}">
                    <h4>${product["title"]}</h4>
                    ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                    </div>`);
            });
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.toSorted((a, b) => a.sale - b.sale);
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(`<div class="${surroundingelement}">
                        <img src="${product["img"]}">
                        <h4>${product["title"]}</h4>
                        ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                        </div>`);
                });
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
            let i = 0;
            let sortarray = products.toSorted((a, b) => new Date(a.dateadded) - new Date(b.dateadded));
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(`<div class="${surroundingelement}">
                        <img src="${product["img"]}">
                        <h4>${product["title"]}</h4>
                        ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                        </div>`);
                });
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
            let i = 0;
            let sortarray = products;
            if(i < count) {
                sortarray.forEach((product) => {
                    arraytodo.push(`<div class="${surroundingelement}">
                        <img src="${product["img"]}">
                        <h4>${product["title"]}</h4>
                        ` + getPriceAndSale(product["id"]) + `<div class="productrow">` + getTagsFromProduct(product["id"]) + `</div>
                        </div>`);
                });
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
            let sortarray = products.toSorted((a, b) => a.sale - b.sale);
            arraytodo = sortarray;
        } else if(count !== -1 && count !== 0) {
            let i = 0;
            let sortarray = products.toSorted((a, b) => a.sale - b.sale);
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
    console.log(prarray);
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
        } else {
            for(let i = (prev - 1); i < (prcount - 1); i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${prarray[i]["img"]}">
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
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
        } else {
            for(let i = (prev - 1); i < (all - 1); i++) {
                arraytodo.push(`<div class="${surroundingelement}">
                    <img src="${prarray[i]["img"]}">
                    <h4>${prarray[i]["title"]}</h4>
                    ` + getPriceAndSale(prarray[i]["id"]) + `<div class="productrow">` + getTagsFromProduct(prarray[i]["id"]) + `</div>
                    </div>`);
            }
        }
    }
    let final = arraytodo.join("\n");
    return final;
}

function getPageButtons(element) {
    arraytodo = [];
    curr = getCurrentPage();
    pagecount = Math.ceil(products.length / maxElements);

    if(curr !== 1) {
        arraytodo.push(`<button onclick="setCurrentPage(getCurrentPage() - 1)"><i class="ri-arrow-left-s-line"></i></button>`);
    }
    for(let i = 1; i <= pagecount; i++) {
        if(i !== curr) {
            arraytodo.push(`<button onclick="setCurrentPage(${i})">${i}</button>`);
        } else {
            arraytodo.push(`<button class="clickedpage">${i}</button>`);
        }
    }
    if(curr !== pagecount) {
        arraytodo.push(`<button onclick="setCurrentPage(getCurrentPage() + 1)"><i class="ri-arrow-right-s-line"></i></button>`);
    }

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
}

function decreaseCurrentPage(element) {
    if(currentPage > getVisiblePages()[0]) { 
        let buttons = document.getElementsByClassName(element);
        buttons[currentPage - 1].classList.remove("active");
        setCurrentPage(currentPage - 1);
        buttons[currentPage - 1].classList.add("active");
    }
}

function increaseCurrentPage(element) {
    if(currentPage < getVisiblePages()[getVisiblePages().length - 1]) {
        let buttons = document.getElementsByClassName(element);
        buttons[currentPage - 1].classList.remove("active");
        setCurrentPage(currentPage + 1);
        buttons[currentPage - 1].classList.add("active");
    }
}

/*function initCurrentPage() {
    local = sessionStorage.getItem("currentPage");
    console.log(local);
    console.log(currentPage);
    if(local !== null) {
        setCurrentPage(local);
    } else {
        setCurrentPage(1);
    }
}

initCurrentPage();*/

function getVisiblePages() {
    total = Math.ceil(products.length / maxElements);
    max = maxVisiblePages;
    current = currentPage;

    const half = Math.round(max / 2);
    let to = max;

    if(current + half >= total) {
        to = total;
    } else if(current > half) {
        to = current + half;
    }

    let from = to - max;

    return Array.from({length: max}, (_, i) => (i + 1) + from);
}