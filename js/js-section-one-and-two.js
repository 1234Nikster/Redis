"use strict"

window.lenght = document.querySelector('.lenght')
window.step = 0 //счетчик-переменная ленты
let mainLogo = document.querySelector('.mainLogo') //ОСНОВНОЕ НАЧАЛЬНОЕ ЛОГО
let allLogoAnimation = document.querySelectorAll('.logo') //ВСЕ ЛОГО В ЛЕВОМ УГЛУ
let allBlockNext = document.querySelectorAll('.fullBlockNext') //ВСЕ БЛОКИ С "ЛИСТАТЬ"
let allArrowNext = document.querySelectorAll('.arrowNext') //ВСЕ СТРЕЛКИ "ЛИСТАТЬ"
let goLogo
let itemsOfMenu = Array.from(document.querySelectorAll('.openedMenu__itemsAll>li'))

// ------листать на тач-устройстве
window.saveCounterNumberSlide = 0
let saveCounterOfSlide
let posX1
let posX2
let posInitialX
let posFinal
let limitOnLeaf

view.addEventListener('touchstart', function moveStart(event) {
    if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu') ||
        document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.sevenSlider__middleContainer') ||
        document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.fiveSlider__containerProducts')) {
        return
    }
    posInitialX = event.targetTouches[0].clientX;
    posX1 = posInitialX
    lenght.style.transition = '0s';
    saveCounterOfSlide = view.offsetWidth * saveCounterNumberSlide
    view.addEventListener('touchmove', function moveOn(event) {
        if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')
            // return
            // }
            ||
            document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.sevenSlider__middleContainer') ||
            document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.fiveSlider__containerProducts')) {
            return
        }
        posX1 = event.targetTouches[0].clientX;
        posX2 = (posX1 - posInitialX) - saveCounterOfSlide
        lenght.style.transform = `translate(${posX2}px)`;
    })
    view.addEventListener('touchend', function moveEnd() {
        if (document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY).closest('.openedMenu')) {
            return
        }
        posFinal = posInitialX - posX1
        limitOnLeaf = view.offsetWidth / 3
        if (Math.abs(posFinal) >= limitOnLeaf) {
            if (posInitialX > posX1) {
                lenght.style.transition = '0.5s';
                saveCounterNumberSlide++
                step += 100
                if (sevenSection.classList.contains('active') == false && nineSection.classList.contains('active') == false) {
                    if (step >= 700) {
                        step = 700
                    }
                    if (saveCounterNumberSlide >= 7) {
                        saveCounterNumberSlide = 7
                    }
                } else if (sevenSection.classList.contains('active') == false && nineSection.classList.contains('active') == true ||
                    sevenSection.classList.contains('active') == true && nineSection.classList.contains('active') == false) {
                    if (step >= 800) {
                        step = 800
                    }
                    if (saveCounterNumberSlide >= 8) {
                        saveCounterNumberSlide = 8
                    }
                } else if (sevenSection.classList.contains('active') == true && nineSection.classList.contains('active') == true) {
                    if (step >= 900) {
                        step = 900
                    }
                    if (saveCounterNumberSlide >= 9) {
                        saveCounterNumberSlide = 9
                    }
                }
                lenght.style.transform = `translate(-${step}%)`
            } else if (posInitialX < posX1) {
                lenght.style.transition = '0.5s';
                step -= 100
                if (step < 0) {
                    step = 0
                }
                lenght.style.transform = `translate(-${step}%)`
                saveCounterNumberSlide--
                if (saveCounterNumberSlide <= 0) {
                    saveCounterNumberSlide = 0
                }
                if (saveCounterNumberSlide == 0) {
                    goLogo()
                }
            }
        } else {
            lenght.style.transition = '0.5s';
            lenght.style.transform = `translate(-${step}%)`
        }
        view.removeEventListener('touchend', moveEnd);
    })
})
// ------листать на тач-устройстве
// ------листать на тач-устройстве

