import { username } from './main'
const inputUsername = document.querySelector('#gh-username')
const searcherSection = document.querySelector('#searcher')
const searchBtn = document.querySelector('#search-btn')
const themeToggle = document.querySelector('#theme-toggle')

inputUsername.addEventListener('focus', () => {
  searcherSection.classList.add('borderColor')
})

inputUsername.addEventListener('blur', () => {
  searcherSection.classList.remove('borderColor')
})

searcherSection.addEventListener('click', () => {
  inputUsername.focus()
})

searchBtn.addEventListener('click', (event) => {
  console.log(username)
  if (username === undefined || username.length < 1) {
    inputUsername.focus()
  }
})

themeToggle.addEventListener('click', (event) => {
  document.body.classList.toggle('dark')
  const darkHtmlTemplate = /* html */ `
    <i class="fas fa-moon themeToggle-icon"></i>
    Dark
  `
  const lightHtmlTemplate = /* html */ `
    <i class="fas fa-sun themeToggle-icon"></i>
    Light
  `

  themeToggle.innerHTML = document.body.classList.contains('dark')
    ? darkHtmlTemplate
    : lightHtmlTemplate
})
