import ContentLoader from 'react-content-loader'

const UserLoader = (props) => (
  <ContentLoader
    className='w-full mt-12'
    viewBox='0 0 598 460'
    backgroundColor='#333'
    foregroundColor='#999'
    {...props}
  >
    <circle cx='298' cy='250' r='88' />
    <rect x='5' y='260' rx='2' ry='2' width='170' height='34' />
    <rect x='197' y='352' rx='2' ry='2' width='201' height='21' />
    <rect x='-48' y='395' rx='2' ry='2' width='685' height='39' />
    <rect x='422' y='260' rx='2' ry='2' width='170' height='34' />
    <rect x='-6' y='21' rx='2' ry='2' width='610' height='228' />
  </ContentLoader>
)

export default UserLoader
