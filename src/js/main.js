import '../scss/style.scss'

import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { getUserProfile } from './getUserProfile'

const ghToken = import.meta.env.GH_TOKEN
const octokit = new Octokit({ auth: ghToken })
let username

const inputUsername = document.querySelector('#gh-username')

inputUsername.addEventListener('change', (event) => {
  const inputValue = event.target.value
  username = inputValue.replace(/\s/g, '-')
  getUserProfile({ event, octokit, username })
  console.log(username)
})
