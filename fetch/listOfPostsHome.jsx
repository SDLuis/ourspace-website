import PostsList from '../components/PostsList'
const host = 'https://ourspace-api.up.railway.app'

const fetchPosts = () => {
  return fetch(`${host}/posts`, { cache: 'no-store' }).then(res => res.json())
}

export default async function RenderPosts () {
  const posts = await (await fetchPosts())

  return (
    <PostsList prevPosts={posts} />
  )
}
