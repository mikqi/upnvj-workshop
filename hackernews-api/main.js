// https://api.hnpwa.com/v0
// https://api.hnpwa.com/v0/news/1.json

const fetchNewsData = async function () {
  const res = await fetch('https://api.hnpwa.com/v0/news/1.json')
  return await res.json()
}

const listTemplate = (news) => `
  <div class="news-item">
    <div class="score">${news.points}</div>
    <div class="title">
      <a href="${news.url}">${news.title}</a>
      <span class="host">${news.domain}</span>
    </div>
    <div class="meta">
      <span class="by">
        by <a href="">${news.user}</a>
      </span>
      <span class="time">${news.time_ago}</span>
      <span class="comments-link">| <a href="">comments: ${news.comments_count}</a></span>
    </div>
  </div>
`

window.addEventListener('DOMContentLoaded', async () => {
  const newsContainer = document.getElementById('news-container')
  const newsData = await fetchNewsData()
  
  const newsList = newsData.map(listTemplate)
  newsContainer.innerHTML = newsList.join('')
})
