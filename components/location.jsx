/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-closing-tag-location */
'use client'

import { useRef, useEffect, useState } from 'react'
import axios from 'axios'

export default function Location ({ countries = [] }) {
  const host = 'https://country-api.up.railway.app'
  const [country, setcountry] = useState('')
  const city = useRef('')
  const [Country, setCountry] = useState([])
  console.log(country)

  useEffect(() => {
    country !== ''
      ? axios.get(`${host}/country/${country}`, { cache: 'force-cache' }).then(({ data }) => { setCountry(data) })
      : null
  }, [country])

  return (
    <div className='flex flex-col gap-0.5 -mt-2'>
      <p className='text-sm text-sky-600 px-3'>Donde estas?</p>
      <select onChange={(e) => setcountry(e.target.value)} className='bg-black border w-32 md:w-48 border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5 mb-2'>
        <option value=''>Anonimo</option>
        {countries.length && countries.map(({ id, name }) => (<option key={id}>{name}</option>))}
      </select>
      {country !== ''
        ? <select ref={city} className='w-32 md:w-48 bg-black border border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5'>
          {Country.length !== 0 ? Country.cities.length !== 0 ? Country.cities.map(({ id, name }) => (<option key={id}>{name}</option>)) : <option value=''>No hay ciudades disponibles</option> : null}
        </select>
        : null}
    </div>
  )
}
