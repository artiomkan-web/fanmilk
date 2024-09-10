'use strict'
window.addEventListener('DOMContentLoaded', ()=> {

    let cartIcon = document.querySelector('.cart__icon'),
        cartIconSpan = cartIcon.querySelector('span');

    let card = document.querySelector('.card'),
        cardTitle = card.querySelector('.card__title'),
        cardSubtitle = card.querySelector('.card__subtitle'),
        cardCountValue = card.querySelector('.card__count .count__value'),
        cardSendBtn = card.querySelector('.card__send')

    
    cardSendBtn.addEventListener('click', ()=>{
        card.classList.add('_added')
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let addedQuantity = card.querySelectorAll('.added__quantity'),
            addedName = card.querySelector('.added__name'),
            addedSize = card.querySelector('.added__size > span'), 
            addedClose = card.querySelector('.added__close'), 
            startTitle = cardTitle.textContent,
            startCartQuantity = cartIconSpan.textContent

        
        cartIconSpan.innerHTML = startCartQuantity*1 + cardCountValue.value*1
        addedQuantity.forEach(quantity => {
            quantity.textContent = 'x' + cardCountValue.value
        })
        addedQuantity.textContent = 'x' + cardCountValue.value
        addedName.textContent = cardSubtitle.textContent
        addedSize.textContent = card.querySelector('.size__item._active').textContent
        if (window.matchMedia('(max-width: 768px)').matches){
            cardTitle.textContent = 'Добавлено'
        }
        cardTitle.insertAdjacentHTML('beforeend', 
        `
            <button class="card__close"><i class="icon-close"></i></button>
        `)
        

        
        let cardClose = card.querySelectorAll('.card__close'),
            cardContinue = card.querySelector('.added__continue')

        cardClose.forEach(close => {
            close.addEventListener('click', closeCardAdded)
        })
        cardContinue.addEventListener('click', closeCardAdded)

        function closeCardAdded() {
            card.classList.remove('_added');
            cardTitle.textContent = startTitle
        }
    })


    // TABS
    let tabs = document.querySelectorAll('.tabs')

    tabs.forEach(item => {tabsCreater(item)})
    function tabsCreater(tabs) {
        let tabsTitles = tabs.querySelectorAll('.tabs__title'),
            tabsItems = tabs.querySelectorAll('.tabs__item')

        tabsTitles.forEach(title => {
            title.addEventListener('click', ()=>{
                for (let n = 0; n < tabsTitles.length; n++){
                    if (tabsTitles[n] == title){
                        tabsTitles[n].classList.add('_active')
                        tabsItems[n].classList.add('_active')
                    }
                    else {
                        tabsTitles[n].classList.remove('_active')
                        tabsItems[n].classList.remove('_active')
                    }
                }
            })
        })
    }

    // Media Queries
    function mediaQueries() {
        if (window.matchMedia('(max-width: 1440px)').matches){
            
        }
        if (window.matchMedia('(max-width: 1024px)').matches){
            
        }
        if (window.matchMedia('(max-width: 768px)').matches){

        }
        if (window.matchMedia('(max-width: 360px)').matches){
            
        }
    };
    
    mediaQueries()
    window.addEventListener('resize', mediaQueries)
})