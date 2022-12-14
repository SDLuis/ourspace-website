/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useCallback, useRef } from 'react'
import Posts from './posts'
import { UsePosts } from '../hooks/usePosts'
import LoadingPost from './loadingposts'
import useNearScreen from '../hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function ListOfPosts () {
  const { posts, loading, setPage } = UsePosts()
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1)
  ), [])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  if (loading) return <LoadingPost />
  return (
    <div className='w-full'>
      <div className='min-h-screen'>
        <Posts posts={posts} />
      </div>
      <div id='visor' ref={externalRef} />
    </div>
  )
}
