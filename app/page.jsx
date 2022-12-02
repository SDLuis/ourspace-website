import styles from './page.module.css'
import ListOfPosts from '../fetch/listOfPosts'
import Suggeration from '../components/suggestion'
import Auth from '../components/auth'
import AuthBanner from '../components/authbanner'

export default function Home () {
  return (
    <div>
      <div className='sm:px-8 px-0'>
        <main className='min-h-screen w-full lg:w-[90%] flex justify-center md:grid md:grid-cols-[470px_auto] lg:grid-cols-[598px_275px_auto] 1xl:grid-cols-[275px_598px_auto] gap-2 text-white'>
          <div className='hidden 1xl:flex justify-center w-full py-5'>
            <Suggeration />
          </div>
          <div className='w-full sm:w-[598px] md:w-[470px] lg:w-[598px] py-5 flex flex-col items-center border-b border-x border-solid sm:border-gray-500'>
            <ListOfPosts />
          </div>
          <div className='hidden md:flex justify-start w-[270px] py-2'>
            <Auth />
          </div>
        </main>
        <footer className={styles.footer}>
          <p>Luis is working yet</p>
        </footer>
      </div>
      <AuthBanner />
    </div>
  )
}
