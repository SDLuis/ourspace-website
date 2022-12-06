import UserLoader from '../../../components/loadinguser'

export default function Loading () {
  return (
    <div className='w-full flex justify-center lg:px-[18%]'>
      <div className='flex flex-col w-full sm:w-[598px] items-center sm:border-x min-h-screen border-solid border-gray-900 pb-6'>
        <UserLoader />
      </div>
    </div>
  )
}
