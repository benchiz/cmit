'use strict'

const breakpoint = window.matchMedia('(min-width:769px)');
const breakpointTablet = window.matchMedia('(min-width:1101px)');

let mySwiper;
let mySecondSwiper;
let gradSwiper;

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


const graduateSwiper = function () {
    gradSwiper = new Swiper('.swiper.graduate__swiper', {
        direction: 'horizontal',
        loop: "true",
        spaceBetween: 20,
        slidesPerGroup: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2
            }
        },
        pagination: {
            el: '.swiper-pagination.graduate__swiper-pagination',
        }
    });
};

const breakpointGradChecker = function () {
    if (breakpointTablet.matches === true) {
        if (gradSwiper !== undefined) gradSwiper.destroy(true, true);
        return;
    } else if (breakpointTablet.matches === false) {
        return graduateSwiper();
    }
};

breakpointTablet.addListener(breakpointGradChecker);
breakpointGradChecker();
