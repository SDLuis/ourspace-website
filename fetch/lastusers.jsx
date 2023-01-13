import Suggeration from '../components/suggestion'
const host = 'https://ourspace-api.up.railway.app'

const fetchUsers = () => {
  return fetch(`${host}/users`, { cache: 'no-store' }).then(res => res.json())
}

export default async function LastUsers () {
  const users = await (await fetchUsers())

  return (
    <Suggeration users={users} />
  )
}
