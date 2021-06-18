// https://api.hnpwa.com/v0
// https://api.hnpwa.com/v0/news/1.json

const fetchNewsData = async function () {
  const res = await fetch('https://api.hnpwa.com/v0/news/1.json')
  return await res.json()
}

// const listTemplate = (news) => `
//   <div class="news-item">
//     <div class="score">${news.points}</div>
//     <div class="title">
//       <a href="${news.url}">${news.title}</a>
//       <span class="host">${news.domain}</span>
//     </div>
//     <div class="meta">
//       <span class="by">
//         by <a href="">${news.user}</a>
//       </span>
//       <span class="time">${news.time_ago}</span>
//       <span class="comments-link">| <a href="">comments: ${news.comments_count}</a></span>
//     </div>
//   </div>
// `

// APPEND + CREATE ELEMENT
const listTemplate = (news) => {
  const newsItem = document.createElement('div')
  newsItem.classList.add('news-item')
  
  const score = document.createElement('div')
  score.classList.add('score')
  score.append(news.points || 0)

  // TITLE WRAPPER
  const newsTitle = document.createElement('a')
  newsTitle.href = news.url
  newsTitle.append(news.title + ' ')

  const newsDomain = document.createElement('span')
  newsDomain.classList.add('host')
  newsDomain.append(news.domain)

  const titleContainer = document.createElement('div')
  titleContainer.classList.add('title')
  titleContainer.append(newsTitle, newsDomain)

  // META WRAPPER
  const metaUser = document.createElement('a')
  metaUser.append(news.user)

  const metaBy = document.createElement('span')
  metaBy.classList.add('by')
  metaBy.append('by ', metaUser)

  const metaTimeAgo = document.createElement('span')
  metaTimeAgo.classList.add('time')
  metaTimeAgo.append(news.time_ago)

  const metaCommentsLink = document.createElement('a')
  metaCommentsLink.classList.add('comments-link')
  metaCommentsLink.append('comments: ', news.comments_count)

  const metaContainer = document.createElement('div')
  metaContainer.classList.add('meta')
  metaContainer.append(metaBy, metaTimeAgo, metaCommentsLink)

  newsItem.append(score, titleContainer, metaContainer)
  return newsItem
}

window.addEventListener('DOMContentLoaded', async () => {
  const newsContainer = document.getElementById('news-container')
  const newsData = await fetchNewsData()
  
  const newsList = newsData.map(listTemplate)
  // newsContainer.innerHTML = newsList.join('')
  newsContainer.append(...newsList)
})
