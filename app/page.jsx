import RenderPosts from '../fetch/listOfPosts'
import Sidebar from '../components/sidebar'
import Auth from '../components/auth'
import AuthBanner from '../components/authbanner'

export default function Home () {
  return (
    <div className='bg-[#ffffff] dark:bg-black'>
      <div className='sm:px-8 px-0'>
        <main className='min-h-screen w-full lg:w-[90%] flex justify-center md:grid md:grid-cols-[470px_auto] lg:grid-cols-[598px_275px_auto] 1xl:grid-cols-[275px_598px_auto] gap-2 text-[#121212] dark:text-white'>
          <div className='hidden 1xl:flex justify-center w-full py-5'>
            <Sidebar />
          </div>
          <div className='w-full min-h-screen sm:w-[598px] md:w-[470px] lg:w-[598px] flex flex-col items-center border-x border-gray-700'>
            <div className='flex py-3'>
              <p className='font-semibold text-3xl'>Bienvenido!</p>
            </div>
            <RenderPosts />
          </div>
          <div className='hidden md:flex justify-start w-[270px] py-2'>
            <Auth />
          </div>
        </main>
      </div>
      <AuthBanner />
    </div>
  )
}
