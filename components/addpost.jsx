/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import TextareaAutosize from 'react-textarea-autosize'
import InputPostType from './inputposttype'
import { ImageIcon, Delete } from './icons'
import placeholder from '../public/placeholder-user.jpg'
import UseAddPost from '../hooks/addpost'
import LocationInputs from './location'

export default function Addpost ({ countries = [] }) {
  const { postImg, setPostImg, description, inputImg, user, AddPost, postType, country, setcountry, city, Cities, disabled } = UseAddPost()

  const img = !user.img ? placeholder : user.img
  const removingImg = () => {
    setPostImg([])
    inputImg.current.value = ''
  }

  return (
    <div className='w-full flex justify-center mb-3'>
      <div className='w-full px-4 flex gap-3'>
        <Image width={48} height={48} className='rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover' src={img} alt='user' />
        <div className='w-full'>
          <div className='flex justify-between'>
            <InputPostType postType={postType} />
            <LocationInputs countries={countries} country={country} setcountry={setcountry} Cities={Cities} city={city} />
          </div>
          <TextareaAutosize
            className='w-full min-h-[80px] rounded-md p-2 max-h-[25rem] outline-none border-none leading-6 text-gray-200 text-base sm:text-lg bg-transparent resize-none'
            ref={description} placeholder='Mi@. Fluya!'
          />
          {postImg.length !== 0
            ? <div className='relative'><Image className='w-full h-auto object-cover mb-3 rounded-md' src={URL.createObjectURL(postImg)} width={300} height={300} alt='' /> <div className='grid place-items-center absolute top-1 left-1 rounded-full bg-gray-900/80  hover:bg-gray-900/60 transition-all ease-in-out duration-300 p-1'><button onClick={() => removingImg()}> <Delete /> </button> </div></div>
            : null}
          <div className='flex justify-between items-end'>
            <div>
              <label className='cursor-pointer' htmlFor='file-input'>
                <ImageIcon />
              </label>
              <input onChange={(e) => setPostImg(e.target.files[0])} ref={inputImg} className='hidden' id='file-input' type='file' />
            </div>
            <button disabled={disabled} onClick={() => AddPost(country, city)} className='px-4 disabled:bg-sky-500 py-2 rounded-l-full rounded-r-full bg-sky-700 text-gray-200'>Postear</button>
          </div>
        </div>
      </div>
    </div>

  )
}
