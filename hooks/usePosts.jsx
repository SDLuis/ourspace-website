/* eslint-disable no-unused-expressions */
'use client'

import { useState, useEffect } from 'react'
import PostService from '../services/posts'

export function UsePosts ({ prevPosts = [] } = {}) {
  const INITIAL_PAGE = 0

  const [posts, setPosts] = useState(prevPosts)
  const [page, setPage] = useState(INITIAL_PAGE)

  const [loading, setLoading] = useState(false)
  // const [loadingNextPage, setLoadingNextPage] = useState(false)

  function FetchPosts () {
    setLoading(true)
    PostService().then(({ data }) => setPosts(data)).finally(setLoading(false))
  }

  useEffect(() => {
    prevPosts.length === 0 ? FetchPosts() : null
  }, [prevPosts.length])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    PostService({ page }).then(({ data }) => setPosts(prevPosts => prevPosts.concat(data))).finally(setLoading(false))
  }, [page])

  return { posts, setPosts, loading, setPage }
}
