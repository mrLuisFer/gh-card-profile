const themeToggle = document.querySelector('#theme-toggle')

const light = 'light'
const dark = 'dark'

const darkHtmlTemplate = /* html */ `
    <i class="fas fa-moon themeToggle-icon"></i>
    Dark
  `
const lightHtmlTemplate = /* html */ `
    <i class="fas fa-sun themeToggle-icon"></i>
    Light
  `

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle(light)
  const bodyContainsLight = document.body.classList.contains(light)

  if (bodyContainsLight) {
    localStorage.setItem('theme', light)
  } else {
    localStorage.setItem('theme', dark)
  }

  themeToggle.innerHTML = bodyContainsLight
    ? darkHtmlTemplate
    : lightHtmlTemplate
})

function checkTheme() {
  const localStorageTheme = localStorage.getItem('theme')

  if (localStorageTheme === light) {
    document.body.classList.add(light)
    themeToggle.innerHTML = darkHtmlTemplate
  } else {
    document.body.classList.replace(light, dark)
    themeToggle.innerHTML = lightHtmlTemplate
  }
}

window.onload = checkTheme()
