import { username } from './main'
const inputUsername = document.querySelector('#gh-username')
const searcherSection = document.querySelector('#searcher')
const searchBtn = document.querySelector('#search-btn')

inputUsername.addEventListener('focus', () => {
  searcherSection.classList.add('borderColor')
})

inputUsername.addEventListener('blur', () => {
  searcherSection.classList.remove('borderColor')
})

searchBtn.addEventListener('click', (event) => {
  console.log(username)
  if (username === undefined || username.length < 1) {
    inputUsername.focus()
  }
})
