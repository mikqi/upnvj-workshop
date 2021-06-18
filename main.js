const btnSearch = document.getElementById('btn-search')
const app = document.getElementById('app')

btnSearch.addEventListener('click', async (ev) => {
  const formUsername = document.getElementById('username')

  const res = await fetch(`https://api.github.com/users/${formUsername.value}`)
  const data = await res.json()

  app.innerText = JSON.stringify(data, null, 2)
})
