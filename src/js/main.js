import '../scss/style.scss'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { getUserProfile } from './getUserProfile'

const ghToken = import.meta.env.GH_TOKEN
const octokit = new Octokit({ auth: ghToken })
export let username

const inputUsername = document.querySelector('#gh-username')
const logo = document.querySelector('#logo')

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
