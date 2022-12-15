/* eslint-disable react/jsx-closing-tag-location */
'use client'

export default function LocationInputs ({ countries = [], setcountry, city, country, Cities }) {
  const { cities } = Cities
  return (
    <div className='flex flex-col gap-0.5 -mt-2'>
      <p className='text-sm text-sky-600 px-3'>Donde estas?</p>
      <select onChange={(e) => setcountry(e.target.value)} className='bg-black cursor-pointer border w-32 md:w-48 border-sky-900 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5 mb-2'>
        <option value=''>Anonimo</option>
        {countries.length && countries.map((name) => (<option value={name} key={name}> {name}</option>))}
      </select>
      {country
        ? <select ref={city} className='w-32 md:w-48 bg-black border border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5'>
          {Cities.length !== 0 ? cities.length !== 0 ? cities.map(({ id, name }) => (<option key={id}>{name}</option>)) : <option value=''>No hay ciudades disponibles</option> : null}
        </select>
        : null}
    </div>
  )
}
