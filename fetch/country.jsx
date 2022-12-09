import Addpost from '../components/addpost'

const host = 'https://country-api.up.railway.app'

const fetchCountries = async () => {
  return await fetch(`${host}/country`, { cache: 'force-cache' }).then(res => res.json())
}

export default async function AddPost () {
  const countries = await (await fetchCountries())

  return (
    <Addpost countries={countries} />
  )
}
