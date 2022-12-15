/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useCallback, useRef } from 'react'
import Posts from './posts'
import UsePosts from '../hooks/usePosts'
import LoadingPost from './loadingposts'
import useNearScreen from '../hooks/useNearScreen'
import UserLogged from '../hooks/userLogged'
import debounce from 'just-debounce-it'

export default function ListOfPosts ({ prevPosts = [] } = {}) {
  const { userFound } = UserLogged()
  const { posts, loading, setPage, removePost } = UsePosts({ prevPosts })
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
        <Posts posts={posts} userLogged={userFound} removePost={removePost} />
      </div>
      <div id='visor' ref={externalRef} />
    </div>
  )
}
