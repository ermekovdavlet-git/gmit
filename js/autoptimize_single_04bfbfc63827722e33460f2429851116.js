function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(
            new Error(`РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё СЃРєСЂРёРїС‚Р° ${src}`)
        );
        document
            .head
            .append(script);
    });
}
function RemoveParameterFromUrl(url, parameter) {
    return url
        .replace(new RegExp(
            '[?&]' + parameter + '=[^&#]*(#.*)?$'
        ), '$1')
        .replace(new RegExp('([?&])' + parameter + '=[^&]*&'), '$1');
}
function focusMethod() {
    let elem = document.getElementById("inputsearchid");
    elem.focus();
    elem.selectionStart = elem.value.length;
}
function getParentImageContentSection(element) {
    var parentElement = element.parentElement;
    if (parentElement === null) {
        console.error('Can not find "content-image-section" of "person-image-section"')
        return null;
    }
    for (var index = 0; index < parentElement.classList.length; index += 1) {
        if (parentElement.classList[index] === 'content-image-section' || parentElement.classList[index] === 'person-image-section') {
            return parentElement;
        }
    }
    return getParentImageContentSection(parentElement);
}
function resizeImageConcealer(window, {
    imageSelector
}, callback) {
    var imageConcealers = window
        .document
        .getElementsByClassName(imageSelector);
    for (var index = 0; index < imageConcealers.length; index++) {
        var imageConcealer = imageConcealers[index];
        var contentImageSection = getParentImageContentSection(imageConcealer);
        if (!contentImageSection) {
            return;
        }
        imageConcealer.setAttribute(
            'style',
            `left: ${ - (window.innerWidth - contentImageSection.offsetWidth) / 2}px`,
        );
        if (callback) {
            callback(imageConcealer);
        }
    }
}
document.addEventListener('wpcf7spam', function (event) {
    jQuery(document).ready(function ($) {
        $(this)
            .find('.cform-field-not-valid')
            .removeClass('cform-field-not-valid');
        recaptcha = $(this).find('.recaptcha-container');
        if (recaptcha.css('display') == 'none') {
            recaptcha.css('display', 'block');
            $(this)
                .find('.submit')
                .hide();
            return false;
        }
    });
}, false);
document.addEventListener('wpcf7submit', function (event) {
    if ('96' == event.detail.contactFormId || '7024' == event.detail.contactFormId) {
        if (location.href.indexOf('contact-us')) {
            ga('send', {
                hitType: 'event',
                eventCategory: 'contactUs',
                eventAction: 'SubmitForm'
            });
        }
    } else if ('22' == event.detail.contactFormId || '7022' == event.detail.contactFormId) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Hompage',
            eventAction: 'SubmitForm'
        });
    } else if ('22042' == event.detail.contactFormId || '22043' == event.detail.contactFormId) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Blog',
            eventAction: 'SubmitForm',
            eventLabel: 'Article page',
            eventValue: location.href
        });
    }
    console.log(event.detail.contactFormId)
}, false);
var correctCaptcha = function (response) {
    emailEl = document.querySelector(
        '.cform-field_email .your-email > .wpcf7-email'
    );
    if (emailEl) {
        email = emailEl.value;
        const request = new XMLHttpRequest();
        const url = "/spreadsheets/update.php";
        const params = "email=" + email;
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.responseText);
            }
        });
        request.send(params);
    }
    document
        .querySelector('.wpcf7-form.spam .submit')
        .click();
};
var player;
function youTubeINIT() {
    let promiseYouTube = loadScript("https://www.youtube.com/iframe_api");
    promiseYouTube.then(script => {
        console.log(`${script.src} loaded!`)
    }, error => console.log(`Error: ${error.message}`));
}
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytvideoFeedback', {
        videoId: '',
        host: 'https://www.youtube.com',
        playerVars: {
            'controls': 1,
            'showinfo': 0,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
    console.log('play')
}
function onPlayerReady(event) {
    event
        .target
        .playVideo();
}
function stopVideo() {
    player.stopVideo();
}
var isUXlSection = function () {
    return window.innerWidth > 1759;
}
var isXXlSection = function () {
    return window.innerWidth < 1760 && window.innerWidth > 1011;
}
var isXlSection = function () {
    return window.innerWidth < 1011 && window.innerWidth > 575;
}
var isBigSection = function () {
    return window.innerWidth < 993 && window.innerWidth > 575;
}
var isSection = function () {
    return window.innerWidth < 767 && window.innerWidth > 575;
}
var isSMSection = function () {
    return window.innerWidth < 576;
}
function createStick(color) {
    var stickClass = "select-stick";
    if (color) {
        stickClass = `${stickClass} select-stick_${color}`;
    }
    var stickElement = document.createElement("DIV");
    stickElement.setAttribute("class", stickClass);
    return stickElement;
}
function createCustomOption(
    {newSelect, selectElement, optionIndex, stickColor}
) {
    var newOption = document.createElement("LI");
    var paragraph = document.createElement("P");
    paragraph.innerHTML = selectElement
        .options[optionIndex]
        .innerHTML;
    newOption.appendChild(paragraph);
    newOption.addEventListener("click", function (event) {
        changeOriginalSelect.call(this, stickColor);
    });
    newSelect.appendChild(newOption);
}
function changeOriginalSelect(stickColor) {
    var originalSelect = this
        .parentNode
        .parentNode
        .getElementsByTagName("select")[0];
    var selectedItem = this.parentNode.previousSibling;
    for (
        var originalSelectIndex = 0;
        originalSelectIndex < originalSelect.length;
        originalSelectIndex++
    ) {
        if (originalSelect.options[originalSelectIndex].innerHTML == this.textContent) {
            originalSelect.selectedIndex = originalSelectIndex;
            selectedItem.innerHTML = this.textContent;
            var stickElement = createStick(stickColor);
            selectedItem.appendChild(stickElement);
            var sameAsSelectedElement = this
                .parentNode
                .getElementsByClassName("same-as-selected");
            for (
                var sameAsSelectedIndex = 0;
                sameAsSelectedIndex < sameAsSelectedElement.length;
                sameAsSelectedIndex++
            ) {
                sameAsSelectedElement[sameAsSelectedIndex].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
        }
    }
    selectedItem.click();
}
function closeAllSelect(elmnt) {
    var index,
        arrNo = [];
    var selectComponents = document.getElementsByClassName("select-items");
    var selectedSelectBox = document.getElementsByClassName("select-selected");
    for (index = 0; index < selectedSelectBox.length; index++) {
        if (elmnt == selectedSelectBox[index]) {
            arrNo.push(index)
        } else {
            selectedSelectBox[index]
                .classList
                .remove("select-arrow-active");
        }
    }
    for (index = 0; index < selectComponents.length; index++) {
        if (arrNo.indexOf(index)) {
            selectComponents[index]
                .classList
                .add("select-hide");
        }
    }
}
function handleSelect($) {
    var selectComponents = $(".custom-select-input");
    for (var selectIndex = 0; selectIndex < selectComponents.length; selectIndex++) {
        var selectElement = selectComponents[selectIndex].getElementsByTagName(
            "select"
        )[0];
        var newSelectedItem = document.createElement("DIV");
        var selectElementClass = selectElement.getAttribute("class");
        var newSelectedElementClass = "select-selected";
        if (selectElementClass) {
            newSelectedElementClass = `${newSelectedElementClass} ${selectElementClass}`;
        }
        newSelectedItem.setAttribute("class", newSelectedElementClass);
        var selectElementStyle = selectElement.getAttribute("style");
        if (selectElementStyle) {
            newSelectedItem.setAttribute("style", selectElementStyle);
        }
        newSelectedItem.innerHTML = selectElement
            .options[selectElement.selectedIndex]
            .innerHTML;
        selectComponents[selectIndex].appendChild(newSelectedItem);
        var stickColor = selectElement.getAttribute("stickColor");
        var stickElement = createStick(stickColor);
        newSelectedItem.appendChild(stickElement);
        var optionsColor = selectElement.getAttribute("optionsColor");
        var optionsClass = "select-items list-sq select-hide";
        if (stickColor) {
            optionsClass = `${optionsClass} list-sq_${optionsColor}`;
        }
        var selectedStickColor = selectElement.getAttribute("selectedStickColor");
        var newSelect = document.createElement("UL");
        newSelect.setAttribute("class", optionsClass);
        for (var optionIndex = 0; optionIndex < selectElement.length; optionIndex++) {
            createCustomOption.call(
                this,
                {newSelect, selectElement, optionIndex, stickColor: selectedStickColor}
            );
        }
        selectComponents[selectIndex].appendChild(newSelect);
        newSelectedItem.addEventListener("click", function (event) {
            event.stopPropagation();
            closeAllSelect(this);
            this
                .nextSibling
                .classList
                .toggle("select-hide");
            this
                .classList
                .toggle("select-arrow-active");
        });
    }
    document.addEventListener("click", closeAllSelect);
}
function hidePopups($) {
    $('.header-right__language').removeClass('active');
    $('.custom-select__list').removeClass('active');
    $('.mega-menu-toggle').removeClass('mega-menu-open');
    $('.mega-menu-header-menu-mobile-open').removeClass(
        'mega-menu-header-menu-mobile-open'
    );
}
function hidePopupsListener($) {
    var prevHeight = window.innerHeight;
    var prevWidth = window.innerWidth;
    return function (event) {
        var innerWidth = event.currentTarget.innerWidth;
        var innerHeight = event.currentTarget.innerHeight;
        if (prevWidth < 1010 && innerWidth >= 1010) {
            hidePopups($);
        }
        if (prevWidth > 1010 && innerWidth <= 1010) {
            hidePopups($);
        }
        if (innerWidth <= 1010 && ((innerHeight < innerWidth && prevHeight > prevWidth) || (innerHeight > innerWidth && prevHeight < prevWidth))) {
            hidePopups($);
        }
        prevHeight = innerHeight;
        prevWidth = innerWidth;
    }
}
var newsletterPopupLink = '#';
jQuery(document).ready(function ($) {
    let copyUrlBtn = $('.copyUrl');
    if (copyUrlBtn.length > 0) {
        copyUrlBtn.click(function (e) {
            e.preventDefault()
            let tempInput = document.createElement('textarea');
            tempInput.style.fontSize = '12pt';
            tempInput.style.border = '0';
            tempInput.style.padding = '0';
            tempInput.style.margin = '0';
            tempInput.style.position = 'absolute';
            tempInput.style.left = '-9999px';
            tempInput.setAttribute('readonly', '');
            tempInput.value = window.location.href;
            copyUrlBtn.append(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999);
            document.execCommand('copy');
            tempInput
                .parentNode
                .removeChild(tempInput);
        });
    }
    window.addEventListener('resize', hidePopupsListener($))
    function ThisIsWebP() {
        var def = $.Deferred(),
            crimg = new Image();
        crimg.onload = function () {
            def.resolve();
        };
        crimg.onerror = function () {
            def.reject();
        };
        crimg.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyC' +
                'CmrYNWPwmHRH9jwMA';
        return def.promise();
    }
    ThisIsWebP().then(function () {
        $('html').removeClass('no-webp')
    }, function () {
        $('html').removeClass('webp')
    });
    $(window).on('popstate', function (event) {
        location.reload();
    });
    if (window.matchMedia('(max-width: 1299px)').matches) {
        $('.mega-menu-columns-3-of-12.hide').remove();
    }
    if ($('.header-navigation .button').length > 0) {
        $('.header-navigation .button').appendTo('#mega-menu-header-menu');
    }
    if ($('.header-navigation .lang_mobile').length > 0) {
        $('.header-navigation .lang_mobile').prependTo('#mega-menu-header-menu');
    }
    if ($('#commentform .g-recaptcha-wrap').length > 0) {
        $('#commentform .g-recaptcha-wrap').insertBefore(
            $("#commentform > .cform-field_button")
        );
    }
    if ($('.wpcf7-validates-as-required').length > 0) {
        input = $('.wpcf7-validates-as-required');
        text = input
            .parent()
            .siblings('.cform-field__text');
        text.addClass('required');
    }
    $('#mega-menu-header-menu > .mega-menu-item > .mega-menu-link').click(
        function () {
            $('.mega-toggle-on').removeClass('mega-toggle-on');
            $(this)
                .parent()
                .addClass('mega-toggle-on');
            if (!$('#header').hasClass('show-menu')) {
                $('#header').addClass('show-menu')
            }
        }
    )
    $(document).mouseup(function (e) {
        var div = $(".header-top");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($('#header').hasClass('show-menu')) {
                $('#header').removeClass('show-menu')
            }
        }
    });
    if ($('.header-bottom-menu_slideDown').length > 0) {
        menuHeaderBottom = $('.header-bottom-menu_slideDown');
        menuHeaderList = $('.header-bottom-menu_slideDown .header-bottom-menu__list');
        checkHoverMenuSelect = false;
        chechMenuElement = null;
        function hideHeaderMenu() {
            $('.header-bottom-menu-list-wrap.active').insertAfter(
                $('.header-bottom-menu_slideDown.active').find('.header-bottom-menu__title')
            );
            $('.header-bottom-menu_slideDown.active').removeClass('active');
            $('.header-bottom-menu-list-wrap.active').removeClass('active');
            $('#header').removeClass('active-sub-menu');
            checkHoverMenuSelect = false;
        }
        function showHeaderMenu(element) {
            element.addClass('active');
            $('#header').addClass('active-sub-menu');
            element
                .find('.header-bottom-menu-list-wrap')
                .addClass('active');
            $('.header-bottom-menu-list-wrap.active').insertAfter(
                $(".header-bottom_slideDown")
            );
            checkHoverMenuSelect = true;
            chechMenuElement = element;
        }
        $(document).mouseup(function (e) {
            if (!menuHeaderBottom.is(e.target) && menuHeaderBottom.has(e.target).length === 0 && !menuHeaderList.is(e.target) && menuHeaderList.has(e.target).length === 0) {
                hideHeaderMenu();
            }
        });
        menuHeaderBottom.click(function () {
            if (chechMenuElement != $(this) && chechMenuElement != null && checkHoverMenuSelect) {
                hideHeaderMenu();
                showHeaderMenu($(this))
                return false;
            }
            if (checkHoverMenuSelect) {
                hideHeaderMenu();
            } else {
                showHeaderMenu($(this))
            }
        })
        menuHeaderBottom
            .on('mouseenter', function () {
                hideHeaderMenu();
                showHeaderMenu($(this));
            })
            .on('mouseleave', function (e) {
                if (!$('.header-bottom-menu__list').is(e.relatedTarget)) {
                    hideHeaderMenu();
                }
            });
        $('.header-bottom-menu__list').on('mouseleave', function (e) {
            if (!$('.header-bottom-menu_slideDown.active .header-bottom-menu__title').is(e.relatedTarget) && !$('.header-bottom-menu_slideDown.active').is(e.relatedTarget)) {
                hideHeaderMenu();
            }
        });
    }
    var timerId;
    var menuOpened = false;
    $('.mega-menu-item-has-children').mouseenter(function () {
        if (!menuOpened) {
            $('.header').addClass('show-menu');
            menuOpened = true;
            timerId = setTimeout(() => {
                $('.header').addClass('panel-transition-off');
            }, 400);
        }
    });
    $('.mega-menu-item-has-children').mouseleave(function (event) {
        if (menuOpened) {
            $('.header').removeClass('show-menu');
            menuOpened = false;
            $('.header').removeClass('panel-transition-off');
            clearTimeout(timerId);
        }
    });
    $(document).on('input', '#newsletter-main-email', function () {
        $('.newsletter__email > input').val($(this).val());
    });
    if ($('.newslatter-popup').length > 0 && sessionStorage.getItem('close-newslatter-popup') != 1) {
        $(
            'a:not([target="_blank"], .newslatter-popup__close, .blog-inner-socials_copy-ur' +
            'l)'
        ).click(function (e) {
            newsletterPopupLink = $(this).attr('href');
            $('.newslatter-popup__close').attr('href', newsletterPopupLink);
            $('.newslatter-popup').addClass('show');
            $('body').addClass('body_newslatter-popup-show');
            return false;
        })
        $('.newslatter-popup__close').click(function () {
            $('.newslatter-popup').removeClass('show');
            $('body').removeClass('body_newslatter-popup-show');
            sessionStorage.setItem('close-newslatter-popup', 1);
        })
    }
    $('.popup-modal').magnificPopup(
        {type: 'inline', preloader: false, modal: true}
    );
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $
            .magnificPopup
            .close();
        return true;
    });
    if ($('#cookie-notice').length > 0) {
        $('#cn-accept-cookie').wrapAll('<div class="button button_s">');
        $('.cn-more-info').wrapAll('<div class="button button_s button_blue">');
    }
    if ($('#refer-input').length > 0) {
        var hideInputRefer = document.getElementById('refer-input');
        if (hideInputRefer) {
            var documentRef = document.referrer;
            if ((JSON.stringify(localStorage.getItem('documentRef')).indexOf('instinctools.com') != -1) || (JSON.stringify(localStorage.getItem('documentRef')).indexOf('instinctools.de') != -1)) {
                localStorage.removeItem('documentRef');
            }
            if (documentRef.indexOf('instinctools.com') == -1 && documentRef.indexOf('instinctools.de') == -1) {
                localStorage.setItem('documentRef', documentRef);
            }
            hideInputRefer.setAttribute('value', localStorage.getItem('documentRef'));
        }
    }
    if (localStorage.getItem('urlFirstPage') == null) {
        localStorage.setItem('urlFirstPage', location.href);
    }
    if ($('#urlpage-input').length > 0) {
        var hideInputUrl = document.getElementById('urlpage-input');
        if (hideInputUrl) {
            hideInputUrl.setAttribute('value', localStorage.getItem('urlFirstPage'));
        }
    }
    $('*[LinkTitle]').click(function (e) {
        ga('send', 'event', {
            eventCategory: $(this).attr('LinkTitle'),
            eventAction: 'click',
            transport: 'beacon'
        });
    })
    $('.button > a').click(function (e) {
        ga('send', 'event', {
            eventCategory: 'links',
            eventAction: 'click',
            transport: $(this).attr('data-title')
        });
    });
    $('.footer-content__button a, .case-header__button-pdf a').attr(
        'href',
        $('.cases-header').attr('data-pdf')
    );
    $(document).mouseup(function (e) {
        var div = $('.header-right__language');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.hasClass('active')) {
                div.removeClass('active');
            }
        } else {
            div.toggleClass('active');
        }
    });
    var the_top = $(document).scrollTop();
    if (the_top > 50) {
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }
    $(window).scroll(function () {
        var the_top = $(document).scrollTop();
        if (the_top > 50) {
            $('.header').addClass('header-fixed');
            if (the_top > $('.header').innerHeight() - $('.header-top').innerHeight()) {
                $('.header-bottom-inner').addClass('fixed');
            } else {
                $('.header-bottom-inner').removeClass('fixed');
            }
        } else {
            $('.header').removeClass('header-fixed');
        }
    });
    $('.footer-col__title:not(.link)').click(function () {
        if (isSMSection()) {
            $(this).toggleClass('active');
            $(this)
                .parent()
                .find(".footer-menu")
                .slideToggle()
        }
    })
    if ($('.achives-slider').length) {
        $('.achives-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 9,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1761,
                    settings: {
                        slidesToShow: 8
                    }
                }, {
                    breakpoint: 1299,
                    settings: {
                        slidesToShow: 7
                    }
                }, {
                    breakpoint: 1160,
                    settings: {
                        slidesToShow: 6
                    }
                }, {
                    breakpoint: 1010,
                    settings: {
                        slidesToShow: 5
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }
    if ($('.awards-slider').length) {
        $('.awards-slider').slick({
            dots: true,
            swipe: false,
            waitForAnimate: false,
            infinite: false,
            appendArrows: '.round-slider-control__arrow',
            appendDots: '.round-slider-control__nav',
            cssEase: 'none'
        });
    }
    if ($('.industry-home-slider').length) {
        $('.industry-home-slider').slick({
            autoplay: true,
            speed: 600,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'opacity 1ms',
            initialSlide: 0,
            dots: true,
            customPaging: function (slider, i) {
                var title = $(slider.$slides[i]).attr('data-title')
                return '<span>' + title + '</span>';
            }
        });
        $('.industry-home-slider').on(
            'beforeChange',
            function (event, slick, currentSlide, nextSlide) {
                var img = $(slick.$slides[nextSlide]).attr('data-img')
                $('.industry-content__webp').attr(
                    'srcset',
                    '/wp-content/themes/instinctools/image/home/industry/' + img + '.webp'
                );
                $('.industry-content__image').attr(
                    'src',
                    '/wp-content/themes/instinctools/image/home/industry/' + img + '.jpg'
                );
            }
        );
    }
    if ($('.twosection-home-slider').length) {
        $('.twosection-home-slider').slick({
            autoplay: true,
            speed: 600,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'opacity 1ms',
            initialSlide: 0,
            dots: true,
            customPaging: function (slider, i) {
                var title = $(slider.$slides[i]).attr('data-title')
                return '<span>' + title + '</span>';
            }
        });
        $('.twosection-home-slider').on(
            'beforeChange',
            function (event, slick, currentSlide, nextSlide) {
                rotate = nextSlide * 90;
                $('.gear').css('transform', 'translate(-50%, -50%) rotate(' + rotate + 'deg)');
                var img = $(slick.$slides[nextSlide]).attr('data-img');
                $('.twosection-content__webp').attr(
                    'srcset',
                    '/wp-content/themes/instinctools/image/home/twosection/' + img + '.webp'
                );
                $('.twosection-content__image').attr(
                    'src',
                    '/wp-content/themes/instinctools/image/home/twosection/' + img + '.png'
                );
            }
        );
    }
    if ($('.testimonials_slider').length) {
        $('.testimonials_slider').slick({
            autoplay: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1011,
                    settings: {
                        adaptiveHeight: true
                    }
                }
            ]
        });
    }
    if ($('.inner-blog_slider').length) {
        $('.inner-blog_slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            initialSlide: 0
        });
        $('.inner-blog_slider')
            .not('.slick-initialized')
            .slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                initialSlide: 0
            });
    }
    if ($('.blogsection-items_slider').length) {
        if (window.matchMedia("(max-width: 1159px)").matches) {
            $('.blogsection-items_slider .blogsection-items__item:last-child').remove();
        }
        $('.blogsection-items_slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1160,
                    settings: {
                        dots: true,
                        infinite: false,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 1011,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.blogsection-items_slider .slick-active.show').removeClass('show');
        $('.blogsection-items_slider .slick-active').addClass('show');
        $('.blogsection-items_slider').on(
            'beforeChange',
            function (event, slick, currentSlide, nextSlide) {
                $('.blogsection-items_slider .slick-active.show').removeClass('show');
            }
        );
        $('.blogsection-items_slider').on(
            'afterChange',
            function (event, slick, currentSlide, nextSlide) {
                $('.blogsection-items_slider .slick-active').addClass('show');
            }
        );
    }
    if ($('.getestimate-tesimonials').length) {
        $('.getestimate-tesimonials').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            adaptiveHeight: true
        });
    }
    if ($('.feedbackclients-slider').length) {
        $('.feedbackclients-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            fade: true,
            cssEase: 'linear',
            initialSlide: 1
        });
        $('.feedbackclients-footer > .btn__prev').click(function () {
            $('.feedbackclients-slider').slick('slickPrev');
        })
        $('.feedbackclients-footer > .btn__next').click(function () {
            $('.feedbackclients-slider').slick('slickNext');
        })
        $('.feedbackclients-footer__list > li').click(function () {
            $('.feedbackclients-slider').slick('slickGoTo', $(this).index());
        })
        $('.feedbackclients-slider').on(
            'beforeChange',
            function (event, slick, currentSlide, nextSlide) {
                oldactive = $('.feedbackclients-footer__list > .active');
                if (oldactive) {
                    oldactive.removeClass('active');
                }
                $('.feedbackclients-footer__list > li:nth-child(' + (
                    nextSlide + 1
                ) + ')').addClass('active');
            }
        );
        $('.feedbackclients-slider_old').on(
            'afterChange',
            function (event, slick, currentSlide, nextSlide) {
                $('.feedbackclients__wrap.slick-active .feedbackclients-video__video').append(
                    jQuery('#ytvideoFeedback')
                );
                $('.feedbackclients-video.active').removeClass('active');
            }
        );
        $('.feedbackclients-slider_new').on(
            'beforeChange',
            function (event, slick, currentSlide, nextSlide) {
                let activeSlide = $('.feedbackclients__item:nth-child(' + (
                    nextSlide + 1
                ) + ')')
                let video = activeSlide.attr('data-video')
                let srctitle = activeSlide.attr('data-src-title')
                if (srctitle != undefined) {
                    $('.feedbackclients-video_new .feedbackclients-video__bg').attr(
                        'src',
                        '/wp-content/themes/instinctools/image/feedbacks/video_' + srctitle + '.jpg'
                    )
                    $('.feedbackclients-video_new .feedbackclients-video__logo').attr(
                        'src',
                        '/wp-content/themes/instinctools/image/feedbacks/logo/logo_' + srctitle +
                                '.png'
                    )
                }
                let texttitle = activeSlide.attr('data-text-title')
                let videotitle = activeSlide.attr('data-video-title')
                if (texttitle != undefined && videotitle != undefined) {
                    $('.lookat-video__bg').attr(
                        'src',
                        '/wp-content/themes/instinctools/image/lookat/video_' + texttitle + '.jpg'
                    )
                    $('.lookat-video__title').html(videotitle)
                }
                $('.feedbackclients-video_new .feedbackclients-video__video').attr(
                    'data-video',
                    video
                );
                $('.feedbackclients-video_new.active').removeClass('active');
                if (player != undefined) {
                    stopVideo();
                }
            }
        );
    }
    if ($('.design-slider').length) {
        $('.design-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            fade: true,
            cssEase: 'linear',
            initialSlide: 1
        });
        $('.design-slider-footer > .btn__prev').click(function () {
            $('.design-slider').slick('slickPrev');
        })
        $('.design-slider-footer > .btn__next').click(function () {
            $('.design-slider').slick('slickNext');
        })
        $('.design-slider-footer__list > li').click(function () {
            $('.design-slider').slick('slickGoTo', $(this).index());
        })
        $('.design-slider').on(
            'beforeChange',
            function (event, slick, currentSlide, nextSlide) {
                oldactive = $('.design-slider-footer__list > .active');
                if (oldactive) {
                    oldactive.removeClass('active');
                }
                $('.design-slider-footer__list > li:nth-child(' + (
                    nextSlide + 1
                ) + ')').addClass('active');
            }
        );
    }
    $('.link-ajax').click(function (e) {
        $('.link-ajax.active').removeClass('active');
        $(this).addClass('active')
        window
            .history
            .pushState("", $(this).text(), $(this).attr('data-href'));
        $('#main').load($(this).attr('data-href') + ' #main', function () {
            offsetTop = (
                $('#main > #main > *:nth-child(1)').outerHeight(true) - $('#main > #main > *:nth-child(1)').outerHeight()
            ) * 2 + $('.header-bottom-inner').outerHeight();
            if (isXlSection()) {
                offsetTop += 90
            } else if (isSMSection()) {
                offsetTop += 78
            }
            $('body,html').animate({
                scrollTop: $('#main')
                    .offset()
                    .top - offsetTop - 5
            }, 1000);
            $.getScript("/wp-content/themes/instinctools/js/scripts.js", function () {
                onYouTubeIframeAPIReady();
            });
        });
        return false;
    })
    if ($('.single-post').length > 0) {
        content = $('.single-post .blog-inner-item');
        contentH = content.height();
        drawtop = 1350;
        colorChenge = true;
        color = 'draw_orange';
        colorSub = 'draw_orange';
        i = 1;
        if (contentH > 999) {
            while (contentH > 0) {
                contentH -= 2000;
                switch (i) {
                    case 1:
                        colorChenge = !colorChenge;
                        drawtop += 500;
                        if (colorChenge) {
                            color = 'draw_green';
                            colorSub = '';
                        } else {
                            color = 'draw_gray';
                            colorSub = '';
                        }
                        i++;
                        break;
                    case 2:
                        drawtop += 220;
                        if (colorChenge) {
                            color = '';
                            colorSub = 'draw_green';
                        } else {
                            color = '';
                            colorSub = 'draw_orange';
                        }
                        i++;
                        break;
                    case 3:
                        drawtop += 700;
                        color = '';
                        colorSub = 'draw_green';
                        i = 1;
                        break;
                }
                content
                    .parent()
                    .append(
                        '<span class="draw draw_color-left draw-blog-inner ' + color +
                        '" style="top:' + drawtop +
                        'px!important"><span class="draw draw_color-right  ' + colorSub + '"></span></s' +
                        'pan>'
                    );
            }
        }
    }
    $('.cases-category__item').click(function (e) {
        $('.cases-category__item.active').removeClass('active');
        $(this).addClass('active');
        return false;
    })
    handleSelect($);
    var removeLeftStyle = function (imageConcealer) {
        var style = imageConcealer.getAttribute('style');
        imageConcealer.removeAttribute('style');
    }
    if (isXlSection()) {
        resizeImageConcealer(window, {imageSelector: "section-resize-xl"});
    }
    if (isBigSection()) {
        resizeImageConcealer(window, {imageSelector: "section-resize-lg"});
    }
    if (isSection()) {
        resizeImageConcealer(window, {imageSelector: "section-resize-md"});
        resizeImageConcealer(window, {imageSelector: "section-resize-md"});
    }
    window.addEventListener('resize', ({target}) => {
        if (isXlSection()) {
            resizeImageConcealer(window, {imageSelector: "section-resize-xl"});
        } else {
            resizeImageConcealer(target, {
                imageSelector: "section-resize-xl"
            }, removeLeftStyle);
        }
        if (isBigSection()) {
            resizeImageConcealer(target, {imageSelector: "section-resize-lg"});
        } else {
            resizeImageConcealer(target, {
                imageSelector: "section-resize-lg"
            }, removeLeftStyle);
        }
        if (isSection()) {
            resizeImageConcealer(target, {imageSelector: "section-resize-md"});
            resizeImageConcealer(target, {imageSelector: "section-resize-md"});
        } else {
            resizeImageConcealer(target, {
                imageSelector: "section-resize-md"
            }, removeLeftStyle);
            resizeImageConcealer(target, {
                imageSelector: "section-resize-md"
            }, removeLeftStyle);
        }
    });
    $(".file-icon").each(function (index) {
        let href = '/wp-content/themes/instinctools/image/attachfile.svg';
        $(this).load(href);
    });
    $('.file-icon').click(function () {
        $('.file-wrap .cd-upload-btn').click();
    })
    $(".file-wrap").on("click", ".remove-file", function () {
        $(this)
            .closest('.dnd-upload-status')
            .hide();
    });
    $('.cform-field textarea')
        .each(function () {
            var $this = $(this);
            $this.css('min-height', $this.css('height'));
            $this.css('overflow', 'hidden');
        })
        .on('input paste', function () {
            var $this = $(this);
            var offset = $this.innerHeight() - $this.height();
            if ($this.innerHeight < this.scrollHeight) {} else {
                $this.height(1);
                $this.height(this.scrollHeight - offset);
            }
        });
    if ($('.cform-field').length) {
        if ($('.cform-field_check').find('input[type="checkbox"]').attr('checked')) {
            $('.cform-field_check')
                .find('.checkbox')
                .addClass('active');
        }
        $('.cform-field_check').click(function () {
            input = $(this).find('input[type="checkbox"]');
            if (input.attr('checked')) {
                input.removeAttr("checked");
                $(this)
                    .find('.checkbox')
                    .removeClass('active');
            } else {
                input.attr('checked', true);
                $(this)
                    .find('.checkbox')
                    .addClass('active');
            }
        })
        $('.cform-field_input-text input, .cform-field_input-text textarea').focus(
            function () {
                $(this)
                    .closest('.cform-field_input-text')
                    .find('.cform-field__text')
                    .addClass('active');
            }
        )
        $('.cform-field_input-text input, .cform-field_input-text textarea').focusout(
            function () {
                if (!$(this).val()) {
                    $(this)
                        .closest('.cform-field_input-text')
                        .find('.cform-field__text')
                        .removeClass('active');
                }
            }
        )
    }
    $(".wpcf7").on('wpcf7:invalid', function (event) {
        $(this)
            .find('.cform-field.cform-field-not-valid')
            .removeClass('cform-field-not-valid')
        $(this)
            .find('.wpcf7-not-valid-tip')
            .closest('.cform-field')
            .addClass('cform-field-not-valid')
    });
    $(".wpcf7").on('wpcf7:mailsent', function (event) {
        $(this)
            .find('.cform-field-not-valid')
            .removeClass('cform-field-not-valid')
        $(this)
            .find('form textarea')
            .css('height', 'inherit');
        $(this)
            .find('.cform-field__text.active, .cform-field_check .checkbox.active')
            .removeClass('active');
        $(this)
            .find('input[type="checkbox"]')
            .removeAttr('checked')
        $('.recaptcha-container').hide();
        $(this)
            .find('.submit')
            .show();
        $('.files-res > *').remove();
    });
    form = $('#commentform');
    form.validate({
        rules: {
            Author: {
                required: true
            },
            Email: {
                required: true,
                regex: "^[0-9a-zA-Z.+_\-]+@{1}[0-9a-zA-Z.+_\-]+\\.+[a-zA-Z]{2,4}$"
            },
            Comment: {
                required: true
            }
        },
        messages: {
            Author: {
                required: "The field is required"
            },
            Email: {
                regex: "The field is required"
            },
            Comment: {
                required: "The field is required"
            }
        },
        errorPlacement: function (error, element) {
            element
                .parent()
                .addClass("error");
        },
        success: function (element) {
            $("#" + element.attr("for"))
                .parent()
                .removeClass("error");
        }
    });
    $
        .fn
        .extend({
            getOffset: function () {
                var objHeight = $(this).outerHeight();
                var objWidth = $(this).outerWidth();
                var obj = $(this).offset();
                var top = obj.top;
                var left = obj.left;
                var right = obj.left + objWidth;
                var bottom = obj.top + objHeight;
                var objOffsets = {
                    "top": top,
                    "left": left,
                    "right": right,
                    "bottom": bottom
                };
                return objOffsets;
            }
        });
    list = $('.custom-select__list');
    parent = null;
    checkHoverSelect = false;
    function hideSelect() {
        if (parent != null && list != null) {
            parent.removeClass('active');
            list
                .removeClass('active')
                .appendTo(parent);
            list.css({'top': 'initial', 'left': 'initial'});
            checkHoverSelect = false;
        }
    }
    function showImageItems() {
        if (window.innerWidth < 1011) {
            $('.cases-list-item').each(function () {
                title = $(this)
                    .find('.cases-list-item__title')
                    .text();
                href = $(this).attr('data-href');
                src = $(this).attr('data-src');
                $(this)
                    .find('.cases-list-item__wrap')
                    .prepend(
                        '<a class="cases-list-item__image" href="' + href + '" target="_blank"><img src' +
                        '="' + src + '" alt="' + title + '"/></a>'
                    );
            });
        }
    }
    if ($('.custom-select').length > 0) {
        if ($('.page-template-success-stories-new .custom-select ').length > 0) {
            casesNewSelect = $('.page-template-success-stories-new .custom-select');
            casesNewSelect.on('mouseenter', function () {
                hideSelect();
                $(this)
                    .find('.custom-select__title')
                    .click();
            })
            $(document).mouseover(function (e) {
                let div = $('.header-bottom-inner__wrapper')
                if (!list.is(e.target) && !div.is(e.target) && list.has(e.target).length === 0 && !title.is(e.target) && title.has(e.target).length === 0 && div.has(e.target).length === 0) {
                    hideSelect();
                }
            });
        }
        window.addEventListener("orientationchange", function () {
            if ($('.custom-select.active').length > 0) {
                $('.custom-select.active .custom-select__title').click();
                checkHoverSelect = false;
            }
        }, false);
        window.addEventListener("resize", function () {
            if ($('.custom-select.active').length > 0) {
                $('.custom-select.active .custom-select__title').click();
                checkHoverSelect = false;
            }
        }, false);
        $('.custom-select_green')
            .find('.custom-select__list')
            .addClass('custom-select__list_green');
        title = $('.custom-select__title');
        item = $('.custom-select__item');
        title.click(function () {
            if (checkHoverSelect) {
                hideSelect();
                checkHoverSelect = false;
            } else {
                parent = $(this).parent();
                list = $(this).siblings($('.custom-select__list'));
                parent.addClass('active');
                var boxOffset = $(this).getOffset();
                list
                    .addClass('active')
                    .appendTo('main');
                checkHoverSelect = true;
                if (window.innerWidth < 767) {
                    list.offset({
                        top: $(this)
                            .offset()
                            .top + $(this).innerHeight(),
                        left: $(this)
                            .offset()
                            .left
                    });
                } else {
                    if (parent.hasClass('custom-select_right')) 
                        list.offset({
                            top: $(this)
                                .offset()
                                .top + $(this).innerHeight(),
                            left: boxOffset.right - list.innerWidth()
                        });
                    else 
                        list.offset({
                            top: $(this)
                                .offset()
                                .top + $(this).innerHeight(),
                            left: $(this)
                                .offset()
                                .left
                        });
                    }
                }
        })
    }
    cases_slider = null;
    args_cases_slider = null;
    if ($('.cases-items_slider').length) {
        args_cases_slider = {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 1299,
                    settings: {
                        arrows: true
                    }
                }, {
                    breakpoint: 1160,
                    settings: {
                        arrows: true,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 1011,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        cases_slider = $('.cases-items_slider');
        cases_slider
            .on('init', function (event, slick) {
                $('.current').text(slick.currentSlide + 1);
                $('.total').text(slick.slideCount);
            })
            .slick(args_cases_slider)
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $('.current').text(nextSlide + 1);
            });
    }
    if ($('.cases_select').length > 0) {
        select = $('.cases_select');
        items = select.find('.custom-select__item');
        var u = new Url;
        caseTechnologies = $('.custom-select__item[data-type="technologies"]');
        caseTechnologiesActive = $(
            '.custom-select__item[data-type="technologies"][data-value="' + u.query['technologies'] +
            '"]'
        );
        caseDamain = $('.custom-select__item[data-type="domain"]');
        caseDamainActive = $(
            '.custom-select__item[data-type="domain"][data-value="' + u.query['domain'] + '"]'
        );
        if (caseTechnologiesActive.length > 0) {
            $("#technologies").html(
                '<span>' + caseTechnologiesActive.text() + '</span>'
            );
            caseTechnologies.removeClass('active');
            caseTechnologiesActive.addClass('active');
        }
        if (caseDamainActive.length > 0) {
            $("#domain").html('<span>' + caseDamainActive.text() + '</span>');
            caseDamain.removeClass('active');
            caseDamainActive.addClass('active');
        }
        $(document).mouseup(function (e) {
            if (!items.is(e.target) && items.has(e.target).length !== 0) {
                type = $(e.target)
                    .parent()
                    .attr('data-type');
                value = $(e.target)
                    .parent()
                    .attr('data-value');
                target = '#cases-filter-resault';
                u.query[type] = value;
                if ($('.cases-new-selects').length > 0) {
                    u.path = "/case-studies/";
                }
                history.pushState("", "", u);
                $.ajax({
                    url: u,
                    cache: false,
                    success: function (html) {
                        let content = $(html).find(target + ' > *');
                        if (content.length != 0) {
                            $(target).html(content);
                            if (cases_slider != null && args_cases_slider != null) {
                                cases_slider = $('.cases-items_slider');
                                cases_slider
                                    .on('init', function (event, slick) {
                                        $('.current').text(slick.currentSlide + 1);
                                        $('.total').text(slick.slideCount);
                                    })
                                    .slick(args_cases_slider)
                                    .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                        $('.current').text(nextSlide + 1);
                                    });
                                $('.cases-items_slider').css('opacity', '1');
                            }
                            showImageItems();
                        } else {
                            $('#domain-all > *').trigger("mouseup");
                            $('.custom-select__item[data-type="domain"].active').removeClass('active');
                            $('#domain-all').addClass('active')
                            $("#domain").html('<span>' + $('#domain-all').text() + '</span>');
                        }
                    }
                });
                if ($('.custom-select__list.active').length > 0) {
                    $('.custom-select__list.active .custom-select__item.active').removeClass(
                        'active'
                    );
                    $(e.target)
                        .parent()
                        .addClass('active')
                    $("#" + type).html('<span>' + $(e.target).text() + '</span>');
                    hideSelect();
                    checkHoverSelect = false;
                }
            }
        });
    }
    if ($('.cases-list').length > 0) {
        showImageItems();
        $('body').on('mouseover click', '.cases-list-item', function () {
            $('.cases-list-item.active').removeClass('active');
            $('.cases-list-image__wrap').attr('href', $(this).attr('data-href'))
            $('.cases-list-image img').attr('src', $(this).attr('data-src'))
            $('.cases-list-image').addClass('active');
            $(this).addClass('active');
        })
        window.onscroll = function () {
            if ($('.cases-list-items').length > 0) {
                sticky = $('.cases-list-items')
                    .offset()
                    .top;
                endsection = $('.cases-list-items').height();
                image_case = $('.cases-list-image');
                if (window.pageYOffset >= sticky - 130 && window.pageYOffset <= sticky - 130 + endsection - 520) {
                    image_case.removeClass("sticky_ab");
                    image_case.addClass("sticky")
                } else if (window.pageYOffset > sticky - 130 + endsection - 520) {
                    image_case.addClass("sticky_ab")
                } else {
                    image_case.removeClass("sticky");
                }
            }
        };
    }
    if ($('.case-tags').length > 0) {
        select = $('.case-tags');
        items = select.find('.case-tags__link');
        var u = new Url;
        caseTagActive = $(
            '.case-tags__link[data-case-tag="' + u.query['case-tag'] + '"]'
        );
        if (caseTagActive.length > 0) {
            items.removeClass('active');
            caseTagActive.addClass('active');
        }
        items.click(function () {
            caseTag = $(this).attr('data-case-tag');
            target = '#cases-filter-resault';
            u.query['case-tag'] = caseTag;
            u.hash = 'stories';
            $.ajax({
                url: u,
                cache: false,
                success: function (html) {
                    $(target).html($(html).find(target + ' > *'));
                    if (cases_slider != null && args_cases_slider != null) {
                        cases_slider = $('.cases-items_slider');
                        cases_slider
                            .on('init', function (event, slick) {
                                $('.current').text(slick.currentSlide + 1);
                                $('.total').text(slick.slideCount);
                            })
                            .slick(args_cases_slider)
                            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                $('.current').text(nextSlide + 1);
                            });
                        $('.cases-items_slider').css('opacity', '1');
                    }
                }
            });
            history.pushState("", "", u);
        })
    }
    $('.team__member .image-blackout.play').mousemove(function () {
        video = $(this).siblings('video');
        image = $(this).siblings('img');
        video
            .get(0)
            .play();
        image.hide();
    })
    if ($('.table-header-slider').length > 0) {
        $('.table-header-slider').slick({waitForAnimate: false, cssEase: 'none'});
        $('.table').addClass('slide-0')
        $('.table .table__item:nth-child(2)').addClass('active');
        $('.table-header-slider').on(
            'beforeChange',
            function (event, slick, currentSlide, nextSlide) {
                $('.table .active').removeClass('active')
                $('.table').removeClass('slide-' + currentSlide)
                $('.table').addClass('slide-' + nextSlide)
                $('.table .table__item:nth-child(' + (
                    nextSlide + 2
                ) + ')').addClass('active');
                var the_top = $(document).scrollTop();
                if (the_top > $('#table-slider-point').offset().top) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $('#table-slider-point')
                            .offset()
                            .top
                    }, 1000);
                }
            }
        );
        $(window).on('scroll', function () {
            var the_top = $(document).scrollTop();
            const sliderPoint = $('#table-slider-point');
            if (!sliderPoint.length) {
                return;
            }
            if (the_top >= sliderPoint.offset().top && the_top <= sliderPoint.offset().top + sliderPoint.height()) {
                $('.table-slider-container').addClass('fixed');
                $('.table-header-slider').addClass('container');
                $('.mock-table-slider').css('height', '100');
            } else {
                $('.table-slider-container').removeClass('fixed');
                $('.table-header-slider').removeClass('container');
                $('.mock-table-slider').css('height', '0');
            }
        });
    }
    draw_hundle();
    counterPlay();
    addShowClass();
    $(window).on('scroll', function () {
        draw_hundle();
        counterPlay();
        addShowClass();
    })
    function counterPlay() {
        numberWrap = $('.counter-num-wrap');
        numberWrap.each(function () {
            var self = $(this),
                height = self
                    .offset()
                    .top + self.height();
            if (!$(this).hasClass('active') && $(document).scrollTop() + $(window).height() >= height) {
                $(this).addClass('active');
                $(this)
                    .find('.counter-num')
                    .each(function () {
                        $(this)
                            .prop('Counter', 0)
                            .animate({
                                Counter: $(this).attr('data-count')
                            }, {
                                duration: 4000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                    });
            }
        });
    }
    function draw_hundle() {
        var draw = $('.draw');
        var imageDark = $('.image-dark-block_img-container');
        var innerForm = $('.inner-form_wrap');
        draw.each(function () {
            if (($(this).offset().top - $(window).height() + 150 < $(window).scrollTop()) && ($(this).offset().top + $(this).height() - $(window).height() + 150 > $(window).scrollTop())) {
                $(this).addClass('active');
                $(this)
                    .closest('.lines-content')
                    .addClass('active');
            }
        });
        imageDark.each(function () {
            if (($(this).offset().top - $(window).height() + 150 < $(window).scrollTop()) && ($(this).offset().top + $(this).height() - $(window).height() + 150 > $(window).scrollTop())) {
                $(this).addClass('active');
                $(this)
                    .closest('.lines-content')
                    .addClass('active');
            }
        });
        innerForm.each(function () {
            if (($(this).offset().top - $(window).height() + 150 < $(window).scrollTop()) && ($(this).offset().top + $(this).height() - $(window).height() + 150 > $(window).scrollTop())) {
                $(this)
                    .closest('.lines-content')
                    .addClass('active');
                $(this)
                    .closest('.lines-content')
                    .find('.draw')
                    .addClass('active');
            }
        });
    }
    function addShowClass() {
        var drawBgFeaturedclients = $('.featuredclients-items__bg');
        drawBgFeaturedclients.each(function () {
            if (($(this).offset().top - $(window).height() + 150 < $(window).scrollTop()) && ($(this).offset().top + $(this).height() - $(window).height() + 150 > $(window).scrollTop())) {
                $(this).addClass('show');
                $(this)
                    .closest('.featuredclients__row')
                    .addClass('show');
            }
        });
    }
    if ($('.feedbackclients').length > 0) {
        $('.feedbackclients__wrap.slick-active .feedbackclients-video__video').append(
            jQuery('#ytvideoFeedback')
        );
        var videoPlay = false;
        $('.feedbackclients-video__play').click(function () {
            let promiseYouTube = loadScript("https://www.youtube.com/iframe_api");
            promiseYouTube.then(script => {
                info = $(this).parent();
                video = info.siblings(".feedbackclients-video__video");
                bg = info.siblings(".feedbackclients-video__bg");
                videoContainer = $(this).closest('.feedbackclients-video');
                let idVideoYouTube = video.attr('data-video');
                setTimeout(function () {
                    console.log(`${script.src} loaded!`)
                    console.log(player)
                    player.loadVideoById(idVideoYouTube);
                    videoPlay = !videoPlay;
                    videoContainer.addClass('active');
                }, 1200);
            }, error => console.log(`Error: ${error.message}`));
        })
    }
    var offset = 110;
    var target = $('#_' + window.location.hash.replace('#', ''));
    if (isXlSection() || isSMSection()) {
        offset = 60;
    }
    $('.link-anchor').click(function (e) {
        e.preventDefault()
        let hash = $(this)
            .attr('href')
            .split("#")[1]
        $('html, body').animate({
            scrollTop: $('#_' + hash)
                .offset()
                .top - offset
        }, 1000);
    })
    $('.menu-item').each(function () {
        if ($(this).children('a').attr('href') != window.location.href) {
            $(this).removeClass('current-menu-item');
            $(this)
                .children()
                .removeAttr('aria-current');
        }
    })
    if (target.length > 0) {
        $('html, body').animate({
            scrollTop: target
                .offset()
                .top - offset
        }, 1000);
    }
    var contentSection = $('.anchor-section');
    var navigation = $('.header-bottom-inner__link');
    $(window).on('scroll', function () {
        updateNavigation();
    })
    updateNavigation();
    function updateNavigation() {
        contentSection.each(function () {
            var sectionName = $(this)
                .attr('id')
                .replace("_", "");
            var navigationMatch = navigation.find('a[href="#' + sectionName + '"]');
            var u = new Url;
            if (($(this).offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigation
                    .find('.active')
                    .removeClass('active');
                navigationMatch.addClass('active');
                if ($(
                    '.menu-item a[href="https://www.instinctools.com' + window.location.pathname +
                    '#' + sectionName + '"]'
                ).length) {
                    $('.menu-item.current-menu-item').removeClass('current-menu-item');
                    $('.menu-item.current-menu-item')
                        .children()
                        .removeAttr('aria-current');
                    $(
                        '.menu-item a[href="https://www.instinctools.com' + window.location.pathname +
                        '#' + sectionName + '"]'
                    ).attr('aria-current', 'page');
                    $(
                        '.menu-item a[href="https://www.instinctools.com' + window.location.pathname +
                        '#' + sectionName + '"]'
                    )
                        .parent()
                        .addClass('current-menu-item');
                    $('.mega-menu-item.mega-toggle-on').removeClass('mega-toggle-on');
                }
                u.hash = sectionName;
                window
                    .history
                    .pushState("", "", u);
            }
        });
    }
    $('.header-right__search').click(function () {
        $('.search_panel').toggleClass('show_search_panel');
        $('.header-top').toggleClass('header-top_hidden');
        $('body').toggleClass('show-search-panel');
        $('.mega-menu-toggle').addClass('mega-menu-open_search');
        setTimeout(focusMethod, 100)
    });
    function hideSearch() {
        $('.search_panel.show_search_panel').removeClass('show_search_panel');
        $('.header-top.header-top_hidden').removeClass('header-top_hidden');
        $('body.show-search-panel').removeClass('show-search-panel');
        $('.mega-menu-toggle').removeClass('mega-menu-open_search');
    }
    $('.search-close-container').click(function () {
        if (isXlSection() || isSMSection()) {
            $('.input-search').val('')
            $(this).hide();
        } else {
            hideSearch();
        }
    });
    $('.input-search').on('keyup', function () {
        if (isXlSection() || isSMSection()) {
            if ($(this).val()) {
                $('.search-close-container').show();
            } else {
                $('.search-close-container').hide();
            }
        }
    });
    $(document).mouseup(function (e) {
        var div = $('.search-content');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            hideSearch();
        }
    });
    $(window).on('load', function () {
        $('.search-back-button').on('click', function () {
            window
                .history
                .go(-1);
        });
    });
    if (window.innerWidth <= 320) {
        let linkText = $('.search-item__link').text();
        $('.search-item__link').text(`${linkText.slice(0, 40)}...\nview more`);
    }
    $(window).on('resize', function () {
        if (window.innerWidth >= 1010) {
            $('.cases-list-item__image').css('display', 'none');
        }
        if (window.innerWidth <= 1010) {
            $('.cases-list-item__image').css('display', 'block');
        }
    });
    $('.tabs-block__title-wrapper').click((event) => {
        const currentTarget = $(event.currentTarget);
        const index = currentTarget.attr('index');
        if (!currentTarget.hasClass('active')) {
            $('.tabs-block__title-wrapper.active').removeClass('active');
            $('.tabs-block__content.active').removeClass('active');
            $('.tabs-block__image.active').removeClass('active');
            currentTarget.addClass('active')
            $(".tabs-block__content[index='" + index + "']").addClass('active');
            $(".tabs-block__image[index='" + index + "']").addClass('active');
        }
        offsetTop = 0;
        if (isXlSection()) {
            offsetTop = 90
        } else if (isSMSection()) {
            offsetTop = 78
        }
        if (offsetTop > 0) {
            $('body,html').animate({
                scrollTop: $('.bi-text')
                    .offset()
                    .top - offsetTop - 5
            }, 1000);
        }
    })
    const clampText = () => {
        const blogDescription = document.querySelectorAll(
            ".inner-blog-item__content .title-info__description"
        );
        if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 1023px)").matches) {
            for (let i = 0; i < blogDescription.length; i++) {
                let item = blogDescription[i];
                $clamp(item, {clamp: 2});
            }
        } else {
            for (let i = 0; i < blogDescription.length; i++) {
                let item = blogDescription[i];
                $(item).css("display", "block");
            }
        }
    }
    clampText();
    $(window).resize(() => {
        clampText();
    })
    var scrollTop = $(".go-to-top");
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css({"opacity": "1", "visibility": "visible"});
        } else {
            $(scrollTop).css({"opacity": "0", "visibility": "hidden"});
        }
    });
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    if (navigator.userAgent.search("Edge") >= 0) {
        $('.animated-slow.elementor-invisible').removeClass('elementor-invisible')
        $('div[data-settings].elementor-invisible').removeClass('elementor-invisible')
    }
});