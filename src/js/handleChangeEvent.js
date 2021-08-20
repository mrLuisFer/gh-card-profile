import { profileCard } from './profileCard.js'

const content = document.getElementById('content')

export const handleChangeEvent = async (event, octokit) => {
  let user

  const username = event.target.value
  const response = await octokit.request('GET /users/{username}', {
    username: username,
  })
  if (response.status === 200) {
    user = response.data

    content.innerHTML = profileCard(user)
  }

  event.target.value = ''
}
