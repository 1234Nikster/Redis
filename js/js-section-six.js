'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let everyTypeDish = Array.from(document.querySelectorAll(".sixSlider__typeDish"))
    let previous
    let previousIndex
    let buttonSix = document.querySelector('.buttonSix')
    window.sevenSection = document.querySelector('.sevenSlider')
    let allContainersSlidersSevenSection = Array.from(document.querySelectorAll('.sevenSlider__middleContainer'))

    everyTypeDish.forEach((element, index) => {
        element.addEventListener('click', () => {

            if (element.classList.contains('active')) {
                element.classList.remove('active')
                buttonSix.classList.remove('active')
                sevenSection.classList.remove('active')
                return
            }
            if (previous) {
                previous.classList.remove('active')
                allContainersSlidersSevenSection[previousIndex].classList.remove('active')
            }
            element.classList.add('active')
            buttonSix.classList.add('active')
            previous = element
            previousIndex = index
            allContainersSlidersSevenSection[index].classList.add('active')
            for(let i of window.sevenEverySlide){
                i.style.transform = `translate(0%)`
            }
            sevenCounterInSlider = 0
            saveCounterNumberSlideSevenSection = 0
        })

        element.addEventListener('mousedown', (event) => {
            event.preventDefault()
        })

        buttonSix.addEventListener('click', () => {
            if (element.classList.contains('active')) {
                sevenSection.classList.add('active')
            }
            if (buttonSix.classList.contains('active')) {
                saveCounterNumberSlide = 6
                step = 600
                lenght.style.transform = `translate(-${window.step}%)`;
            }
        })

    })
})