const destroySession = () => {
  sessionStorage.clear()

  const cookies = document.cookie.split(';')

  cookies.forEach((cookie) => {
    const equal = cookie.indexOf('=')
    const name = equal > -1 ? cookie.substring(0, equal) : cookie
    document.cookie = name + `=;expires=${import.meta.env.VITE_COOKIE_EXPIRY_DATE}`
  })
}

export { destroySession }
