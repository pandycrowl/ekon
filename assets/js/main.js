
document.addEventListener("DOMContentLoaded", function () {

    // filter
    // filter-range

    const inputRange = document.querySelectorAll('.filter__item--range')
    const filterReset = document.querySelector('.filter__reset')

    inputRange.forEach(element => {
        let range = element.querySelector('.filter__range')
        let inputFrom = element.querySelector('.filter__input--from')
        let inputTo = element.querySelector('.filter__input--to')
        let $range = $(range)
        let $inputFrom = $(inputFrom)
        let $inputTo = $(inputTo)
        let instance;
        let def_min = range.getAttribute('min')
        let def_max = range.getAttribute('max')
        let def_from = range.getAttribute('data-from')
        let def_to = range.getAttribute('data-to')
        let min = def_min
        let max = def_max
        let from = def_from
        let to = def_to
        let currency = ''

        $range.ionRangeSlider({
            type: "double",
            grid_margin: true,
            min: cutR(min),
            max: cutR(max),
            from: cutR(from),
            to: cutR(to),
            onStart: updateInputs,
            onChange: updateInputs,
            onFinish: updateInputs
        });
        instance = $range.data("ionRangeSlider");

        function cutR(number) {
            return number == '' ? '0' : parseInt(number.toString().replace(/([^\d| ])/ig, ""))
        }

        function addR(number) {
            return number + currency
        }

        function updateInputs(data) {
            from = cutR(data.from);
            to = cutR(data.to);

            $inputFrom.prop("value", data.from_pretty ? addR(data.from_pretty) : data.from + currency);
            $inputTo.prop("value", data.to_pretty ? addR(data.to_pretty) : data.to + currency);
        }





    })


})

$(document).ready(function () {
    $('.filter__mob-filter').on('click', function () {
        $('.filter').removeClass('filter-dt')

    })
    $('.catalog-main__filter-reset').on('click', function () {
        $('.filter').addClass('filter-dt')

    })
    $('.nav__item').on('click', function (e) {
        e.preventDefault()
        var $this = $(this)
        $this.find('.nav__item-list').toggleClass('nav__list-active')
    })
    $('.filter__item').find('.filter__title').on('click', function (e) {
        e.preventDefault()
        var $this = $(this)
        $this.parent('.filter__item').find('.filter__checkbox').toggleClass('filter__checkbox-active')
    })
    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.nav').toggleClass('nav__active')
    })
    $('.close').on('click', function (e) {
        e.preventDefault()
        $('.nav').toggleClass('nav__active')
    })

    $(window).resize(function () {
        if ($(window).width() <= '448') {
            $('.products__item').each(function (i) {
                if (i > 7) {
                    $(this).css("display", "none")
                }
            })
        } else if ($(window).width() > '448') {
            $('.products__item').each(function (i) {
                $(this).css("display", "block")
            })

        }
    });

    if ($(window).width() <= '448') {
        $('.products__item').each(function (i) {
            if (i > 7) {
                $(this).css("display", "none")
            }
        })
    }

    $('.load-more').on('click', function (e) {
        e.preventDefault()
        $('.products__item').css("display", "block")
    })



});
