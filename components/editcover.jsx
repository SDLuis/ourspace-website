/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import EditCoverUser from '../hooks/useEditCoverUser'
import { Back } from './icons'
import placeholderCover from '../public/placeholder-portada.webp'

export default function EditCover ({ user }) {
  const { cover, setCover, disabled, EditCover } = EditCoverUser({ user })
  const imgCover = !cover ? placeholderCover : cover

  return (
    <form>
      <div className='Register grid min-h-[100vh] h-auto place-items-center'>
        <main className='w-full h-full sm:border-solid border-x border-solid border-gray-700 bg-white dark:bg-black sm:w-[451px] md:w-[80%] my-5 sm:h-full py-5 '>
          <div className='formulario w-full flex flex-col gap-4 justify-center items-center'>
            <div className='w-full sm:w-[596px] flex justify-center relative'>
              <h2 className='font-medium text-2xl text-black dark:text-gray-200'>Editar Portada</h2>
              <Link className='p-1 absolute left-0 top-0 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all ease-in-out rounded-full duration-300' href={`/user/${user.user}`}><Back /></Link>
            </div>
            <div className='flex flex-col items-center'>
              <input className='w-[95vw] sm:w-full text-black dark:text-white' type='file' onChange={(e) => setCover(e.target.files[0])} />
              {
              cover === null
                ? <Image width={596} height={280} className='w-[95vw] sm:w-[596px] my-2 h-full sm:h-[280px] object-cover' src={imgCover} alt='user img' />
                : typeof cover === 'object' ? <Image width={596} height={280} className='w-[95vw] sm:w-[596px] my-2 h-full sm:h-[280px] object-cover' src={URL.createObjectURL(cover)} alt='user img' /> : <Image width={596} height={280} className='w-[95vw] sm:w-[596px] my-2 h-full sm:h-[280px] object-cover' src={cover} alt='user img' />
          }
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button
              disabled={disabled}
              onClick={(e) => EditCover(e)}
              className='Button mb-1 focus:outline-none disabled:bg-blue-500 bg-blue-800 py-2 text-gray-300 px-10 rounded-r-full rounded-l-full w-[95vw] sm:w-[596px]'
              // type='submit'
            >
              Guardar configuración
            </button>
          </div>
        </main>
      </div>
    </form>
  )
}
