import ContentLoader from 'react-content-loader'

const InstagramStyle = props => (
  <div className='sm:px-8 px-0'>
    <main className='min-h-screen bg-white dark:bg-black w-full flex justify-center'>
      <div className='w-full sm:w-[598px] md:w-[470px] lg:w-[598px] py-5 flex flex-col items-center sm:border-x sm:border-solid sm:border-gray-700'>
        <ContentLoader
          className='w-[90%] sm:w-[440px] xl:w-[430px]' backgroundColor='#333'
          foregroundColor='#999' viewBox='0 0 400 460' {...props}
        >
          <circle cx='31' cy='31' r='23' />
          <rect x='65' y='18' rx='2' ry='2' width='140' height='13' />
          <rect x='65' y='40' rx='2' ry='2' width='140' height='10' />
          <rect x='0' y='66' rx='2' ry='2' width='140' height='10' />
          <rect x='0' y='84' rx='2' ry='2' width='525' height='300' />
        </ContentLoader>
      </div>
    </main>
  </div>
)

export default InstagramStyle
