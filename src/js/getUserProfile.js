import { profileCard } from './profileCardTemplate'
import { showErrorMsg } from './showErrorMsg'

const content = document.querySelector('#content')

export const getUserProfile = async ({ event, octokit, username }) => {
  try {
    const response = await octokit.request('GET /users/{username}', {
      username,
    })
    if (response.status === 200 && response !== undefined) {
      const user = response.data

      content.innerHTML = profileCard(user)
    } else {
      showErrorMsg()
    }
    event.target.value = ''
  } catch (error) {
    showErrorMsg()
  }
}
