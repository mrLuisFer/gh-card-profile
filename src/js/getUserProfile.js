import { profileCard } from './profileCard'

const content = document.querySelector('#content')
const errorMsgSection = document.querySelector('#errorMsg')

export const getUserProfile = async ({ event, octokit, username }) => {
  try {
    const response = await octokit.request('GET /users/{username}', {
      username,
    })
    if (response.status === 200 && response !== undefined) {
      const user = response.data

      content.innerHTML = profileCard(user)
    } else {
      console.log('En error')
    }
    event.target.value = ''
  } catch (error) {
    console.log(error)
    errorMsgSection.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    setTimeout(() => {
      document.body.style.overflow = 'auto'
      errorMsgSection.style.display = 'none'
    }, 2000)
  }
}
