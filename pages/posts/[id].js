import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Container, Button } from './style.js'

export default function Post(postData) {
    const { id } = postData.url.query
    const [post, setPost] = useState({})

    useEffect(() => {
        const loadPost = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const postApi = await response.json()

            setPost(postApi)
        }

        loadPost()
    }, [])

    return (
        <Container>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <Link href="/">
                <Button>Voltar</Button>
            </Link>
        </Container>
    )
}
