import React from 'react'

export default function InputPostType () {
  return (
    <select class='w-28 bg-black border border-sky-600 text-sky-600 text-sm rounded-l-full rounded-r-full outline-none p-1.5 my-2'>
      <option value='Public'>Public</option>
      <option value='Just Friends'>Just Friends</option>
      <option value='Private'>Private</option>
    </select>
  )
}
