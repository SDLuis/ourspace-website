import Posts from '../components/posts'

const host = 'https://ourspace-api.up.railway.app'

const fetchPosts = () => {
  return fetch(`${host}/posts`, { cache: 'no-store' }).then(res => res.json())
}

export default async function RenderPosts () {
  const posts = await (await fetchPosts())

  return (
    <Posts posts={posts} />
  )
}
