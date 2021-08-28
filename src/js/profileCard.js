export const profileCard = (user) => {
  console.log(user)
  const createdAt = new Date(user.created_at).toDateString()
  const htmlTemplate = /* html */ `
    <section class="card-header">
      <a href="${user.html_url}" target="_blank" rel="noreferrer">
        <img
          class="card-header-avatar"
          draggable="false"
          src="${user.avatar_url}"
          title="${user.name}"
        />
      </a>
      <div class="card-profileName">
        <h2 class="card-profileName-name">${user.name}</h2>
        <a href="${user?.html_url}" class="card-profileName-username">@${user.login}</a>
        <p class="card-profileName-date">Joined ${createdAt}</p>
      </div>
    </section>

    <article class="card-description">
      <p class="card-description-txt">${user.bio}</p>
    </article>

    <section class="card-info">
      <div>
        <p>Repos</p>
        <p>${user.public_repos}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>${user.followers}</p>
      </div>
      <div>
        <p>Following</p>
        <p>${user.following}</p>
      </div>
    </section>

    <section>
      <div>
        <i class="fas fa-map-marker-alt"></i>
        <p>${user.location}</p>
      </div>
      <div>
        <i class="fas fa-link"></i>
        <p>${user.blog}</p>
      </div>
      <div>
        <i class="fab fa-twitter"></i>
        <p>${user.twitter_username}</p>
      </div>
      <div>
        <i class="far fa-building"></i>
        <p>@${user.company}</p>
      </div>
    </section>
  `

  return htmlTemplate
}
