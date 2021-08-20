import '../css/style.css'
import '../css/attribution.css'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { handleChangeEvent } from './handleChangeEvent'

const ghToken = import.meta.env.VITE_GH_TOKEN
const octokit = new Octokit({ auth: ghToken })

const inputUsername = document.getElementById('gh-username')
inputUsername.addEventListener('change', (event) => {
  handleChangeEvent(event, octokit)
})
