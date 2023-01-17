import { MoreOptions } from './icons'
import UseMenuOption from '../hooks/useMenuOption'

export default function MenuOptions ({ removePost, post, OwnerPost } = {}) {
  const { show, setShow } = UseMenuOption()
  return (
    <div>
      <div hidden={OwnerPost(post.userModel)} onClick={() => setShow(!show)} className='text-gray-200 absolute top-2 right-3 p-0.5 hover:bg-gray-900 transition-all ease-in-out cursor-pointer rounded-full duration-200'><MoreOptions /></div>
      <div id='dropdownInformation' className={` ${show ? 'absolute z-10 top-10 right-2' : 'hidden'} w-44 rounded divide-y shadow bg-gray-700 divide-gray-600`}>
        <div className='p-2 text-sm text-gray-200'>
          <ul className='py-1 text-sm text-gray-200' aria-labelledby='dropdownInformationButton'>
            <li className='py-2 px-4 hover:bg-gray-600 w-full cursor-pointer' onClick={() => setShow(!show)}>
              <button onClick={() => removePost(post.Post_ID)} className='hover:text-white w-full'>Eliminar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
