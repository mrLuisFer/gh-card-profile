import { profileCard } from './profileCard.js'

const content = document.getElementById('content')

export const handleChangeEvent = async (event, octokit) => {
  const inputValue = event.target.value
  const username = inputValue.replace(/\s/g, '-')

  const response = await octokit.request('GET /users/{username}', {
    username: username,
  })
  if (response.status === 200) {
    const user = response.data

    content.innerHTML = profileCard(user)
  }

  event.target.value = ''
}
