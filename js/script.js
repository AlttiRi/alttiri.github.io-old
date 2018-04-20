"use strict";


function addMenuTransient() {

    let widthWhenMenu = 680; // Ширина, при которой появляется мобильное меню
    let navWrapper = document.querySelector(".nav-wrapper");
    if (!navWrapper) {
        console.log("[addMenuTransient] .nav-wrapper not found");
        return;
    }

    window.addEventListener("DOMContentLoaded", function () {
        let windowWidth = window.innerWidth;

        if (windowWidth <= widthWhenMenu) {
            navWrapper.classList.add("ready-for-transient");
        }
    });

    window.addEventListener("resize", function () {

        let windowWidth = window.innerWidth;

        if (windowWidth <= widthWhenMenu) {
            navWrapper.classList.add("ready-for-transient");
        } else {
            navWrapper.classList.remove("ready-for-transient");
        }
    });

}

function logger() {

    let logger = document.getElementById("logger");
    if (!logger) {
        console.log("[EventListener(\"resize\")] #logger not found");
        return;
    }

    let logWidth = () => {
        logger.innerText = `Width is ${window.innerWidth}px`
    };
    logWidth();

    window.addEventListener("resize", logWidth);

}



function swap() {
    let elem = document.getElementById("swappable-content");
    elem.classList.toggle("hidden");
}

/**
 * По клику  по #swapper
 * уберает/показывает содержимое #swappable-content
 */
function addSwapperListener() {

    let elem = document.getElementById("swapper");

    if (!elem) {
        console.log("[addSwapperListener] #swapper not found");
        return;
    }

    elem.addEventListener("click", swap);

}



/**
 * Добавляет возможность при повторном _таче_ по кнопке показа меню,
 * закрывать меню.
 *
 * Поскольку клик будет считать также hover'ом, используется класс .no-hover,
 * чтобы стили:hover при его наличии не работали. (:not(no-hover))
 *
 */
function addClosingMenuOnTouch() {

    let isHover = false;

    let btn = document.querySelector(".nav-btn");
    let wrapper = document.querySelector(".nav-wrapper");

    if (!btn || !wrapper) {
        console.log("[addClosingMenuOnTouch] .nav-btn || .nav-wrapper not found");
        return;
    }


    btn.addEventListener("touchstart", function () {

        if (isHover) {
            wrapper.classList.add("no-hover");
            isHover = false;
        } else {
            wrapper.classList.remove("no-hover");
            isHover = true;
        }

    }, {passive: true});

    wrapper.addEventListener("mouseleave", function () {

        isHover = false;

    });

}


/**
 * Просто для проверки работы JS.
 */
function testConsoleOutput() {
    console.log("It's working [AlttiRi.github.io]");
}


testConsoleOutput();

addSwapperListener();
logger();

addClosingMenuOnTouch();
addMenuTransient();
