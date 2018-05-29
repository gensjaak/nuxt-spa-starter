export const navigate = (activity, path) => {
  activity.$router.push({ path: path })
}

export const next = (activity, fallbackPath) => {
  activity.$router.push({ path: activity.$router.currentRoute.query.next || fallbackPath })
}

export const setFocus = htmlEltName => {
  setTimeout(() => {
    let field = document.getElementsByName(htmlEltName)[0]

    field.focus()
    field.select()
  }, 100)
}

export const toArray = (obj) => {
  return Object.keys(obj).map(key => {
    return obj[key]
  })
}
