import { profileCard } from './profileCard.js'

const content = document.getElementById('content')

export const getUserProfile = async ({ event, octokit, username }) => {
  const response = await octokit.request('GET /users/{username}', {
    username: username,
  })
  if (response.status === 200) {
    const user = response.data

    content.innerHTML = profileCard(user)
  }

  event.target.value = ''
}
