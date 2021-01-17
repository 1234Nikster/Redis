document.addEventListener('DOMContentLoaded', () => {

    window.nineSection = document.querySelector('.nineSlider')
    let containerDrognDrop = document.querySelector('.eightSlider__middleContainer')
    let containerDrognDropOnTouch = document.querySelector('.eightSlider__middleContainer')
    let buttonStartPrepare = document.querySelector('.buttonEightOne')
    let buttonEndPrepare = document.querySelector('.buttonEightTwo')
    let buttonClearPrepare = document.querySelector('.buttonEightThree')
    let fullTextInLeft = document.querySelector('.eightSlider__containerLeftSide')
    let dishEightSection = document.querySelector('.eightSlider__dish')
    let allTypeProducts = Array.from(document.querySelectorAll('.eightSlider__typeOfProducts'))
    let largeAllTypeProducts = Array.from(document.querySelectorAll('.largeTypeOfProduct'))
    let sausageInDish = Array.from(document.querySelectorAll('.sausageInDish'))
    let cucumberInDish = Array.from(document.querySelectorAll('.cucumberInDish'))
    let potatoInDish = Array.from(document.querySelectorAll('.potatoInDish'))
    let eggsInDish = Array.from(document.querySelectorAll('.eggsInDish'))
    let redisInDish = Array.from(document.querySelectorAll('.redisInDish'))
    let greeneryInDish = Array.from(document.querySelectorAll('.greeneryInDish'))
    let saltInDish = Array.from(document.querySelectorAll('.saltInDish'))
    let milkInDish = Array.from(document.querySelectorAll('.milkInDish'))
    let textYouNeedAdd = document.querySelector('.youNeedAdd')

    buttonStartPrepare.addEventListener('click', () => {
        buttonEndPrepare.classList.add('show')
        buttonClearPrepare.classList.add('show')
        for (let i of allTypeProducts) {
            i.classList.add('active')
        }
        fullTextInLeft.classList.add('noActive')
        dishEightSection.classList.add('active')
        setTimeout(() => {
            fullTextInLeft.style.display = 'none'
            if (document.body.offsetWidth >= 1200 && document.body.offsetHeight <= 778) {
                dishEightSection.style.transform = 'translate(0%, -20%)'
            } else {
                dishEightSection.style.transform = 'translate(0%, 0%)'
            }

            dishEightSection.style.margin = '0 auto'
            dishEightSection.style.transition = '0s'
        }, 2000);
    })

    // драгн-дроп
    allTypeProducts.forEach((element, index) => {
        element.onmousedown = function (event) {

            let shiftX = event.clientX - element.getBoundingClientRect().left;
            let shiftY = event.clientY - element.getBoundingClientRect().top;

            document.body.append(element);

            moveAt(event.pageX, event.pageY);

            // переносит мяч на координаты (pageX, pageY),
            // дополнительно учитывая изначальный сдвиг относительно указателя мыши
            function moveAt(pageX, pageY) {
                element.style.transform = 'translate(' + (pageX - shiftX) + 'px,' + (pageY - shiftY) + 'px)';
            }
            let elemBelow

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
                element.hidden = true;
                elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                element.hidden = false;
            }

            // передвигаем мяч при событии mousemove
            document.addEventListener('mousemove', onMouseMove);

            // отпустить мяч, удалить ненужные обработчики
            element.onmouseup = function () {
                if (elemBelow == undefined) {
                    element.style.transform = ''
                    containerDrognDrop.append(element);
                    document.removeEventListener('mousemove', onMouseMove);
                    element.onmouseup = null;
                    return
                }
                if (elemBelow.closest('.eightSlider__dish')) {
                    for (let i of sausageInDish) {
                        if (i.classList.contains('active') && element.classList.contains('sausage')) {
                            document.querySelector('.forSausage').classList.add('active')
                            setTimeout(() => {
                                document.querySelector('.forSausage').style.display = 'none'
                                document.querySelector('.forSausage').classList.remove('active')
                                setTimeout(() => {
                                    document.querySelector('.forSausage').style.display = 'block'

                                }, 100)
                            }, 2000)
                            containerDrognDrop.append(element);
                            element.style.transform = '';
                            document.removeEventListener('mousemove', onMouseMove);
                            element.onmouseup = null;
                            return
                        }
                    }

                    for (let i of cucumberInDish) {
                        if (i.classList.contains('active') && element.classList.contains('cucumber')) {
                            document.querySelector('.forCucumber').classList.add('active')
                            setTimeout(() => {
                                document.querySelector('.forCucumber').style.display = 'none'
                                document.querySelector('.forCucumber').classList.remove('active')
                                setTimeout(() => {
                                    document.querySelector('.forCucumber').style.display = 'block'

                                }, 100)
                            }, 2000)
                            containerDrognDrop.append(element);
                            element.style.transform = '';
                            document.removeEventListener('mousemove', onMouseMove);
                            element.onmouseup = null;
                            return
                        }
                    }

                    for (let i of potatoInDish) {
                        if (i.classList.contains('active') && element.classList.contains('potato')) {
                            document.querySelector('.forPotato').classList.add('active')
                            setTimeout(() => {
                                document.querySelector('.forPotato').style.display = 'none'
                                document.querySelector('.forPotato').classList.remove('active')
                                setTimeout(() => {
                                    document.querySelector('.forPotato').style.display = 'block'

                                }, 100)
                            }, 2000)
                            containerDrognDrop.append(element);
                            element.style.transform = '';
                            document.removeEventListener('mousemove', onMouseMove);
                            element.onmouseup = null;
                            return
                        }
                    }

                    element.style.transition = '0s'
                    element.style.opacity = '0'
                    element.style.pointerEvents = 'none'
                    element.style.transform = ''
                    largeAllTypeProducts[index].classList.add('active')
                    buttonClearPrepare.classList.add('active')

                    // если все ингредиенты помещены в тарелку, то кнопко активна
                    for (let i of sausageInDish) {
                        if (i.classList.contains('active')) {
                            for (let q of cucumberInDish) {
                                if (q.classList.contains('active')) {
                                    for (let w of potatoInDish) {
                                        if (w.classList.contains('active')) {
                                            for (let e of eggsInDish) {
                                                if (e.classList.contains('active')) {
                                                    for (let r of redisInDish) {
                                                        if (r.classList.contains('active')) {
                                                            for (let t of greeneryInDish) {
                                                                if (t.classList.contains('active')) {
                                                                    for (let y of saltInDish) {
                                                                        if (y.classList.contains('active')) {
                                                                            for (let u of milkInDish) {
                                                                                if (u.classList.contains('active')) {
                                                                                    buttonEndPrepare.classList.add('active')
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // если все ингредиенты помещены в тарелку, то кнопко "Приготовить" активна
                    // если все ингредиенты помещены в тарелку, то кнопко "Приготовить" активна

                    document.removeEventListener('mousemove', onMouseMove);
                    element.onmouseup = null;
                    return
                }

                element.style.transform = ''
                containerDrognDrop.append(element);
                document.removeEventListener('mousemove', onMouseMove);
                element.onmouseup = null;
                return
            };
        };

        element.ondragstart = function () {
            return false;
        };


    })
    // драгн-дроп
    // драгн-дроп

    buttonEndPrepare.addEventListener('click', () => {

        for (let i of sausageInDish) {
            if (i.classList.contains('active') == false) {
                sausageId.style.display = 'inline'

            } else {
                sausageId.style.display = 'none'
                break
            }
        }
        for (let i of cucumberInDish) {
            if (i.classList.contains('active') == false) {
                cucumberId.style.display = 'inline'
            } else {
                cucumberId.style.display = 'none'
                break
            }
        }
        for (let i of potatoInDish) {
            if (i.classList.contains('active') == false) {
                potatoId.style.display = 'inline'
            } else {
                potatoId.style.display = 'none'
                break
            }
        }
        for (let i of eggsInDish) {
            if (i.classList.contains('active') == false) {
                eggsId.style.display = 'inline'
            } else {
                eggsId.style.display = 'none'
                break
            }
        }
        for (let i of redisInDish) {
            if (i.classList.contains('active') == false) {
                redisId.style.display = 'inline'
            } else {
                redisId.style.display = 'none'
                break
            }
        }
        for (let i of greeneryInDish) {
            if (i.classList.contains('active') == false) {
                greeneryId.style.display = 'inline'
            } else {
                greeneryId.style.display = 'none'
                break
            }
        }
        for (let i of saltInDish) {
            if (i.classList.contains('active') == false) {
                saltId.style.display = 'inline'
            } else {
                saltId.style.display = 'none'
                break
            }
        }
        for (let i of milkInDish) {
            if (i.classList.contains('active') == false) {
                milkId.style.display = 'inline'
            } else {
                milkId.style.display = 'none'
                break
            }
        }

        if (buttonEndPrepare.classList.contains('active') == false) {
            textYouNeedAdd.classList.add('active')
            setTimeout(() => {
                textYouNeedAdd.classList.remove('active')
            }, 2500)
        }

        if (buttonEndPrepare.classList.contains('active')) {
            nineSection.classList.add('active')
            saveCounterNumberSlide++
            window.step += 100
            window.lenght.style.transform = `translate(-${window.step}%)`;
        }

    })

    buttonClearPrepare.addEventListener('click', () => {
        nineSection.classList.remove('active')
        buttonEndPrepare.classList.remove('active')
        buttonClearPrepare.classList.remove('active')

        for (let i of largeAllTypeProducts) {
            i.classList.remove('active')
        }

        for (let i of allTypeProducts) {
            containerDrognDrop.append(i);
            i.style.opacity = '1'
            i.style.pointerEvents = 'all'
            i.style.transform = ''
        }

    })


    // ------------ тач драгн дроп
    allTypeProducts.forEach((element, index) => {
        element.ontouchstart = function (event) {

            let shiftX = event.targetTouches[0].clientX - element.getBoundingClientRect().left;
            let shiftY = event.targetTouches[0].clientY - element.getBoundingClientRect().top;

            document.body.append(element);

            moveAt(event.targetTouches[0].pageX, event.targetTouches[0].pageY);

            // переносит мяч на координаты (pageX, pageY),
            // дополнительно учитывая изначальный сдвиг относительно указателя мыши
            function moveAt(pageX, pageY) {
                element.style.transform = 'translate(' + (pageX - shiftX) + 'px,' + (pageY - shiftY) + 'px)';
            }
            let elemBelo

            function onMouseMove(event) {
                moveAt(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
                element.hidden = true;
                elemBelo = document.elementFromPoint(event.targetTouches[0].clientX, event.targetTouches[0].clientY);
                element.hidden = false;
            }

            // передвигаем мяч при событии mousemove
            document.addEventListener('touchmove', onMouseMove);

            // отпустить мяч, удалить ненужные обработчики
            element.ontouchend = function () {
                if (elemBelo == undefined) {
                    element.style.transform = ''
                    containerDrognDrop.append(element);
                    document.removeEventListener('touchmove', onMouseMove);
                    element.ontouchend = null;
                    return
                }
                if (elemBelo.closest('.eightSlider__dish')) {
                    for (let i of sausageInDish) {
                        if (i.classList.contains('active') && element.classList.contains('sausage')) {
                            document.querySelector('.forSausage').classList.add('active')
                            setTimeout(() => {
                                document.querySelector('.forSausage').style.display = 'none'
                                document.querySelector('.forSausage').classList.remove('active')
                                setTimeout(() => {
                                    document.querySelector('.forSausage').style.display = 'block'

                                }, 100)
                            }, 2000)
                            containerDrognDrop.append(element);
                            element.style.transform = '';
                            document.removeEventListener('touchmove', onMouseMove);
                            element.ontouchend = null;
                            return
                        }
                    }

                    for (let i of cucumberInDish) {
                        if (i.classList.contains('active') && element.classList.contains('cucumber')) {
                            document.querySelector('.forCucumber').classList.add('active')
                            setTimeout(() => {
                                document.querySelector('.forCucumber').style.display = 'none'
                                document.querySelector('.forCucumber').classList.remove('active')
                                setTimeout(() => {
                                    document.querySelector('.forCucumber').style.display = 'block'

                                }, 100)
                            }, 2000)
                            containerDrognDrop.append(element);
                            element.style.transform = '';
                            document.removeEventListener('touchmove', onMouseMove);
                            element.ontouchend = null;
                            return
                        }
                    }

                    for (let i of potatoInDish) {
                        if (i.classList.contains('active') && element.classList.contains('potato')) {
                            document.querySelector('.forPotato').classList.add('active')
                            setTimeout(() => {
                                document.querySelector('.forPotato').style.display = 'none'
                                document.querySelector('.forPotato').classList.remove('active')
                                setTimeout(() => {
                                    document.querySelector('.forPotato').style.display = 'block'

                                }, 100)
                            }, 2000)
                            containerDrognDrop.append(element);
                            element.style.transform = '';
                            document.removeEventListener('touchmove', onMouseMove);
                            element.ontouchend = null;
                            return
                        }
                    }

                    element.style.transition = '0s'
                    element.style.opacity = '0'
                    element.style.pointerEvents = 'none'
                    element.style.transform = ''
                    largeAllTypeProducts[index].classList.add('active')
                    buttonClearPrepare.classList.add('active')

                    // если все ингредиенты помещены в тарелку, то кнопко активна
                    for (let i of sausageInDish) {
                        if (i.classList.contains('active')) {
                            for (let q of cucumberInDish) {
                                if (q.classList.contains('active')) {
                                    for (let w of potatoInDish) {
                                        if (w.classList.contains('active')) {
                                            for (let e of eggsInDish) {
                                                if (e.classList.contains('active')) {
                                                    for (let r of redisInDish) {
                                                        if (r.classList.contains('active')) {
                                                            for (let t of greeneryInDish) {
                                                                if (t.classList.contains('active')) {
                                                                    for (let y of saltInDish) {
                                                                        if (y.classList.contains('active')) {
                                                                            for (let u of milkInDish) {
                                                                                if (u.classList.contains('active')) {
                                                                                    buttonEndPrepare.classList.add('active')
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // если все ингредиенты помещены в тарелку, то кнопко "Приготовить" активна
                    // если все ингредиенты помещены в тарелку, то кнопко "Приготовить" активна

                    document.removeEventListener('touchmove', onMouseMove);
                    element.ontouchend = null;
                    return
                }
                element.style.transform = ''
                containerDrognDrop.append(element);
                document.removeEventListener('touchmove', onMouseMove);
                element.ontouchend = null;
                return
            };
        };

        element.ondragstart = function () {
            return false;
        };
    })
    // ------------ тач драгн дроп
    // ------------ тач драгн дроп
})