import styles from './page.module.css'
import ListOfPosts from '../fetch/listOfPosts'

export default function Home () {
  return (
    <div className='px-8 py-2'>
      <main className='px-32 py-5 min-h-screen flex flex-col items-center text-white'>
        <ListOfPosts />
      </main>
      <footer className={styles.footer}>
        <p>Luis is working yet</p>
      </footer>
    </div>
  )
}
