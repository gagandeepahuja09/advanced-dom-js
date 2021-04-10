'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
};

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
});

const header = document.querySelector('.header')

const message = document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'


// append, prepend, before, after
// prepend ==> first child element
// append ==> last child element
// before ==> just before the element as sibling
// after ==> just before the element as sibling
header.append(message)


// Styles, attributes and classes

// Styles
// style property uses inline styles
// message.style.backgroundColor = '#eee'
// message.style.width = '120%'
message.style.height = `${parseInt(getComputedStyle(message).height) + 30}px`

document.documentElement.style.setProperty('--color-primary', 'orangered')


// Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src, logo.getAttribute('src'))
console.log(logo.className)

// Non - standard attribute
console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'Bankist')

// Data Attributes
console.log(logo.dataSet.versionNumber)

// Classes
logo.classList.add('c', 'j', 'a', 'v')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c') // contains and not includes

// Don't use this as it will override all the existing classes and we can only pass one class
// logo.className = 'jonas'