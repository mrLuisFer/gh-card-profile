export const profileCard = (user) => {
  const createdAt = new Date(user.created_at).toDateString()
  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    html_url,
    location,
    login,
    name,
    public_repos,
    twitter_username,
  } = user

  const htmlTemplate = /* html */ `
    <div class="card">
      <section class="card-header">
        <a href="${html_url}" target="_blank" rel="noreferrer">
          <img
            class="card-header-avatar"
            draggable="false"
            src="${avatar_url}"
            title="${name}"
            loading="lazy"
          />
        </a>
        <div class="card-header-profileName">
          <h2 class="card-header-profileName-name">${name}</h2>
          <a
            href="${html_url}"
            class="card-header-profileName-username"
            target="_blank"
            rel="noreferrer"
            >@${login}</a
          >
          <p class="card-header-profileName-date">Joined ${createdAt}</p>
        </div>
      </section>
      ${
        bio === null
          ? ``
          : `
            <article class="card-description">
              <p class="card-description-txt">${bio}</p>
            </article>
          `
      }
      
      <section class="card-social">
        <div>
          <p>
            Repos
            <span> ${public_repos} </span>
          </p>
        </div>
        <div>
          <p>
            Followers
            <span> ${followers} </span>
          </p>
        </div>
        <div>
          <p>
            Following
            <span> ${following} </span>
          </p>
        </div>
      </section>
      <section class="card-info">
        <div>
          <i class="fas fa-map-marker-alt"></i>
          <p>${location}</p>
        </div>
        <div>
          <i class="fas fa-link"></i>
          <p>
            <a href="${blog}" target="_blank" rel="noreferrer">
              ${blog}
            </a>
          </p>
        </div>
        <div>
          <i class="fab fa-twitter"></i>
          <a
            href="https://twitter.com/${twitter_username}"
            target="_blank"
            rel="noreferrer"
          >
            <p>@${twitter_username}</p>
          </a>
        </div>
        <div>
          <i class="far fa-building"></i>
          <p>@${company}</p>
        </div>
      </section>
    </div>
  `

  return htmlTemplate
}