// -------навигация по меню
itemsOfMenu.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('openedMenu__itemSix') && sevenSection.classList.contains('active')) {
            saveCounterNumberSlide = 7
            step = 700
            menu.style.transitionDuration = '0.3s'
            menu.style.transform = 'translate(0px,-100%)'
            lenght.style.transform = `translate(-${step}%)`
            return
        }

        if (element.classList.contains('openedMenu__itemSeven') && nineSection.classList.contains('active') && sevenSection.classList.contains('active')) {
            saveCounterNumberSlide = 9
            step = 900
            menu.style.transitionDuration = '0.3s'
            menu.style.transform = 'translate(0px,-100%)'
            lenght.style.transform = `translate(-${step}%)`
            return
        }

        if (element.classList.contains('openedMenu__itemSeven') && (nineSection.classList.contains('active') || sevenSection.classList.contains('active'))) {
            saveCounterNumberSlide = 9
            step = 800
            menu.style.transitionDuration = '0.3s'
            menu.style.transform = 'translate(0px,-100%)'
            lenght.style.transform = `translate(-${step}%)`
            return
        }
        saveCounterNumberSlide = [index + 1] * 1
        step = [index + 1] * 100
        menu.style.transitionDuration = '0.3s'
        menu.style.transform = 'translate(0px,-100%)'
        lenght.style.transform = `translate(-${step}%)`
    })
})
// -------навигация по меню
// -------навигация по меню

// -----АКТИВНОСТЬ ВСЕХ "ЛИСТАТЬ"
allBlockNext.forEach((element) => {
    element.addEventListener('click', () => {
        saveCounterNumberSlide++
        step += 100
        lenght.style.transform = `translate(-${step}%)`
    })
})

// -----АКТИВНОСТЬ ВСЕХ "ЛИСТАТЬ"
// -----АКТИВНОСТЬ ВСЕХ "ЛИСТАТЬ"

// ---передвижение слайдов колесом мыши
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

addOnWheel(view, function (e) {
    if (document.elementFromPoint(e.clientX, e.clientY).closest('.openedMenu') || document.elementFromPoint(e.clientX, e.clientY).closest('.dataBasket') ||
        document.elementFromPoint(e.clientX, e.clientY).closest('.sevenSlider__middleContainer') ||
        document.elementFromPoint(e.clientX, e.clientY).closest('.fiveSlider__containerProducts')) {
        return
    }

    var delta = e.deltaY || e.detail || e.wheelDelta;
    // отмасштабируем при помощи CSS
    if (delta > 0) {
        step -= 100
        saveCounterNumberSlide--
    } else {
        window.step += 100;
        saveCounterNumberSlide++
    }
    if (sevenSection.classList.contains('active') == false && nineSection.classList.contains('active') == false) {
        if (step >= 700) {
            step = 700
        }
        if (saveCounterNumberSlide > 7) {
            saveCounterNumberSlide = 7
        }
    } else if (sevenSection.classList.contains('active') == false && nineSection.classList.contains('active') == true ||
        sevenSection.classList.contains('active') == true && nineSection.classList.contains('active') == false) {
        if (step >= 800) {
            step = 800
        }
        if (saveCounterNumberSlide > 8) {
            saveCounterNumberSlide = 8
        }
    } else if (sevenSection.classList.contains('active') == true && nineSection.classList.contains('active') == true) {
        if (step >= 900) {
            step = 900
        }
        if (saveCounterNumberSlide > 9) {
            saveCounterNumberSlide = 9
        }
    }
    lenght.style.transform = lenght.style.WebkitTransform = lenght.style.MsTransform = `translate(-${step}%)`;
    if (step == 0) {
        goLogo()
    }
    // отменим прокрутку
    e.preventDefault();
});
// ---передвижение слайдов колесом мыши
// ---передвижение слайдов колесом мыши



