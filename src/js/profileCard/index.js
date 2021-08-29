export const profileCard = (user) => {
  console.log(user)
  const createdAt = new Date(user.created_at).toDateString()
  const htmlTemplate = /* html */ `
    <div class="card">
      <section class="card-header">
        <a href="${user.html_url}" target="_blank" rel="noreferrer">
          <img
            class="card-header-avatar"
            draggable="false"
            src="${user.avatar_url}"
            title="${user.name}"
            loading="lazy"
          />
        </a>
        <div class="card-header-profileName">
          <h2 class="card-header-profileName-name">${user.name}</h2>
          <a
            href="${user?.html_url}"
            class="card-header-profileName-username"
            target="_blank"
            rel="noreferrer"
            >@${user.login}</a
          >
          <p class="card-header-profileName-date">Joined ${createdAt}</p>
        </div>
      </section>
      <article class="card-description">
        <p class="card-description-txt">${user.bio}</p>
      </article>
      <section class="card-social">
        <div>
          <p>
            Repos
            <span> ${user.public_repos} </span>
          </p>
        </div>
        <div>
          <p>
            Followers
            <span> ${user.followers} </span>
          </p>
        </div>
        <div>
          <p>
            Following
            <span> ${user.following} </span>
          </p>
        </div>
      </section>
      <section class="card-info">
        <div>
          <i class="fas fa-map-marker-alt"></i>
          <p>${user.location}</p>
        </div>
        <div>
          <i class="fas fa-link"></i>
          <p>
            <a href="${user.blog}" target="_blank" rel="noreferrer">
              ${user.blog}
            </a>
          </p>
        </div>
        <div>
          <i class="fab fa-twitter"></i>
          <a
            href="https://twitter.com/${user.twitter_username}"
            target="_blank"
            rel="noreferrer"
          >
            <p>@${user.twitter_username}</p>
          </a>
        </div>
        <div>
          <i class="far fa-building"></i>
          <p>@${user.company}</p>
        </div>
      </section>
    </div>
  `

  return htmlTemplate
}
