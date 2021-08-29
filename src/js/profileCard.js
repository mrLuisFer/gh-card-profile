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
          <a href="${user?.html_url}" class="card-header-profileName-username"
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
    </div>
  `

  return htmlTemplate
}