// ----АНИМАЦИЯ И АКТИВНОСТЬ ВСЕХ БОКОВЫХ И ГЛАВНОГО ЛОГО 
allLogoAnimation.forEach((element) => {
    let move
    let move2
    element.addEventListener('mouseenter', function convertLogo() {
        element.style.transform = 'scale(1.1)'
        move = setTimeout(() => {
            element.style.transform = 'scale(1)'
            move2 = setTimeout(() => {
                element.style.transform = 'scale(1.1)'
                convertLogo()
            }, 300)
        }, 300)
    })

    element.addEventListener('mouseleave', () => {
        clearTimeout(move)
        clearTimeout(move2)
        element.style.transform = 'scale(1)'
    })

    element.addEventListener('click', async () => {
        lenght.style.transform = 'translate(0%)'

        if (lenght.style.transform = 'translate(0%)') {
            window.step = 200
            setTimeout(() => {
                lenght.style.transform = 'translate(-100%)'
            }, 1820)
            await new Promise((resolve) => {
                setTimeout(() => {
                    mainLogo.style.transform = 'scale(0.7)'
                    resolve()
                }, 500);
            })

            await new Promise((resolve) => {
                setTimeout(() => {
                    document.querySelector('.tresk1').style.display = 'inline'
                    resolve()
                }, 150);
            })

            await new Promise((resolve) => {
                setTimeout(() => {

                    mainLogo.style.transform = 'scale(0.5)'
                    resolve()
                }, 100);
            })

            await new Promise((resolve) => {
                setTimeout(() => {
                    mainLogo.style.transform = 'scale(1)'
                    resolve()
                }, 300);
            })

            await new Promise((resolve) => {
                setTimeout(() => {
                    document.querySelector('.tresk2').style.display = 'inline'
                    resolve()
                }, 150);
            })

            await new Promise((resolve) => {
                setTimeout(() => {
                    mainLogo.style.transform = 'scale(0.7)'
                    resolve()
                }, 100);
            })

            await new Promise((resolve) => {
                setTimeout(() => {
                    mainLogo.style.transform = 'rotate(5deg) translate(100px) scale(0.7)'
                    resolve()
                }, 300);
            })

            await new Promise((resolve) => {
                setTimeout(() => {
                    mainLogo.style.transform = 'translate(-500px) rotate(-150deg) scale(0.7)'
                    resolve()
                }, 300);
            })

            setTimeout(() => {
                mainLogo.style.transform = 'rotate(0deg)'
                mainLogo.style.transform = 'scale(0.5)'
                document.querySelector('.tresk2').style.display = 'none'
                document.querySelector('.tresk1').style.display = 'none'
            }, 300);
        }
        saveCounterNumberSlide = 1
        step = 100
    })
})
// ----АНИМАЦИЯ И АКТИВНОСТЬ ВСЕХ БОКОВЫХ И ГЛАВНОГО ЛОГО
// ----АНИМАЦИЯ И АКТИВНОСТЬ ВСЕХ БОКОВЫХ И ГЛАВНОГО ЛОГО

//НАЧАЛЬНАЯ АНИМАЦИЯ ЛОГО
window.addEventListener("load", goLogo = async function () {
    setTimeout(() => {
        lenght.style.transform = 'translate(-100%)'
    }, 1900)

    await new Promise((resolve) => {
        setTimeout(() => {
            mainLogo.style.transform = 'scale(0.7)'
            resolve()
        }, 500);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            document.querySelector('.tresk1').style.display = 'inline'
            resolve()
        }, 210);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            mainLogo.style.transform = 'scale(0.5)'
            resolve()
        }, 100);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            mainLogo.style.transform = 'scale(1)'
            resolve()
        }, 300);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            document.querySelector('.tresk2').style.display = 'inline'
            resolve()
        }, 200);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            mainLogo.style.transform = 'scale(0.7)'
            resolve()
        }, 50);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            mainLogo.style.transform = 'rotate(5deg) translate(100px) scale(0.7)'
            resolve()
        }, 300);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            mainLogo.style.transform = 'translate(-500px) rotate(-150deg) scale(0.7)'
            resolve()
        }, 300);
    })

    setTimeout(() => {
        mainLogo.style.transform = 'rotate(0deg)'
        mainLogo.style.transform = 'scale(0.5)'
        document.querySelector('.tresk2').style.display = 'none'
        document.querySelector('.tresk1').style.display = 'none'
    }, 550);
    saveCounterNumberSlide = 1
    step = 100
})
//НАЧАЛЬНАЯ АНИМАЦИЯ ЛОГО
//НАЧАЛЬНАЯ АНИМАЦИЯ ЛОГО