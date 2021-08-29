import { profileCard } from './profileCard'

const content = document.querySelector('#content')

export const getUserProfile = async ({ event, octokit, username }) => {
  const response = await octokit.request('GET /users/{username}', {
    username: username,
  })
  if (response.status === 200 && response !== undefined) {
    const user = response.data

    content.innerHTML = profileCard(user)
  } else {
    console.info('En error')
  }

  event.target.value = ''
}
