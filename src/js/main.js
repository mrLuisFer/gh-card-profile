import '../css/style.css'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core'
import { handleChangeEvent } from './handleChangeEvent'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslintPlugin()],
})

const ghToken = import.meta.env.VITE_GH_TOKEN
const octokit = new Octokit({ auth: ghToken })

const inputUsername = document.getElementById('gh-username')

inputUsername.addEventListener('change', (event) => {
  handleChangeEvent(event, octokit)
})
