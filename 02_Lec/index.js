// console.log("Hello World");

require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 3000

const GitHubAPI = {
  "login": "rupamghosh2006",
  "id": 171418725,
  "node_id": "U_kgDOCjekZQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/171418725?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rupamghosh2006",
  "html_url": "https://github.com/rupamghosh2006",
  "followers_url": "https://api.github.com/users/rupamghosh2006/followers",
  "following_url": "https://api.github.com/users/rupamghosh2006/following{/other_user}",
  "gists_url": "https://api.github.com/users/rupamghosh2006/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rupamghosh2006/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rupamghosh2006/subscriptions",
  "organizations_url": "https://api.github.com/users/rupamghosh2006/orgs",
  "repos_url": "https://api.github.com/users/rupamghosh2006/repos",
  "events_url": "https://api.github.com/users/rupamghosh2006/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rupamghosh2006/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rupam Ghosh",
  "company": null,
  "blog": "",
  "location": "Barasat",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2024-06-01T09:58:46Z",
  "updated_at": "2025-06-25T14:17:26Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req, res) => {
    res.send('Welcome to my channel')
})

app.get('/login', (req, res) => {
    res.send(' <h1>You need to login first</h1>')
})

app.get('/github', (req, res) => {
    res.json(GitHubAPI)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})