'use strict'

const breakpoint = window.matchMedia('(min-width:769px)');

let mySwiper;

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
        pagination: {
            el: '.swiper-pagination.course-info__swiper-pagintation',
        }
    });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

mySwiper = new Swiper('.swiper.program-course__swiper', {
    direction: 'horizontal',
    loop: "true",
    pagination: {
        el: '.swiper-pagination.program-course__swiper-pagination',
    }
});
