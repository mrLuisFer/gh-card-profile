import '../scss/style.scss'
import './themeToggle'
import './eventListeners'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { getUserProfile } from './getUserProfile'

const ghToken = import.meta.env.GH_TOKEN
const octokit = new Octokit({ auth: ghToken })
export let username

const inputUsername = document.querySelector('#gh-username')

inputUsername.addEventListener('change', (event) => {
  const query = event.target.value
  if (query === username) return

  if (query.length > 0) {
    username = query.replace(/\s/g, '-')
    getUserProfile({ event, octokit, username })
  }
})

window.addEventListener('load', () => {
  const location = window.location
  const pathUrl = location.pathname.toString()

  // This should be redirect to the profile page
  if (pathUrl !== '/') {
    location.href = '/'
  }
})
