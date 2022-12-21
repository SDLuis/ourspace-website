/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import EditCoverUser from '../hooks/editcoveruser'
import placeholderCover from '../public/placeholder-portada.webp'

export default function EditCover ({ user }) {
  const { cover, setCover, disabled, EditCover } = EditCoverUser({ user })
  const imgCover = !cover ? placeholderCover : cover

  return (
    <form>
      <div className='Register grid min-h-[100vh] h-auto place-items-center'>
        <main className='w-full h-full sm:border-solid border-x border-solid border-gray-700 bg-black sm:w-[451px] md:w-[80%] my-5 sm:h-full py-5 '>
          <div className='formulario w-full flex flex-col gap-4 justify-center items-center'>
            <center>
              <h2 className='font-medium text-2xl text-gray-200'>Editar Portada</h2>
            </center>
            <div>
              <input className='w-[85%] sm:w-full' type='file' onChange={(e) => setCover(e.target.files[0])} />
              {
             typeof cover !== 'object'
               ? <Image width={596} height={280} className='w-full sm:w-[596px] my-2 h-full sm:h-[280px] object-cover' src={imgCover} alt='user img' />
               : <Image width={596} height={280} className='w-full sm:w-[596px] my-2 h-full sm:h-[280px] object-cover' src={URL.createObjectURL(cover)} alt='user img' />
          }
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button
              disabled={disabled}
              onClick={(e) => EditCover(e)}
              className='Button mb-1 focus:outline-none disabled:bg-blue-500 bg-blue-800 py-2 text-gray-300 px-10 rounded-r-full rounded-l-full w-full sm:w-[596px]'
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
