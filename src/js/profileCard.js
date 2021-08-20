export const profileCard = (user) => {
  console.log(user)
  const html = `
  <div id=${user.id}>
    <img src=${user.avatar_url} />
    <div>
      <h1>${user.login}</h1>
    </div>
  </div>
  `

  return html
}
