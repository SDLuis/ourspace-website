/* eslint-disable no-unused-expressions */
'use client'

import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { confirmAlert } from 'react-confirm-alert'
import '../styles/reactConfirmAlert.css'
import PostService, { deletePost } from '../services/posts'

export default function UsePosts ({ prevPosts = [] } = {}) {
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

  const removePost = (PostID) => {
    const options = {
      title: 'Eliminar publicación',
      message: '¿Seguro que quiere eliminar esta publicación?',
      buttons: [
        {
          label: 'Eliminar',
          onClick: () => {
            deletePost(PostID).then(({ data }) => {
              toast.success(data)
              setTimeout(() => { window.location.reload() }, 700)
            }).catch(err => toast.error(err))
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
      overlayClassName: 'overlay-custom-class-name'
    }
    confirmAlert(options)
  }

  return { posts, setPosts, loading, setPage, removePost }
}
