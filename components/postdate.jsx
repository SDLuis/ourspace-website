import moment from 'moment/moment'

export default function PostDate ({ date } = {}) {
  const formatedDate = moment(date).fromNow()
  return (
    <p className='opacity-60 dark:opacity-70'>{formatedDate}</p>
  )
}
