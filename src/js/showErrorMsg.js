const errorMsgSection = document.querySelector('#errorMsg')

export const showErrorMsg = () => {
  errorMsgSection.style.display = 'flex'
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    document.body.style.overflow = 'auto'
    errorMsgSection.style.display = 'none'
  }, 2000)
}
