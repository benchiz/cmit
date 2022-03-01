'use strict'

// $(document).ready(function () {
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

let btn = document.querySelector('button');

function validateEmail(mail) {
    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regEx.test(String(mail).toLowerCase());
}

function validatePhone(phone) {
    const regExPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return regExPhone.test(phone);
}

function checkName() {
    let userName = document.querySelector('._name');
    if (userName.value < 3) {
        userName.style.borderColor = 'red';
        return false;
    } else {
        userName.style.borderColor = 'green';
        return true;
    }
}

function checkMail() {
    let mail = document.querySelector('._mail');
    if (validateEmail(mail)) {
        mail.style.borderColor = 'green';
        return true;
    } else {
        mail.style.borderColor = 'red';
    }
    return false;
}

function checkPhone() {
    let phone = document.querySelector('._tel');
    if (validatePhone(phone)) {
        phone.style.borderColor = 'green';
        return true;
    } else {
        phone.style.borderColor = 'red';
    }
    return false;
}

function checkAgreement() {
    let agreement = document.querySelector('._agreement');
    console.log(agreement);
    if (!agreement.checked) {
        agreement.closest('.main_form__confidentiality').querySelector('label a').style.border = '1px solid red';
        return false;
    } else {
        agreement.closest('.main_form__confidentiality').querySelector('label a').style.border = '1px solid green';
        return true;
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkName();
    checkMail();
    checkPhone();
    checkAgreement();
    if (checkName() && checkMail() && checkPhone() && checkAgreement()) {
        console.log('Данные отправлены.');
    } else {
        console.log('Заполните все данные.');
    }
});
// });
