import Utilities from '../../components/utilities'
import LastUsers from '../../fetch/lastusers'
import AddPost from '../../fetch/country'
import RenderPosts from '../../fetch/listOfPosts'

export default function Home () {
  return (
    <div className='sm:px-8 px-0'>
      <main className='min-h-screen w-full grid justify-start xsm:grid-cols-[98px_598px] lg:grid-cols-[98px_598px_auto] 1xl:grid-cols-[275px_598px_auto] gap-1 text-white'>
        <div className='hidden xsm:flex justify-end w-[88px] 1xl:w-[270px] py-2'>
          <Utilities />
        </div>
        <div className='w-full min-h-screen sm:w-full pt-3 flex flex-col items-center border-x border-gray-700'>
          <AddPost />
          <RenderPosts />
        </div>
        <div className='hidden lg:flex justify-center w-[270px] xlg:w-[375px] py-3'>
          <LastUsers />
        </div>
      </main>
      <footer className='flex w-full py-8 justify-center items-center border-t border-gray-700'>
        <p>Luis is working yet</p>
      </footer>
    </div>
  )
}
