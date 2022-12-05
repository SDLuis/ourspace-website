/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Posts from '../components/posts'

const host = 'https://ourspace-api.up.railway.app'

async function fetchPosts () {
  return await axios.get(`${host}/posts`, { next: { revalidate: 10 } })
}

export default async function RenderPosts () {
  const posts = await (await fetchPosts()).data

  return (
    <Posts posts={posts} />
  )
}
