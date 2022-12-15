import ContentLoader from 'react-content-loader'

const LoadingAddPost = props => (
  <div className='sm:px-8 px-0'>
    <main className='min-h-screen w-full flex justify-center'>
      <div className='w-full sm:w-[598px] md:w-[470px] lg:w-[598px] py-5 flex flex-col items-center border-x border-solid sm:border-gray-700'>
        <ContentLoader
          className='w-[90%] sm:w-[440px] xl:w-[430px]' backgroundColor='#333'
          foregroundColor='#999' viewBox='0 0 400 460' {...props}
        >
          <circle cx='47' cy='129' r='29' />
          <rect x='94' y='111' rx='2' ry='2' width='104' height='21' />
          <rect x='94' y='93' rx='2' ry='2' width='71' height='8' />
          <rect x='94' y='218' rx='2' ry='2' width='37' height='34' />
          <rect x='403' y='225' rx='2' ry='2' width='97' height='27' />
          <rect x='340' y='93' rx='2' ry='2' width='75' height='8' />
          <rect x='339' y='111' rx='2' ry='2' width='165' height='21' />
        </ContentLoader>
      </div>
    </main>
  </div>
)

export default LoadingAddPost
