'use strict'
window.addEventListener('DOMContentLoaded', ()=> {
    // === HEADER
    let header = document.querySelector('header.header')


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