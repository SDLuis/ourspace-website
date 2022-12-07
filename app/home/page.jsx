import ListOfPosts from '../../fetch/listOfPosts'
import Utilities from '../../components/utilities'
import Suggeration from '../../components/suggestion'
import Addpost from '../../components/addpost'

export default function Home () {
  return (
    <div className='sm:px-8 px-0'>
      <main className='min-h-screen w-full md:w-[90%] grid justify-center xsm:grid-cols-[98px_598px] lg:grid-cols-[275px_598px_auto] 1xl:grid-cols-[275px_598px_auto] gap-1 text-white'>
        <div className='hidden xsm:flex justify-end w-[88px] lg:w-[270px] py-5'>
          <Utilities />
        </div>
        <div className='w-full min-h-screen sm:w-full pt-5 flex flex-col items-center border-x border-gray-900'>
          <Addpost />
          <ListOfPosts />
        </div>
        <div className='hidden lg:flex justify-center w-[20vw] py-5'>
          <Suggeration />
        </div>
      </main>
      <footer className='flex w-full py-8 justify-center items-center border-t border-gray-900'>
        <p>Luis is working yet</p>
      </footer>
    </div>
  )
}
