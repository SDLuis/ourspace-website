/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import TextareaAutosize from 'react-textarea-autosize'
import UseUser from '../fetch/login'
import { ImageIcon, Delete } from './icons'
import placeholder from '../public/placeholder-user.jpg'

export default function Addpost () {
  const { userLogged } = UseUser()
  const description = useRef('')
  const [post, setPost] = useState({
    Post_Type: '',
    Location: '',
    postImg: []
  })
  const [user, setUser] = useState('')
  const img = !user.img ? placeholder : user.img

  useEffect(() => {
    userLogged().then(data => setUser(data))
  }, [])

  return (
    <div className='w-full flex justify-center mb-3'>
      <div className='w-full px-6 flex gap-3'>
        <Image width={48} height={48} className='rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover' src={img} alt='user' />
        <div className='w-full'>
          <TextareaAutosize
            className='w-full min-h-[80px] rounded-md p-2 max-h-[25rem] outline-none border-none leading-6 text-gray-200 text-base sm:text-lg bg-transparent resize-none'
            ref={description} placeholder='Mi@. Fluya!'
          />
          {post.postImg.length !== 0
            ? <div className='relative'><Image className='w-full h-auto object-cover mb-3 rounded-md' src={URL.createObjectURL(post.postImg)} width={300} height={300} alt='' /> <div className='grid place-items-center absolute top-1 left-1 rounded-full bg-gray-900/80  hover:bg-gray-900/60 transition-all ease-in-out duration-300 p-1'><button onClick={() => { setPost({ ...post, postImg: [] }) }}> <Delete /> </button> </div></div>
            : null}
          <div className='flex justify-between items-end'>
            <div>
              <label className='cursor-pointer' htmlFor='file-input'>
                <ImageIcon />
              </label>
              <input onChange={(e) => setPost({ ...post, postImg: e.target.files[0] })} className='hidden' id='file-input' type='file' />
            </div>
            <button className='px-4 py-2 rounded-l-full rounded-r-full bg-sky-600 text-gray-200'>Postear</button>
          </div>
        </div>
      </div>
    </div>

  )
}
