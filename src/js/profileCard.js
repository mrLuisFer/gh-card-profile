import '../css/ghCard.css'

export const profileCard = (user) => {
  console.log(user)

  const createdAt = new Date(user.created_at).toDateString()

  const htmlTemplate = /* html */ `
    <div id="${user.id}" class="ghCard">
      <a href="${user.html_url}" target="_blank" rel="noreferrer">
        <img
          class="ghCard__img"
          draggable="false"
          src="${user.avatar_url}"
          title="${user.name}"
        />
      </a>
      <article class="ghCard__content">
        <div>
          <h2 class="ghCard__content-title">${user.login}</h2>
          ${
            user.bio !== null
              ? `
              <div class="ghCard__content-bio">
                <h2>Description:</h2>
                <p>${user.bio}</p>
              </div>
              `
              : ''
          }
        </div>
        <div>
          <h2>
            <i class="fas fa-user-friends"></i>
            Followers:
          </h2>
          <p>${user.followers}</p>
        </div>
        <div>
          <h2>Following:</h2>
          <p>${user.following}</p>
        </div>
        <div>
          <h2>
            <i class="fas fa-map-marker-alt"></i>
            Location:
          </h2>
          <p>${user.location}</p>
        </div>
        <div>
          <h2>
            <i class="fab fa-twitter"></i>
            Twitter:  
          </h2>
          <p>@${user.twitter_username}</p>
        </div>
        <div>
          <h2>
            <i class="fas fa-globe-americas"></i>
            Website:
          </h2>
          <p>
            <a href="${user.blog}" target="_blank" rel="noreferrer">  
              ${user.blog}
            </a>
          </p>
        </div>
        <div>
          <h2>
            <i class="fas fa-calendar-alt"></i>
            Created at:
          </h2>
          <p>${createdAt}</p>
        </div>
        <div>
          <h2>
            <i class="fas fa-code-branch"></i>
            Public Repos:
          </h2>
          <p>${user.public_repos}</p>
        </div>
      </article>
    </div>
  `

  return htmlTemplate
}
