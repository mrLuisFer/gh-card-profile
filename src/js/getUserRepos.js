export const getUserRepos = async ({ username, octokit }) => {
  const response = await octokit.request('GET /users/{username}/repos', {
    username: username,
  })

  console.log(response)
}
