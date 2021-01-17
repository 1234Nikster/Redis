'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let containerProducts = document.querySelector('.fiveSlider__containerProducts')
    let sliderArrowInLeft = document.querySelector('.contArrowLeft')
    let sliderArrowInRight = document.querySelector('.contArrowRight')
    let everySlide = Array.from(document.querySelectorAll('.slide'))
    let counterInSlider = 0
    let bascet = document.querySelector('.dataBasket')
    let allSlideInBascet = Array.from(document.querySelectorAll('.dataBasket__slider'))
    let buttonDelete = document.querySelector('.deleteProduct')
    let buttonDele = document.querySelector('.deletePr')
    let buttonToChoice = document.querySelector('.returnInSelect')
    let buttonToBascetData = document.querySelector('.clickOpenBasket')
    let changeColorButtonToBascetData = document.querySelector('.buttonOpenBascet')

    // ------листать на тач-устройстве
    let saveCounterNumberSlideFiveSection = 0
    let saveCounterOfSlide
    let posX1
    let posX2
    let posInitialX
    let posFinal
    let limitOnLeaf

    containerProducts.addEventListener('touchstart', function moveStart(event) {
        if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')) {
            return
        }
        saveCounterOfSlide = containerProducts.querySelector(`.slide`).offsetWidth * saveCounterNumberSlideFiveSection
        posInitialX = event.targetTouches[0].clientX;
        posX1 = posInitialX
        for (let i of everySlide) {
            i.style.transition = '0s';
        }
        containerProducts.addEventListener('touchmove', function moveOn(event) {
            if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')) {
                return
            }
            posX1 = event.targetTouches[0].clientX;
            posX2 = (posX1 - posInitialX) - saveCounterOfSlide
            for (let i of everySlide) {
                i.style.transform = `translate(${posX2}px)`;
            }
        })
        containerProducts.addEventListener('touchend', function moveEnd() {
            if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')) {
                return
            }
            posFinal = posInitialX - posX1
            limitOnLeaf = containerProducts.offsetWidth / 6

            if (Math.abs(posFinal) >= limitOnLeaf) {
                if (posInitialX >= posX1) {
                    counterInSlider += 100
                    saveCounterNumberSlideFiveSection++
                    if (counterInSlider >= 300) {
                        counterInSlider = 300
                        saveCounterNumberSlideFiveSection = 3
                    }

                    for (let i of everySlide) {
                        i.style.transition = '';
                        i.style.transform = `translate(-${counterInSlider}%)`
                    }
                } else if (posInitialX < posX1) {
                    counterInSlider -= 100
                    saveCounterNumberSlideFiveSection -= 1
                    if (counterInSlider < 0) {
                        counterInSlider = 0
                        saveCounterNumberSlideFiveSection = 0
                    }

                    for (let i of everySlide) {
                        i.style.transition = '';
                        i.style.transform = `translate(-${counterInSlider}%)`
                    }
                }
            } else {
                for (let i of everySlide) {

                    i.style.transition = '';
                    i.style.transform = `translate(-${counterInSlider}%)`
                }
            }

            containerProducts.removeEventListener('touchend', moveEnd);
        })
    })
    // })
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

    addOnWheel(containerProducts, function (e) {
        if (document.elementFromPoint(e.clientX, e.clientY).closest('.openedMenu') || document.elementFromPoint(e.clientX, e.clientY).closest('.dataBasket')) {
            return
        }

        var delta = e.deltaY || e.detail || e.wheelDelta;
        // отмасштабируем при помощи CSS
        if (delta > 0) {
            counterInSlider -= 100
            saveCounterNumberSlideFiveSection--
        } else {
            counterInSlider += 100;
            saveCounterNumberSlideFiveSection++
        }
            if (counterInSlider >= 300) {
                counterInSlider = 300
                saveCounterNumberSlideFiveSection = 3
            }
        for (let i of everySlide) {
            i.style.transform = i.style.WebkitTransform = i.style.MsTransform = `translate(-${counterInSlider}%)`;
        }
        if (counterInSlider < 0) {
            counterInSlider = 0
            saveCounterNumberSlideFiveSection = 0
        }
        // отменим прокрутку
        e.preventDefault();
    });
    // ------листать на колесе мыши
    // ------листать на колесе мыши

    // движение слайдера по стрелкам
    sliderArrowInRight.addEventListener('click', () => {
        counterInSlider += 100
        saveCounterNumberSlideFiveSection++
        if (counterInSlider >= 300) {
            counterInSlider = 300
            saveCounterNumberSlideFiveSection = 3
        }
        everySlide.forEach((element) => {
            element.style.transform = `translate(-${counterInSlider}%)`
        })
    })

    sliderArrowInLeft.addEventListener('click', () => {
        counterInSlider -= 100
        saveCounterNumberSlideFiveSection--
        if (counterInSlider < 0) {
            counterInSlider = 0
            saveCounterNumberSlideFiveSection = 0
        }
        everySlide.forEach((element) => {
            element.style.transform = `translate(-${counterInSlider}%)`
        })

    })
    // движение слайдера по стрелкам
    // движение слайдера по стрелкам

    //счетчик и связка выборки товаров
    everySlide.forEach((element, index) => {
        element.addEventListener('click', () => {
            element.classList.toggle('active')
            allSlideInBascet[index].classList.remove('choice')
            for (let i of everySlide) {
                if (i.classList.contains('active')) {
                    changeColorButtonToBascetData.style.backgroundColor = '#1b1b1b'
                    break
                } else {
                    changeColorButtonToBascetData.style.backgroundColor = ''
                }
            }
            if (element.classList.contains('active')) {
                document.querySelector('.zero').value++
                allSlideInBascet[index].classList.add('active')
            } else {
                document.querySelector('.zero').value--
                allSlideInBascet[index].classList.remove('active')
                buttonDelete.classList.remove('active')
            }
        })
        //счетчик и связка выборки товаров
        //счетчик и связка выборки товаров

        //связка удаления товаров
        allSlideInBascet.forEach((item, ind) => {
            item.addEventListener('click', () => {
                item.classList.toggle('choice')
                for (let i of allSlideInBascet) {
                    if (i.classList.contains('choice')) {
                        buttonDele.classList.add('active')
                        break
                    } else {
                        buttonDele.classList.remove('active')
                    }
                }
            })
            buttonDelete.addEventListener('click', () => {
                if (item.classList.contains('choice')) {
                    buttonDele.classList.remove('active')
                    item.classList.remove('active')
                    item.classList.remove('choice')
                    everySlide[ind].classList.remove('active')

                    if (everySlide[ind].classList.contains('active')) {
                        document.querySelector('.zero').value++
                    } else {
                        document.querySelector('.zero').value--
                    }
                }
                for (let i of allSlideInBascet) {
                    if (i.classList.contains('active')) {
                        changeColorButtonToBascetData.style.backgroundColor = '#1b1b1b'
                        break
                    } else {
                        changeColorButtonToBascetData.style.backgroundColor = ''
                    }
                }
            })

            //закрыть корзину, убрать цвет выделения,вернуть кнопку
            buttonToChoice.addEventListener('click', () => {
                bascet.style.transform = ''
                for (let i of allSlideInBascet) {
                    i.classList.remove('choice')
                }
                buttonToBascetData.style.transform = ''
                buttonDele.classList.remove('active')
            })
            //закрыть корзину, убрать цвет выделения,вернуть кнопку
            //закрыть корзину, убрать цвет выделения,вернуть кнопку

        })
    })
    //связка удаления товаров
    //связка удаления товаров

    //открыть корзину
    buttonToBascetData.addEventListener('click', () => {
        bascet.style.transform = 'translateY(25%)'
        buttonToBascetData.style.transform = 'scaleY(0)'
    })
    //открыть корзину
    //открыть корзину
})