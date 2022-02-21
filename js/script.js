'use strict'

const breakpoint = window.matchMedia('(min-width:769px)');

let mySwiper;
let mySecondSwiper;

const breakpointChecker = function () {
    if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
        return;
    } else if (breakpoint.matches === false) {
        return enableSwiper();
    }
};

const enableSwiper = function () {
    mySwiper = new Swiper('.swiper.course-info__swiper', {
        direction: 'horizontal',
        loop: "true",
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination.course-info__swiper-pagination',
        }
    });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

const enableSecondSwiper = function () {
    mySecondSwiper = new Swiper('.swiper.program-course__swiper', {
        direction: 'horizontal',
        loop: "true",
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination.program-course__swiper-pagination',
        }
    });
};

const breakpointSecondChecker = function () {
    if (breakpoint.matches === true) {
        if (mySecondSwiper !== undefined) mySecondSwiper.destroy(true, true);
        return;
    } else if (breakpoint.matches === false) {
        return enableSecondSwiper();
    }
};

breakpoint.addListener(breakpointSecondChecker);
breakpointSecondChecker();
