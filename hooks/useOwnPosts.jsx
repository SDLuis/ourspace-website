/* eslint-disable no-unused-expressions */
'use client'

import { useState, useEffect } from 'react'
import { getUserPosts } from '../services/posts'

export function UseOwnPosts ({ prevPosts = [], user } = {}) {
  const INITIAL_PAGE = 0

  const [posts, setPosts] = useState(prevPosts ?? [])
  const [page, setPage] = useState(INITIAL_PAGE)

  const [loading, setLoading] = useState(false)
  // const [loadingNextPage, setLoadingNextPage] = useState(false)

  function fetchPosts () {
    setLoading(true)
    getUserPosts({ user }).then(({ data }) => setPosts(data)).finally(setLoading(false))
  }

  useEffect(() => {
    prevPosts.length === 0
      ? fetchPosts()
      : null
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevPosts.length])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    getUserPosts({ page, user }).then(({ data }) => setPosts(prevPosts => prevPosts.concat(data))).finally(setLoading(false))
  }, [page, user])

  return { posts, setPosts, loading, setPage }
}
