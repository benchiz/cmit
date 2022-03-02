"use strict"

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

$('._tel').mask("+7(999) 999-9999");
let btn = document.querySelector('.js-submit');
let form = document.querySelector('.js-form');

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
    if (userName.value < 2) {
        userName.classList.add('fail');
        userName.classList.remove('success');
        return false;
    } else {
        userName.classList.add('success');
        userName.classList.remove('fail');
        return true;
    }
}

function checkMail() {
    let mail = document.querySelector('._mail');
    let mailValue = mail.value;
    if (validateEmail(mailValue)) {
        mail.classList.add('success');
        mail.classList.remove('fail');
        return true;
    } else {
        mail.classList.add('fail');
        mail.classList.remove('success');
    }
    return false;
}

function checkPhone() {
    let phone = document.querySelector('._tel');
    let phoneValue = phone.value;
    if (validatePhone(phoneValue)) {
        phone.classList.add('success');
        phone.classList.remove('fail');
        return true;
    } else {
        phone.classList.add('fail');
        phone.classList.remove('success');
    }
    return false;
}

function checkAgreement() {
    let agreementBlock = document.querySelector('.main_form__confidentiality');
    let agreement = document.querySelector('._agreement');
    if (!agreement.checked) {
        agreementBlock.classList.add('fail');
        return false;
    } else {
        agreementBlock.classList.remove('fail');
        return true;
    }
}

function validateForm() {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        checkName();
        checkMail();
        checkPhone();
        checkAgreement();
        if (checkName() && checkMail() && checkPhone() && checkAgreement()) {
            let formData = new FormData(form);
            console.log(formData);
        // form.addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     form.classList.add('sendComplete');
        //     let response = fetch('sendmail.php', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     if (response.ok) {
        //         let result = response.json();
        //         alert(result.message);
        //         formPreview.innerHTML = '';
        //         form.reset();
        //     } else {
        //         alert('Ошибка');
        //     }
        }
        console.log('click');
    });
}

validateForm();
