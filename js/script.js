"use strict"

$(document).ready(function () {
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
    // let formInputs = document.querySelectorAll('.js-form-input');
    // let success = document.querySelector('.send-success');
    window.userName = false;
    window.userMail = false;
    window.userTel = false;
    window.userAgreement = false;

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
        if (userName.value.length < 2) {
            userName.classList.add('fail');
            window.userName = false;
        } else {
            userName.classList.remove('fail');
            window.userName = true;
        }
    }

    function checkMail() {
        let mail = document.querySelector('._mail');
        let mailValue = mail.value;
        if (validateEmail(mailValue)) {
            mail.classList.remove('fail');
            window.userMail = true;
        } else {
            mail.classList.add('fail');
            window.userMail = false;
        }
    }

    function checkPhone() {
        let phone = document.querySelector('._tel');
        let phoneValue = phone.value;
        if (validatePhone(phoneValue)) {
            phone.classList.remove('fail');
            window.userTel = true;
        } else {
            phone.classList.add('fail');
            window.userTel = false;
        }
    }

    function checkAgreement() {
        let agreementBlock = document.querySelector('.main_form__confidentiality');
        let agreement = document.querySelector('._agreement');
        if (!agreement.checked) {
            agreementBlock.classList.add('fail');
            window.userAgreement = false;
        } else {
            agreementBlock.classList.remove('fail');
            window.userAgreement = true;
        }
    }

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        checkName();
        checkMail();
        checkPhone();
        checkAgreement();
        if (window.userName && window.userMail && window.userTel && window.userAgreement) {
            let formData = new FormData(form);
            console.log(formData.has('userName'));
            console.log(formData.has('userMail'));
            console.log(formData.has('userTel'));
            console.log(formData.has('userConf'));
            $.ajax({
                url: "sendmail.php",
                method: "POST",
                data: formData,
                success: function(data) { // в случае успешного завершения
                    console.log("Завершилось успешно"); // выведем в консоли успех 
                    console.log(data); // и что в ответе получили, если там что-то есть
                },
                error: function() { // в случае провала
                    console.log("Завершилось с ошибкой"); // сообщение об ошибке
                }
            });
            // let response = fetch('sendmail.php', {
            //     method: 'POST',
            //     body: formData
            // });
            // console.log(response);
            // if (response.ok) {
            //     let result = response.json();
            //     alert(result.message);
            //     form.reset();
            // } else {
            //     alert('Ошибка');
            // }
        }
    });
});