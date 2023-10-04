$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 300,
        equalHeight: true,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                infinite: true,
                dots: true,
                arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
        
    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click',  function(){
        $('.overlay, #consultation').fadeIn('slow');

    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    })

    $('.button_mini').each(function(i){
        $(this).on("click", function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
    })
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста введите свое имя",
                    minlength: jQuery.validator.format("Минимум {0} символа в строке")
                },
                phone: "Пожалуйста введите свой номер телефона",
                email: {
                    required: "Пожалуйста введите свой мейл",
                    email: "Мейл должен быть офрмата name@domain.com"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#order form');
    validateForms('#consultation form');

    $('input[name=phone]').mask("+3 (999) 999-99-99");
});
