
window.addEventListener('DOMContentLoaded', ()=> {
    mediaQueries()
    // === HEADER === \\
    let header = document.querySelector('header.header')

    document.body.style.paddingTop = header.offsetHeight + 'px'
    window.addEventListener('resize', ()=>{
        document.body.style.paddingTop = header.offsetHeight + 'px'
    })

    // === DROPDOWN === \\
    let dropdowns = document.querySelectorAll('.dropdown') 
    dropdowns.forEach(item => dropdown(item))

    function dropdown(dropdown) {
        let title = dropdown.querySelector('.dropdown__title'),
            items = dropdown.querySelectorAll('.dropdown__item')

        items.forEach(item => {
            item.addEventListener('click', ()=>{
                title.querySelector('span').textContent = item.textContent
                items.forEach(i => {  i.classList.remove('_active')  })
                item.classList.add('_active')
                dropdown.classList.add('_active')
                dropdown.classList.remove('_open')
            })
        })
        document.addEventListener('click', (e) => {
            let withinBoundaries = e.composedPath().includes(dropdown);
                
            if ( !withinBoundaries) {
                dropdown.classList.remove('_open')
            }
        })

        title.addEventListener('click', ()=>{ dropdown.classList.toggle('_open') })
    }
    // === COUNTERS === \\
    if (document.querySelector('.cart')){
        let cart = document.querySelector('.cart'),
            cartProducts = cart.querySelectorAll('.products__item')
        
        cartProducts.forEach(item => {
            counter(item)
        })
    }
    if (document.querySelector('.card')){
        let card = document.querySelector('.card'),
            cardLeft = card.querySelector('.card__left > span'),
            cardCount = card.querySelector('.card__count')
        counter(cardCount, cardLeft.textContent)
    }
    function counter(counter, max = 10, min = 1) {
        let plus = counter.querySelector('._plus'),
            minus = counter.querySelector('._minus')

        plus.addEventListener('click', ()=>{
            let field = counter.querySelector('.count__value'),
                startValue = field.value

            startValue++
            field.value = startValue
            startValue > max ? field.value = max : ''
            startValue < min ? field.value = min : ''
        })
        minus.addEventListener('click', ()=>{
            let field = counter.querySelector('.count__value'),
                startValue = field.value

            startValue--
            field.value = startValue
            startValue > max ? field.value = max : ''
            startValue < min ? field.value = min : ''
        }) 
    }
    // === CART ICON === \\
    let cartIcon = document.querySelector('.cart__icon')

    if (cartIcon){
        let cartIconSpan = cartIcon.querySelector('span')
        cartIconSpan.addEventListener('DOMSubtreeModified', ()=>{
            cartIconSpan.textContent.length > 0 ? cartIconSpan.classList.add('_active') : cartIconSpan.classList.remove('_active')
        })
    }
    // === RADIO BUTTONS === \\
    let radios = document.querySelectorAll('.radio')

    radios.forEach(item => {radio(item)})
    function radio(radio) {
        let radioItems = radio.querySelectorAll('.radio__item')
        radioItems.forEach(item =>{
            item.addEventListener('click', ()=>{
                radioItems.forEach(i => {i.classList.remove('_active')})
                item.classList.add('_active')
            })
        })
    }

    // === SLIDERS === \\
    // let sliders = document.querySelectorAll('.slider')
    // sliders.forEach(slider => {  createSlider(slider)  })
    $('.startpage__slider .slick').slick({
        arrows : false,
        infinite: false,
        speed: 500,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    arrows : true,
                    appendArrows: $('.startpage'),
                    prevArrow: '<button class="_prev"> <i class="icon-arrow-left"></i> </button>',
                    nextArrow: '<button class="_next"> <i class="icon-arrow-right"></i> </button>',
                }
            }
        ]
    });
    $('.partners__slider .slick').slick({
        appendArrows: $('.partners__toggle'),
        prevArrow: '<button class="_prev"> <i class="icon-arrow-left"></i> </button>',
        nextArrow: '<button class="_next"> <i class="icon-arrow-right"></i> </button>',
        infinite: false,
        speed: 500,
        mobileFirst: true,
    });
    if (window.matchMedia('(max-width: 1366px)').matches){
        $('.marketplace__slider .slick').slick({
            dots: true,
            dotsClass: 'slider__dots',
            appendArrows: $('.marketplace__toggle'),
            prevArrow: '<button class="_prev"> <i class="icon-arrow-left"></i> </button>',
            nextArrow: '<button class="_next"> <i class="icon-arrow-right"></i> </button>',
            infinite: false,
            speed: 500,
            mobileFirst: true,
        });
        $('.work__slider._steps .slick').slick({
            dots: true,
            dotsClass: 'slider__dots',
            appendArrows: $('.work__toggle'),
            prevArrow: '<button class="_prev"> <i class="icon-arrow-left"></i> </button>',
            nextArrow: '<button class="_next"> <i class="icon-arrow-right"></i> </button>',
            infinite: false,
            speed: 500,
            mobileFirst: true,
        });
    }
    $('.work__slider._examples .slick').slick({
        dots: true,
        dotsClass: 'slider__dots',
        arrows : false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767.8,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    $('.production__slider .slick').slick({
        dots: true,
        dotsClass: 'slider__dots',
        appendArrows: $('.production__toggle'),
        prevArrow: '<button class="_prev"> <i class="icon-arrow-left"></i> </button>',
        nextArrow: '<button class="_next"> <i class="icon-arrow-right"></i> </button>',
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('.card__slider .slick').slick({
        dots: true,
        dotsClass: 'slider__dots card__dots',
        arrows : false,
        speed: 500,
    });
    $('.card__carousel  .slick').slick({
        dots: true,
        dotsClass: 'slider__dots card__dots',
        arrows : false,
        speed: 500,
        slidesToShow: 2,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
    
    function createSlider(slider) { 
        let sliderWrapper = slider.querySelector('.slider__wrapper'),
            sliderRow = slider.querySelector('.slider__row'),
            sliderItems = slider.querySelectorAll('.slider__item'),
            sliderNext = slider.querySelector('.slider__toggle > ._next'),
            sliderPrev = slider.querySelector('.slider__toggle > ._prev'), 
            sliderDots = slider.querySelectorAll('.slider__dots > div'),
            sliderCount = getComputedStyle(slider).getPropertyValue('--count')*1,
            sliderIndents = getComputedStyle(slider).getPropertyValue('--indents').split('px')[0]*1,
            sliderProgress = slider.querySelector('.slider__progress'),
            sliderIndex = 0,
            sliderItemWidth = sliderItems[0].offsetWidth,
            sliderDrag = false,
            sliderSpeed = 1,
            sliderCoorX = 1,
            sliderOffsetLeft = 0

        
        if (window.matchMedia('(min-width: 1366px)').matches){
            sliderRow.addEventListener('mousedown', function(e) {
                sliderDrag = true;
                sliderCoorX = e.pageX - this.offsetLeft;
                sliderRow.style.scrollBehavior = 'unset'
                sliderOffsetLeft = sliderRow.scrollLeft;
            });
            document.addEventListener('mouseup', function(e) {
                sliderDrag = false;
                sliderOffsetLeft = sliderRow.scrollLeft;
                if (sliderCount > 1){
                    sliderIndex = Math.round(sliderRow.scrollLeft / sliderItemWidth)
                }
                else{
                    if (sliderOffsetLeft-sliderWrapper.offsetWidth*sliderIndex > sliderWrapper.offsetWidth/8){
                        sliderIndex++
                    }
                    else if (sliderOffsetLeft-sliderWrapper.offsetWidth*sliderIndex < -sliderWrapper.offsetWidth/8){
                        sliderIndex-- 
                    }
                    else{}
                }
                sliderRow.style.scrollBehavior = 'smooth'
                toggleSlide()
                setProgress()
            });
            sliderRow.addEventListener('mousemove', function(e) {
                sliderDrag ? this.scrollLeft = sliderOffsetLeft + -1*((e.pageX - this.offsetLeft - sliderCoorX)*sliderSpeed) : ''
                setProgress()
            });
        }
        if (window.matchMedia('(max-width: 1365px)').matches){
            
            sliderRow.addEventListener('touchstart', function(e) {
                console.log('start');
                sliderDrag = true;
                sliderCoorX = e.pageX - this.offsetLeft;
                sliderRow.style.scrollBehavior = 'unset'
                sliderOffsetLeft = sliderRow.scrollLeft;

            });
            sliderRow.addEventListener('touchmove', function(e) {
                // console.log('move');

                
            });
            sliderRow.addEventListener('touchend', ()=>{
                sliderOffsetLeft = sliderRow.scrollL
            })
        }
        // if (window.matchMedia('(max-width: 1365px)').matches){
        //     sliderRow.addEventListener('touchstart', function(e) {
        //         // sliderDrag = true;
        //         // sliderCoorX = e.pageX - this.offsetLeft;
        //         // sliderRow.style.scrollBehavior = 'unset'
        //         // sliderOffsetLeft = sliderRow.scrollLeft;
        //     });
        //     document.addEventListener('touchend', function(e) {
        //         sliderDrag = false;
        //         sliderOffsetLeft = sliderRow.scrollLeft;
        //             // sliderIndex = Math.round(sliderRow.scrollLeft / sliderItemWidth)
        //             if (sliderRow.scrollLeft % sliderItemWidth > sliderItemWidth/2 ){
        //                 sliderIndex++
        //             }
        //         // if (sliderCount > 1){
        //         //     sliderIndex = Math.round(sliderRow.scrollLeft / sliderItemWidth)
        //         // }
        //         // else{
        //         //     if (sliderOffsetLeft-sliderWrapper.offsetWidth*sliderIndex > sliderWrapper.offsetWidth/2){
        //         //         console.log(sliderOffsetLeft-sliderWrapper.offsetWidth*sliderIndex);
        //         //         sliderIndex++
        //         //     }
        //         //     else if (sliderOffsetLeft-sliderWrapper.offsetWidth*sliderIndex < -sliderWrapper.offsetWidth/2){
        //         //         console.log(sliderOffsetLeft-sliderWrapper.offsetWidth*sliderIndex);
        //         //         sliderIndex-- 
        //         //     }
        //         //     else{
        //         //         console.log(sliderOffsetLeft-sliderWrapper.offsetWidth*sliderIndex);
        //         //     }
        //         // }
        //         sliderRow.style.scrollBehavior = 'smooth'
        //         // toggleSlide()
        //         setProgress()
        //     });
        //     sliderRow.addEventListener('touchmove', function(e) {
        //         // sliderDrag ? this.scrollLeft = sliderOffsetLeft + -1*((e.pageX - this.offsetLeft - sliderCoorX)*sliderSpeed) : ''
        //         setProgress()
        //     });
        // }

        if (sliderDots.length > 0){
            slider.querySelector('.slider__dots').innerHTML = ''

            for (let n = 0; n < sliderItems.length - sliderCount  + 1; n++){
                
                if (n == 0){
                    slider.querySelector('.slider__dots').insertAdjacentHTML('beforeend', '<div class="_active"></div>') 
                }
                else{
                    slider.querySelector('.slider__dots').insertAdjacentHTML('beforeend', '<div></div>') 
                }
            }
            sliderDots = slider.querySelectorAll('.slider__dots > div')
        }

        if (sliderNext){
            sliderNext.addEventListener('click', ()=>{
                sliderIndex = Math.round(sliderRow.scrollLeft / sliderItemWidth)
                sliderIndex++

                toggleSlide() 
            })
        }
        
        if (sliderPrev){
            sliderPrev.addEventListener('click', ()=>{
                sliderIndex = Math.round(sliderRow.scrollLeft / sliderItemWidth)
                sliderIndex--
                toggleSlide() 
            })
        }

        if (sliderProgress){
            setProgress()
            sliderRow.addEventListener('scroll', setProgress)
        }
        
        if (sliderDots.length > 0){
            var timer = null;
            sliderDots.forEach(dot => {
                dot.addEventListener('click', ()=>{
                    sliderDots.forEach(i => {i.classList.remove('_active')})
                    for (let n = 0; n < sliderDots.length; n++){
                        if (sliderDots[n] == dot){
                            sliderDots[n].classList.add('_active')
                            sliderIndex = n
                            toggleSlide()
                        }
                    }
                })
            })
            // if (window.matchMedia('(max-width: 1365px)').matches){
            //     sliderRow.addEventListener('scroll', ()=>{
            //         sliderDots.forEach(i => {i.classList.remove('_active')})
            //         if(timer !== null) {
            //             clearTimeout(timer);        
            //         }
            //         timer = setTimeout(function() {
            //             sliderIndex = Math.round(sliderRow.scrollLeft / sliderItemWidth)
            //             toggleSlide()
            //         }, 50);
            //     })
            // }
        }

        // function setProgress() {
        //     let value = (sliderRow.scrollLeft + sliderItemWidth) / (sliderItemWidth*sliderItems.length) * 100;
        //     if(sliderProgress) {
        //         sliderProgress.style.setProperty('--progress', value + '%');
        //     }
        // }; 
        
        function toggleSlide() {
            if (sliderIndex > sliderItems.length - sliderCount){
                sliderIndex = 0
            }
            if (sliderIndex < 0){
                sliderIndex = sliderItems.length - sliderCount
            }

            if (sliderDots.length > 0){
                sliderDots.forEach(dot => {dot.classList.remove('_active')})
                sliderDots[sliderIndex].classList.add('_active')
            }

            
            sliderRow.scrollLeft = sliderIndex*(sliderItemWidth+sliderIndents)
        }
    }
    // sliders.forEach(slider => {
    //     let sliderProgress = slider.querySelector('.slider__progress')

    //     slider.addEventListener('DOMSubtreeModified', ()=>{
    //         let track = slider.querySelector('.slick-track'),
    //             scrollLeft = -1*(getComputedStyle(track).transform.split('matrix(1, 0, 0, 1, ')[1].split(', 0)')[0]*1 ),
    //             sliderQuantity = 0

    //             sliderProgress ? setProgress(scrollLeft, sliderQuantity) : ''
    //     })
    //     function setProgress(scrollLeft = 0, sliderQuantity = 0) {
    //         let slideWidth = slider.querySelector('.slider__item').offsetWidth
    //         slider.querySelectorAll('.slider__item').forEach(slide => {
    //             if (!slide.classList.contains('slick-cloned')){
    //                 sliderQuantity++
    //             }
    //         })

    //         let value = (scrollLeft + slideWidth) / (slideWidth*sliderQuantity) * 100;

    //         sliderProgress.style.setProperty('--progress', value + '%');
    //     }
    //     sliderProgress ? setProgress() : ''
    // })

    // === FEEDBACK === \\
    let feedbacks = document.querySelectorAll('.feedback')
        
    feedbacks.forEach(feedback => {
        let inputs = feedback.querySelectorAll('.feedback__input'),
            phone = feedback.querySelector('.feedback #phone'),
            email = feedback.querySelector('.feedback__input#email'),
            send = feedback.querySelector('.feedback__btn '),
            checkbox = feedback.querySelector('.feedback__checkbox input'),
            status = false

        $(phone).mask("+7 (999) 999 99 99")
        inputs.forEach(input => {
            input.addEventListener('input', ()=>{
                checkEmpty(input, input.value)
            })
        })

        email.addEventListener('input', ()=>{
            checkEmail(email)
        })

        // checkbox.addEventListener('click', ()=>{
        //     checkCheckbox(checkbox)
        // })

        send.addEventListener('click', ()=>{
            status = true

            inputs.forEach(input => {
                checkEmpty(input, input.value)
                checkEmpty(input, input.value) ? '' : status = false

                checkEmail(email)
                checkEmail(email) ? '' : status = false
                
                checkCheckbox(checkbox)
                checkCheckbox(checkbox) ? '' : status = false
            
            })

            status ? alert('Success') : ''
        })
    })
    function checkCheckbox(checkbox) {
        if (!checkbox.checked){
            checkbox.parentNode.classList.add('_error')
            checkbox.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            return false
        } 
        else{
            checkbox.parentNode.classList.remove('_error')
            return true
        }
    }
    function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email.value)){
            email.parentNode.classList.add('_error')
            email.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            return false
        }
        else{
            email.parentNode.classList.remove('_error')
            return true
        }
    }
    function checkEmpty(element, text, length = 1) {
        text = text + ''

        if (text.length < length){
            element.parentNode.classList.add('_error')
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            return false
        }
        else{
            element.parentNode.classList.remove('_error')
            return true
        }
    }

    // === FILTER === \\
    let filters = document.querySelectorAll('.filter')
    filters.forEach(filter => {
        let filterAvailability = filter.querySelector('.filter__item._availability'),
            filterAvailabilityItems = filterAvailability.querySelectorAll('.filter__checkbox'),
            filterAvailabilityReset = filterAvailability.querySelector('.filter__reset'),
            
            filterPrice = filter.querySelector('.filter__item._price'),
            filterPriceClose = filterPrice.querySelector('.filter__reset'),
            filterPriceInputs = filterPrice.querySelectorAll('.filter__input'),
            filterPriceMin = filterPrice.querySelector('.filter__field._min input'),
            filterPriceMax = filterPrice.querySelector('.filter__field._max input')

            filterValues = filter.querySelector('.filter__values > span'),

            filterApply = filter.querySelector('.filter__btn._apply'),

            filterBtn = filter.querySelector('.filter__btn'),
            filterMenu = filter.querySelector('.filter__menu'),
            filterClose = filter.querySelector('.filter__close'),
            filterClearBtn = filter.querySelector('.filter__btn._clear'),
            filterClear = null

        filterAvailabilityReset.addEventListener('click', ()=>{
            filterAvailability.querySelectorAll('.filter__checkbox input').forEach(item => {
                item.checked = false
            })
        })
        filterPriceClose.addEventListener('click', ()=>{
            filterPrice.querySelectorAll('.filter__input').forEach(item => {
                item.value = ''
            })
        })

        filterApply.addEventListener('click', ()=>{
            filterValues.innerHTML = ''
            filterValues.parentNode.querySelector('h6') ? filterValues.parentNode.querySelector('h6').remove() : ''
            filterMenu.classList.remove('_active')
            filterAvailabilityItems.forEach(item => {
                if (item.querySelector('input').checked){
                    text = item.querySelector('label h4').textContent,
                    filterValues.insertAdjacentHTML('beforeend', `
                    <h6>
                        <span>${text}</span>
                        <button class="filter__delete">
                            <i class="icon-close"></i>
                        </button>
                    </h6>
                    `)
                }
            })
            if (filterPriceMin.value.length > 0 || filterPriceMax.value.length > 0){
                filterPriceMin.value.length < 1 ? filterPriceMin.value = 0 : ''
                filterPriceMax.value.length < 1 ? filterPriceMax.value = filterPriceMax.getAttribute('placeholder') : ''
                filterValues.insertAdjacentHTML('beforeend', `
                <h6>
                    <span>
                        ${
                            beautifulNumber(filterPriceMin.value)} - ${beautifulNumber(filterPriceMax.value)
                        } руб.
                    </span>
                    <button class="filter__delete">
                        <i class="icon-close"></i>
                    </button>
                </h6>
                `)
            }
            filterValues.parentNode.insertAdjacentHTML('beforeend', `
                <h6 class="filter__clear">Очистить</h6>
            `)
            filterClear = filter.querySelector('.filter__clear')
            filterClear.addEventListener('click', ()=>{
                clearFilter()
                filterValues.parentNode.innerHTML = ''
            })
            let filterDelete = filter.querySelectorAll('.filter__delete')
            filterDelete.forEach(item => {
                item.addEventListener('click', ()=>{
                    item.parentNode.remove()
                    if (filterValues.textContent.replace(/[^0-9]/g,"").length < 1){
                        filterClear.remove()
                    }
                })
            })
        })

        filterBtn.addEventListener('click', ()=>{
            filterMenu.classList.toggle('_active')
        })
        filterClearBtn.addEventListener('click', clearFilter)
        filterClose.addEventListener('click', ()=>{
            filterMenu.classList.remove('_active')
        })
        function clearFilter() {
            filterAvailabilityItems.forEach(item => {
                item.querySelector('input').checked = false
            })
            filterPrice.querySelectorAll('.filter__input').forEach(item => {
                item.value = ''
            })
        }
    })
    function beautifulNumber(value) {
        value += ''
        if (value.length == 4){
            let valueFirst = value.slice(0,1),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueLast;
        }
        else if (value.length == 5){
            let valueFirst = value.slice(0,-3),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueLast;
        }
        else if (value.length == 6){
            let valueFirst = value.slice(0,-3),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueLast;
        }
        else if (value.length == 7){
            let valueFirst = value.slice(0,1),
                valueSecond = value.slice(1, -3),
                valueLast = value.slice(-3)
            value = valueFirst + '.' + valueSecond + '.' + valueLast;
        }
        return value
    }

    // === SEARCH === \\
    let search = document.querySelectorAll('.search')
    if (search.length > 0){
        search.forEach(search => {
            let searchBtn = search.querySelector('.search__btn'),
                searchWrapper = search.querySelector('.search__wrapper'),
                searchField = search.querySelector('.search__field'),
                searchInput = search.querySelector('.search__input'),
                searchClose = search.querySelector('.search__close')

            searchInput.addEventListener('input', ()=>{
                searchInput.value.length > 0 ? search.classList.add('_results') : search.classList.remove('_results')
            })
            if (searchBtn){
                searchBtn.addEventListener('click', ()=>{
                    search.classList.add('_active')
                    // document.body.style.overflow = 'hidden'
                })
            }
            if (searchClose){
                searchClose.addEventListener('click', ()=>{
                    searchInput.value = ''
                    search.classList.remove('_results')
                })
            }

            // searchWrapper.addEventListener('click', (e) => {
            //     let withinBoundaries = e.composedPath().includes(searchField);
                    
            //     if ( !withinBoundaries) {
            //         search.classList.remove('_active')
            //         // document.body.style.overflow = ''
            //     }
            // })
        })
    }

    let headerSearch = document.querySelector('.header .search')
        
    if (headerSearch){
        let headerSearchBtn = headerSearch.querySelector('.search__btn'),
            headerSearchField = headerSearch.querySelector('.search__field'),
            headerSearchWrapper = headerSearch.querySelector('.search__wrapper')
        
        headerSearchBtn.addEventListener('click', ()=>{
            console.log('jh');
            document.querySelector('html').style.overflow = 'hidden'
        })
        headerSearchWrapper.addEventListener('click', (e) => {
            let withinBoundaries = e.composedPath().includes(headerSearchField);
                
            if ( !withinBoundaries || e.composedPath().includes(headerSearchBtn) ){
                headerSearch.classList.remove('_active')
                document.querySelector('html').style.overflow = ''
            }
        })
    }
    // === UP BTN === \\
    let pageHeight = window.screen.height,
        pageWidth = window.screen.width,
        upBtn = document.querySelector('.up')
        bottom = document.querySelector('.bottom')

    window.addEventListener('scroll', ()=>{
        window.pageYOffset > 0 ? header.classList.add('_scroll') : header.classList.remove('_scroll')


        window.pageYOffset > pageHeight ? bottom.classList.add('_active') : bottom.classList.remove('_active')
    })

    upBtn.addEventListener('click', ()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }); })

    if (window.matchMedia('(min-width: 1366px)').matches){
        bottom.style.right = (pageWidth - getComputedStyle(document.body).getPropertyValue('--containerWidth').split('px')[0]*1)/2 + 'px'
    }

    // === HEADER ===
    let headerMenu = header.querySelector('.header__menu'),
        headerBurger = header.querySelector('.header__burger'),
        headerClose = header.querySelector('.menu__close')
    
    headerBurger.addEventListener('click', ()=>{
        headerMenu.classList.toggle('_active')
        headerBurger.classList.toggle('_active')

        headerMenu.classList.contains('_active') ? document.body.style.overflow = 'hidden' : ''
    })
    document.addEventListener('click', (e) => {
        let withinBoundaries = e.composedPath().includes(headerMenu);
            
        if ( !withinBoundaries && !e.composedPath().includes(headerBurger)) {
            headerMenu.classList.remove('_active')
            headerBurger.classList.remove('_active')
            document.body.style.overflow = ''
        }
    })
    if (headerClose){
        headerClose.addEventListener('click', ()=>{
            headerMenu.classList.remove('_active')
            headerBurger.classList.remove('_active')
            document.body.style.overflow = ''
        })
    }

    
    // Media Queries
    function mediaQueries() {
        if (window.matchMedia('(min-width: 1366px)').matches){
            // let workSliders = document.querySelectorAll('.work__slider')

            // workSliders.forEach(slider => {
            //     slider.classList.remove('slider')
            // })
        }
        if (window.matchMedia('(max-width: 768px)').matches){



        }
        if (window.matchMedia('(max-width: 360px)').matches){
            
        }
    };
    
    window.addEventListener('resize', mediaQueries)
})