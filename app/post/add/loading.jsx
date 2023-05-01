import LoadingSpinner from '../../../components/loading'

export default function Loading () {
  return (
    <div className='h-[70vh] sm:h-[50vh] grid place-items-center bg-white dark:bg-black'>
      <div className='w-20 h-20'>
        <LoadingSpinner />
      </div>
    </div>
  )
}
