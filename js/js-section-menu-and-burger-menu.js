"use strict"

document.addEventListener('DOMContentLoaded', () => {

    let allContainersBurger = document.querySelectorAll('.contBurger') //ВСЕ КОНТЕЙНЕРЫ БУРГЕР-МЕНЮ
    window.menu = document.querySelector('.openedMenu') //ОБЩЕЕ МЕНЮ
    let crossOfMenuContainer = document.querySelector('.openedMenu__crossContainer') //КОНТЕЙНЕР КРЕСТИКА МЕНЮ

    // -------АКТИВНОСТЬ ВСЕХ БУРГЕРОВ И АНИМАЦИЯ ВЫПАДА
    allContainersBurger.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelector('.openedMenu__itemsAll').scrollTop = 0
            menu.style.transitionTimingFunction = 'ease-in'
            menu.style.transitionDuration = '0.3s'
            menu.style.transform = 'translate(0px,0%)'
            menu.addEventListener('transitionend', function a (event) {
                if (event.target.classList.contains('openedMenu') == false) {
                    return
                }
                menu.style.transitionTimingFunction = 'ease-out'
                menu.style.transitionDuration = '0.18s'
                // menu.style.transitionDuration = '0.4s'
                menu.style.transform = 'translate(0px,-10%)'
                menu.removeEventListener('transitionend', a)
                menu.addEventListener('transitionend', function b (event) {
                    if (event.target.classList.contains('openedMenu') == false) {
                        return
                    }
                    menu.style.transitionTimingFunction = 'ease-in'
                    menu.style.transitionDuration = '0.2s'
                    // menu.style.transitionDuration = '0.4s'
                    menu.style.transform = 'translate(0px,0%)'
                    menu.removeEventListener('transitionend', b)
                    menu.addEventListener('transitionend', function c (event) {
                        if (event.target.classList.contains('openedMenu') == false) {
                            return
                        }
                        menu.style.transitionTimingFunction = 'ease-out'
                        menu.style.transitionDuration = '0.16s'
                        // menu.style.transitionDuration = '0.4s'
                        menu.style.transform = 'translate(0px,-3%)'
                        menu.removeEventListener('transitionend', c)
                        menu.addEventListener('transitionend', function d (event) {
                            if (event.target.classList.contains('openedMenu') == false) {
                                return
                            }
                            menu.style.transitionTimingFunction = 'ease-in'
                            menu.style.transitionDuration = '0.16s'
                            // menu.style.transitionDuration = '0.4s'
                            menu.style.transform = 'translate(0px,0%)'
                            menu.removeEventListener('transitionend', d)
                        })
                    })
                })
            })
        })
    })
    // -------АКТИВНОСТЬ ВСЕХ БУРГЕРОВ И АНИМАЦИЯ ВЫПАДА
    // -------АКТИВНОСТЬ ВСЕХ БУРГЕРОВ И АНИМАЦИЯ ВЫПАДА

    //-------АКТИВНОСТЬ КРЕСТИКА МЕНЮ
    crossOfMenuContainer.addEventListener('click', ()=>{
        menu.style.transitionDuration = '0.3s'
        menu.style.transform = 'translate(0px,-100%)'
    })
    //-------АКТИВНОСТЬ КРЕСТИКА МЕНЮ
    //-------АКТИВНОСТЬ КРЕСТИКА МЕНЮ
})