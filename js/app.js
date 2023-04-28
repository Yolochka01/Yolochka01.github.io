const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
  })
}

board.innerHTML += `<button class='btnback'><a href='/index.html'>Назад</a></button>`

function clearActiveClasses () {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}