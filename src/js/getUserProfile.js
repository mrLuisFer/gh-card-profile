import { profileCard } from './profileCard.js'

const content = document.getElementById('content')
const reposSection = document.querySelector('#repos')

export const getUserProfile = async ({ event, octokit, username }) => {
  const response = await octokit.request('GET /users/{username}', {
    username: username,
  })
  if (response.status === 200 && response !== undefined) {
    const user = response.data

    content.innerHTML = profileCard(user)
    if (username?.length > 0) {
      reposSection.style.display = 'block'
    }
  } else {
    console.info('En error')
  }

  event.target.value = ''
}
