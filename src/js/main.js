import '../css/style.css'
import '../css/attribution.css'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { getUserProfile } from './getUserProfile'
import { getUserRepos } from './getUserRepos.js'

const ghToken = import.meta.env.GH_TOKEN
const octokit = new Octokit({ auth: ghToken })
let username

const inputUsername = document.getElementById('gh-username')
const reposSection = document.querySelector('#repos')
const showRepos = document.querySelector('#show-repos')

inputUsername.addEventListener('change', (event) => {
  const inputValue = event.target.value
  username = inputValue.replace(/\s/g, '-')
  getUserProfile({ event, octokit, username })
  if (username?.length > 0) {
    reposSection.style.display = 'block'
  }
})

showRepos.addEventListener('click', () => {
  getUserRepos({ username, octokit })
})
