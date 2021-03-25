
let apiUrl
const apiUrls = {
  // replace with heroku later on
  production: 'http://localhost:4741',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
