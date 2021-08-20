import '../css/ghCard.css'

export const profileCard = (user) => {
  console.log(user)
  // eslint-disable-next-line no-undef
  const htmlTemplate = /* html */ `
    <div id="${user.id}" class="ghCard">
      <img
        class="ghCard__img"
        draggable="false"
        src="${user.avatar_url}"
        title="${user.name}"
      />
      <article class="ghCard__content">
        <h1 class="ghCard__content-title">${user.login}</h1>
        <div>
          <p class="ghCard__content-desc">${user.bio}</p>
        </div>
      </article>
    </div>
  `

  return htmlTemplate
}
