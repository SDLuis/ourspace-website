'use client'

export default function InputPostType ({ postType }) {
  return (
    <div className='flex flex-col gap-0.5 -mt-2'>
      <p className='text-sm text-sky-600 px-3'>Audiencia</p>
      <select ref={postType} className='w-28 bg-black border border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5'>
        <option value='Public'>Public</option>
        <option value='Just Friends'>Just Friends</option>
        <option value='Private'>Private</option>
      </select>
    </div>
  )
}
