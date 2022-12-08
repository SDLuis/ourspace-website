'use client'

import { useRef, useEffect, useState } from 'react'
import axios from 'axios'

export default function Location ({ countries }) {
  const host = 'https://country-api.up.railway.app'
  const [country, setcountry] = useState('Afghanistan')
  const city = useRef('')
  const [Country, setCountry] = useState([])

  useEffect(() => {
    axios.get(`${host}/country/${country}`, { cache: 'force-cache' }).then(({ data }) => { setCountry(data) })
  }, [country])

  return (
    <div className='flex gap-2'>
      <select onChange={(e) => setcountry(e.target.value)} className='w-40 bg-black border border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5 my-2'>
        {countries.length !== 0 ? countries.map(({ id, name }) => (<option key={id}>{name}</option>)) : null}
      </select>
      <select ref={city} className='w-40 bg-black border border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5 my-2'>
        {Country.length !== 0 ? Country.cities.map(({ id, name }) => (<option key={id}>{name}</option>)) : null}
      </select>
    </div>
  )
}
