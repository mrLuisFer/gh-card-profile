import '../scss/style.scss'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { getUserProfile } from './getUserProfile'

const ghToken = import.meta.env.GH_TOKEN
const octokit = new Octokit({ auth: ghToken })
let username

const inputUsername = document.querySelector('#gh-username')
const searcherSection = document.querySelector('#searcher')
const logo = document.querySelector('#logo')
const searchBtn = document.querySelector('#search-btn')

logo.addEventListener('click', () => {
  inputUsername.focus()
})

inputUsername.addEventListener('change', (event) => {
  const query = event.target.value
  if (query === username) return

  if (query.length > 0) {
    username = query.replace(/\s/g, '-')
    getUserProfile({ event, octokit, username })
  }
})

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
