import moment from 'moment/moment'

export default function PostDate ({ date } = {}) {
  const formatedDate = moment(date).fromNow()
  return (
    <p className='opacity-60'>{formatedDate}</p>
  )
}
