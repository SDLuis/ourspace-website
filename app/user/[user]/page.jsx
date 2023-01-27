import User from '../../../components/user'

export default async function UserPage ({ params }) {
  const { user } = params
  const host = 'https://ourspace-api-hw4y.onrender.com'

  async function findUser () {
    return await fetch(`${host}/users/find/maria`).then(res => res.json())
  }
  async function findPosts () {
    return await fetch(`${host}/posts/user/maria`).then(res => res.json())
  }

  const foundUser = await (await findUser())
  const foundPosts = await (await findPosts(user))

  return (
    <User foundPosts={foundPosts} foundUser={foundUser} />
  )
}
