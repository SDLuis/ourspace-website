import EditPost from '../components/editpost'
import { countries } from './countriesdata'

export default function AddPost () {
  return (
    <EditPost countries={countries} />
  )
}
