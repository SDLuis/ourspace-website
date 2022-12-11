import AddPost from '../../../fetch/country'

export default function Page () {
  return (
    <main className='w-full min-h-screen flex justify-center text-white'>
      <div className='w-full flex flex-col mb-1 relative items-center sm:w-[598px] md:w-[470px] lg:w-[598px] sm:border-x border-solid sm:border-gray-700'>
        <div className='w-full pt-4'>
          <AddPost />
        </div>
        <div className='border-gray-700 border-b w-full' />
      </div>
    </main>

  )
}
