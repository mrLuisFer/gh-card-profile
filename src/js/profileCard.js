import '../css/ghCard.css'

export const profileCard = (user) => {
  console.log(user)

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
        <h1 class="ghCard__content-title">${user.login}</h1>
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
      </article>
    </div>
  `

  return htmlTemplate
}
