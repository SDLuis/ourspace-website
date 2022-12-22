import axios from 'axios'
import User from '../../../components/user'

export default async function UserPage ({ params }) {
  const { user } = params
  const host = 'http://localhost:5000'

  async function findUser () {
    return await axios.get(`${host}/users/find/${user}`, { next: { revalidate: 10 } })
  }
  async function findPosts () {
    return await axios.get(`${host}/posts/user/${user}`, { next: { revalidate: 10 } })
  }

  const foundUser = await (await findUser()).data
  const foundPosts = await (await findPosts(user)).data

  return (
    <User foundPosts={foundPosts} foundUser={foundUser} />
  )
}
