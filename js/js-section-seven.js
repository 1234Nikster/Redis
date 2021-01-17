'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let sevenSliderArrowInLeft = document.querySelectorAll('.sevenSlider__middleContainer>.contArrowLeft')
    let sevenSliderArrowInRight = document.querySelectorAll('.sevenSlider__middleContainer>.contArrowRight')
    let everyMiddleContainerSevenSlider = document.querySelectorAll('.sevenSlider__middleContainer')
    window.sevenCounterInSlider = 0
    window.sevenEverySlide = Array.from(document.querySelectorAll('.sevenSlider__sectionOfDish'))
    let allDish = document.querySelector('.allDish')
    let sectionSalad = document.querySelector('.salads')
    let sectionSnacks = document.querySelector('.snacks')
    let sectionSoaps = document.querySelector('.soaps')
    let okroshka = document.querySelector('.okroshka')
    let garnishes = document.querySelector('.garnishes')

    // ------листать на тач-устройстве
    window.saveCounterNumberSlideSevenSection = 0
    let saveCounterOfSlide
    let posX1
    let posX2
    let posInitialX
    let posFinal
    let limitOnLeaf

    everyMiddleContainerSevenSlider.forEach((element) => {
        element.addEventListener('touchstart', function moveStart(event) {
            if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')) {
                return
            }
            saveCounterOfSlide = element.querySelector(`.sevenSlider__sectionOfDish`).offsetWidth * saveCounterNumberSlideSevenSection
            posInitialX = event.targetTouches[0].clientX;
            posX1 = posInitialX
            for (let i of sevenEverySlide) {
                i.style.transition = '0s';
            }
            element.addEventListener('touchmove', function moveOn(event) {
                if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')) {
                    return
                }
                posX1 = event.targetTouches[0].clientX;
                posX2 = (posX1 - posInitialX) - saveCounterOfSlide
                for (let i of sevenEverySlide) {
                    i.style.transform = `translate(${posX2}px)`;
                }
            })
            element.addEventListener('touchend', function moveEnd() {
                if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')) {
                    return
                }
                posFinal = posInitialX - posX1
                limitOnLeaf = element.offsetWidth / 9

                if (Math.abs(posFinal) >= limitOnLeaf) {
                    if (posInitialX >= posX1) {
                        sevenCounterInSlider += 100
                        saveCounterNumberSlideSevenSection++
                        if (allDish.classList.contains('active') == true) {
                            if (sevenCounterInSlider >= 2900) {
                                sevenCounterInSlider = 2900
                                saveCounterNumberSlideSevenSection = 29
                            }
                        } else if (sectionSalad.classList.contains('active') == true ||
                            sectionSnacks.classList.contains('active') == true ||
                            sectionSoaps.classList.contains('active') == true ||
                            okroshka.classList.contains('active') == true ||
                            garnishes.classList.contains('active') == true) {
                            if (sevenCounterInSlider >= 400) {
                                sevenCounterInSlider = 400
                                saveCounterNumberSlideSevenSection = 4
                            }
                        }

                        for (let i of sevenEverySlide) {
                            i.style.transition = '';
                            i.style.transform = `translate(-${sevenCounterInSlider}%)`
                        }
                    } else if (posInitialX < posX1) {
                        sevenCounterInSlider -= 100
                        saveCounterNumberSlideSevenSection -= 1
                        if (sevenCounterInSlider < 0) {
                            sevenCounterInSlider = 0
                            saveCounterNumberSlideSevenSection = 0
                        }

                        for (let i of sevenEverySlide) {
                            i.style.transition = '';
                            i.style.transform = `translate(-${sevenCounterInSlider}%)`
                        }
                    }
                } else {
                    for (let i of sevenEverySlide) {

                        i.style.transition = '';
                        i.style.transform = `translate(-${sevenCounterInSlider}%)`
                    }
                }

                element.removeEventListener('touchend', moveEnd);
            })
        })
    })
    // ------листать на тач-устройстве
    // ------листать на тач-устройстве

    // ------листать на колесе мыши
    function addOnWheel(elem, handler) {
        if (elem.addEventListener) {
            if ('onwheel' in document) {
                // IE9+, FF17+
                elem.addEventListener("wheel", handler);
            } else if ('onmousewheel' in document) {
                // устаревший вариант события
                elem.addEventListener("mousewheel", handler);
            } else {
                // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
                elem.addEventListener("MozMousePixelScroll", handler);
            }
        } else { // IE8-
            elem.attachEvent("onmousewheel", handler);
        }
    }

    everyMiddleContainerSevenSlider.forEach((element)=>{
        addOnWheel(element, function (e) {
            if (document.elementFromPoint(e.clientX, e.clientY).closest('.openedMenu') || document.elementFromPoint(e.clientX, e.clientY).closest('.dataBasket')) {
                return
            }
        
            var delta = e.deltaY || e.detail || e.wheelDelta;
            // отмасштабируем при помощи CSS
            if (delta > 0) {
                sevenCounterInSlider -= 100
                saveCounterNumberSlideSevenSection--
            } else {
                sevenCounterInSlider += 100;
                saveCounterNumberSlideSevenSection++
            }

            if (allDish.classList.contains('active') == true) {
                if (sevenCounterInSlider >= 2900) {
                    sevenCounterInSlider = 2900
                    saveCounterNumberSlideSevenSection = 29
                }
            } else if (sectionSalad.classList.contains('active') == true ||
                sectionSnacks.classList.contains('active') == true ||
                sectionSoaps.classList.contains('active') == true ||
                okroshka.classList.contains('active') == true ||
                garnishes.classList.contains('active') == true) {
                if (sevenCounterInSlider >= 400) {
                    sevenCounterInSlider = 400
                    saveCounterNumberSlideSevenSection = 4
                }
            } for(let i of sevenEverySlide) {
                i.style.transform = i.style.WebkitTransform = i.style.MsTransform = `translate(-${sevenCounterInSlider}%)`;
            }
            if (sevenCounterInSlider < 0) {
                sevenCounterInSlider = 0
                saveCounterNumberSlideSevenSection = 0
            }
            // отменим прокрутку
            e.preventDefault();
        });
    })
    // ------листать на колесе мыши
    // ------листать на колесе мыши

    // движение слайдера по стрелочкам
    sevenSliderArrowInRight.forEach((el) => {
        el.addEventListener('click', () => {
            sevenCounterInSlider += 100
            saveCounterNumberSlideSevenSection += 1
            if (allDish.classList.contains('active') == true) {
                if (sevenCounterInSlider >= 2900) {
                    sevenCounterInSlider = 2900
                    saveCounterNumberSlideSevenSection = 29
                }
            } else if (sectionSalad.classList.contains('active') == true ||
                sectionSnacks.classList.contains('active') == true ||
                sectionSoaps.classList.contains('active') == true ||
                okroshka.classList.contains('active') == true ||
                garnishes.classList.contains('active') == true) {
                if (sevenCounterInSlider >= 400) {
                    sevenCounterInSlider = 400
                    saveCounterNumberSlideSevenSection = 4
                }
            }
            sevenEverySlide.forEach((element) => {
                element.style.transform = `translate(-${sevenCounterInSlider}%)`
            })
            
        })
    })
    sevenSliderArrowInLeft.forEach((el) => {
        el.addEventListener('click', () => {
            sevenCounterInSlider -= 100
            saveCounterNumberSlideSevenSection -= 1
            if (sevenCounterInSlider <= 0) {
                sevenCounterInSlider = 0
                saveCounterNumberSlideSevenSection = 0
            }
            sevenEverySlide.forEach((element) => {
                element.style.transform = `translate(-${sevenCounterInSlider}%)`
            })
        })
    })
    // движение слайдера по стрелочкам
    // движение слайдера по стрелочкам
})