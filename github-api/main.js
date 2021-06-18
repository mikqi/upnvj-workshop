const btnSearch = document.getElementById('btn-search')
const app = document.getElementById('app')
let isFetch = false

const cardAvatar = document.getElementById('card-avatar')
const cardUsername = document.getElementById('card-username')
const cardDetail = document.getElementById('card-detail')
const cardProfileUrl = document.getElementById('card-profile-url')

btnSearch.addEventListener('click', async (ev) => {
  const formUsername = document.getElementById('username')

  // fetch(`https://api.github.com/users/${formUsername.value}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     app.innerText = JSON.stringify(data, null, 2)
  //   })

  const res = await fetch(`https://api.github.com/users/${formUsername.value}`)
  const data = await res.json()

  cardUsername.innerHTML = `${data.name} (<em>${data.login}</em>)`
  cardDetail.innerText = data.bio
  cardAvatar.src = data.avatar_url
  cardProfileUrl.href = data.html_url

  // app.innerText = JSON.stringify(data, null, 2)
})
