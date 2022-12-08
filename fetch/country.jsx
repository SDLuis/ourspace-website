import Location from '../components/location'

const host = 'https://country-api.up.railway.app'

const fetchCountries = async () => {
  return await fetch(`${host}/country`, { cache: 'force-cache' }).then(res => res.json())
}

export default async function RenderCountries () {
  const countries = await (await fetchCountries())

  return (
    <Location countries={countries} />
  )
}
