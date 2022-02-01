"use strict";

// Hamburger nav
var btn = document.querySelector(".fancy-burger");
var links = document.getElementsByClassName("link");
var list = document.getElementById("hamburger-list");


btn.addEventListener("click", () => {
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
});

for (var x of links) {
    x.addEventListener("click", function () {
        for (var x of links) {
            x.classList.remove("active");
        }
        this.classList.add("active");
    });
}
window.addEventListener("resize", function () {
    list.classList.remove("width");
    btn.classList.remove("open");
    for (var x of links) {
        x.classList.remove("active");
    }
});

//
// features section tab navigation
//

var tabNavigationElements = document.querySelectorAll(".features .tab-navigation li");
var tabContentElements = document.querySelectorAll(".features .tab-content");

function removeActiveClassesFromElements(elements) {
    for (var element of elements) {
        element.classList.remove("active");
    }
}

for (var tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function () {
        var target = this.dataset.target;

        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");

        removeActiveClassesFromElements(tabContentElements);
        document
            .querySelector('.tab-content[data-tab="' + target + '"]')
            .classList.add("active");
    });
}

//
// prices section swiper gallery
//

var pricing = new Swiper(".pricing-swiper", {
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 120,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
    },
});

//
// Reviews section swiper gallery
//

var swiper = new Swiper(".reviews-swiper", {
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 120,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
    },
});

//FormTop 
var vardas = document.getElementById("first-name");
var pavarde = document.getElementById("last-name");
var numeris = document.getElementById("phone-number");
var started = document.getElementById("get-started");

started.addEventListener("click", function () {
    if (vardas.value && pavarde.value && numeris.value) {
        alert("Successfully Sent");
        vardas.value = "";
        pavarde.value = "";
        numeris.value = "";
    } else {
        alert("Form not completed");
    }
});

//FormBottom
var vardas2 = document.getElementById("first-name2");
var pavarde2 = document.getElementById("last-name2");
var numeris2 = document.getElementById("phone-number2");
var send = document.getElementById("contact-us");

send.addEventListener("click", function () {
    if (vardas2.value && pavarde2.value && numeris2.value) {
        alert("Successfully Sent");
        vardas2.value = "";
        pavarde2.value = "";
        numeris2.value = "";
    } else {
        alert("Form not completed");
    }
});