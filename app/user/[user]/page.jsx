import User from '../../../components/user'

export default async function UserPage ({ params }) {
  const { user } = params
  const host = 'https://ourspace-api.up.railway.app'

  async function findUser () {
    return await fetch(`${host}/users/find/${user}`).then(res => res.json())
  }
  async function findPosts () {
    return await fetch(`${host}/posts/user/${user}`).then(res => res.json())
  }

  const foundUser = await (await findUser())
  const foundPosts = await (await findPosts())

  return (
    <User foundPosts={foundPosts} foundUser={foundUser} />
  )
}
