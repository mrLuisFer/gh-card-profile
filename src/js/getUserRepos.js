const reposSection = document.querySelector('#repos')

export const getUserRepos = async ({ username, octokit }) => {
  const response = await octokit.request('GET /users/{username}/repos', {
    username: username,
  })
  console.log(response)

  if (response?.status === 200 && response !== undefined) {
    const data = response.data
    const htmlInserted = /* html */ `
      <h1>${username} has ${data.length} repositories</h1>
      <p>Some text</p>
      ${data.map(
        (repo) =>
          `
          <div class="repo" id="${repo.id}">
            <h1>${repo.name}</h1>
          </div>
          `
      )}
    `
    reposSection.innerHTML = htmlInserted
  }
}
