import '../scss/style.scss'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { getUserProfile } from './getUserProfile'

const ghToken = import.meta.env.GH_TOKEN
const octokit = new Octokit({ auth: ghToken })
let username

const inputUsername = document.querySelector('#gh-username')
// const searchBtn = document.querySelector('#search-btn')
const searcher = document.querySelector('#searcher')

const handleSearchUser = (query, event) => {
  if (query.length > 0) {
    username = query.replace(/\s/g, '-')
    console.log(username)
    getUserProfile({ event, octokit, username })
  }
}

inputUsername.addEventListener('change', (event) => {
  const inputValue = event.target.value
  handleSearchUser(inputValue, event)
})

inputUsername.addEventListener('focus', (event) => {
  searcher.classList.add('borderColor')
})

inputUsername.addEventListener('blur', (event) => {
  searcher.classList.remove('borderColor')
})
