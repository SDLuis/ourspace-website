/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useCallback, useRef } from 'react'
import Posts from './posts'
import { UseOwnPosts } from '../hooks/useOwnPosts'
import LoadingPost from './loadingposts'
import useNearScreen from '../hooks/useNearScreen'
import UserLogged from '../hooks/userLogged'
import UsePosts from '../hooks/usePosts'
import debounce from 'just-debounce-it'

export default function ListOfOwnPosts ({ prevPosts, user } = {}) {
  const { userFound } = UserLogged()
  const { removePost } = UsePosts()
  const { posts, loading, setPage } = UseOwnPosts({ prevPosts, user })
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
