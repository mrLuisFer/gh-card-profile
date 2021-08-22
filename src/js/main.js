import '../css/style.css'
import '../css/attribution.css'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { getUserProfile } from './getUserProfile'
import { getUserRepos } from './getUserRepos.js'

const ghToken = import.meta.env.GH_TOKEN
const octokit = new Octokit({ auth: ghToken })
let username

const inputUsername = document.getElementById('gh-username')
const showRepos = document.querySelector('#show-repos')

inputUsername.addEventListener('change', (event) => {
  const inputValue = event.target.value
  username = inputValue.replace(/\s/g, '-')
  getUserProfile({ event, octokit, username })
})

showRepos.addEventListener('click', () => {
  getUserRepos({ username, octokit })
})
