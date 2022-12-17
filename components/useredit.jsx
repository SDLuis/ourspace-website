/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @next/next/no-img-element */
'use client'
import EditUser from '../hooks/edituser'
import UseAddPost from '../hooks/addpost'
import { countries } from '../fetch/countriesdata'

export default function UserEdit ({ user }) {
  const { form, setForm, disabled, countryFromUser, cityFromUser } = EditUser({ user })
  const { setcountry, Cities, city } = UseAddPost()
  const { cities } = Cities

  return (
    <form>
      <div className='Register grid min-h-[100vh] h-auto place-items-center'>
        <main className='w-full h-full sm:border border-solid border-gray-700 bg-black sm:rounded-lg sm:w-[451px] my-5 sm:h-full py-5 '>
          <div className='formulario w-full flex flex-col gap-4 justify-center items-center h-full'>
            <center>
              <h2 className='font-medium text-2xl text-gray-200'>Editar usuario</h2>
            </center>
            <div className='w-10/12'>
              <div className='grid gap-6 w-full mb-4 grid-cols-2'>
                <div>
                  <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-300'>Nombre</label>
                  <input
                    type='text' id='first_name' value={form.First_Name ?? ''} onChange={(e) => {
                      setForm({ ...form, firstNameReg: e.target.value })
                    }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-400 text-white' placeholder='Louis' required
                  />
                </div>
                <div>
                  <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-300'>Apellido</label>
                  <input
                    value={form.Last_Name ?? ''}
                    type='text' id='last_name' onChange={(e) => {
                      setForm({ ...form, lastNameReg: e.target.value })
                    }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-400 text-white' placeholder='Rincon' required
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label htmlFor='dateofbirth' className='block mb-2 text-sm font-medium text-gray-300'>Fecha de nacimiento</label>
                <input
                  value={user.Date_Of_Birth ?? ''}
                  type='text' id='dateofbirth' onChange={(e) => {
                    setForm({ ...form, userReg: e.target.value })
                  }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-400 text-white' placeholder='10-10-1990' required
                />
              </div>
              <div className='mb-4 flex justify-between'>
                <div>
                  <label htmlFor='location' className='block mb-2 text-sm font-medium text-gray-300'>País</label>
                  <select defaultValue={countryFromUser ?? 'anonimo'} onChange={(e) => setcountry(e.target.value)} className='bg-black cursor-pointer border w-32 md:w-44 border-sky-900 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5 mb-2'>
                    <option value=''>anonimo</option>
                    <option value={countryFromUser ?? 'anonimo'}>{countryFromUser ?? 'anonimo'}</option>
                    {countries.length && countries.map((name) => (<option value={name} key={name}> {name}</option>))}
                  </select>
                </div>
                {countryFromUser
                  ? <div>
                    <label htmlFor='location' className='block mb-2 text-sm font-medium text-gray-300'>Ciudad</label>
                    <select defaultValue={cityFromUser ?? 'anonimo'} ref={city} className='w-32 md:w-44 bg-black border border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5'>
                      <option value=''>anonimo</option>
                      <option value={cityFromUser ?? 'anonimo'}>{cityFromUser ?? 'anonimo'}</option>
                      {Cities.length !== 0 ? cities.length !== 0 ? cities.map(({ id, name }) => (<option key={id}>{name}</option>)) : <option value=''>No hay ciudades disponibles</option> : null}
                    </select>
                  </div>
                  : null}
              </div>
              <div className='mb-4'>
                <label htmlFor='user' className='block mb-2 text-sm font-medium text-gray-300'>Usuario</label>
                <input
                  value={form.user ?? ''}
                  type='text' id='user' onChange={(e) => {
                    setForm({ ...form, userReg: e.target.value })
                  }} className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-400 text-white' placeholder='LRincon' required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-300'>Contraseña</label>
                <input
                  type='password' onChange={(e) => {
                    setForm({ ...form, passwordReg: e.target.value })
                  }} id='password' className='border text-sm rounded-lg focus:ring-gray-500 block w-full p-2.5 bg-transparent border-gray-700 placeholder-gray-400 text-white' placeholder='•••••••••' required
                />
              </div>
              <input className='w-[85%] sm:w-full' type='file' onChange={(e) => setForm({ ...form, img: e.target.files[0] })} />
              {
            form.img?.length !== 0 ? <div className='flex justify-center my-1'> <img className='w-[100px] h-[100px] rounded-full object-cover' src={form.img ? form.img : 'https://res.cloudinary.com/dw9esmd56/image/upload/v1670615286/fzyez3drwjrlsbqmqsb4.jpg'} alt='user img' /> </div> : null
          }
            </div>
            <div className='w-full flex justify-center'>
              <button
                disabled={disabled}
                className='Button mb-1 focus:outline-none disabled:bg-blue-500 bg-blue-800 py-2 text-gray-300 px-10 rounded-r-full rounded-l-full w-10/12'
                type='submit'
              >
                Guardar configuración
              </button>
            </div>
          </div>
        </main>
      </div>
    </form>
  )
}
