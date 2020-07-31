import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
    margin: 20px;
    color: #262626;
    max-width: 700px;
    margin: 0 auto;
`

export const Button = styled.button`
    background-color: #00A0E4; 
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
 
    :hover {
        background-color: #11B1E9; 
    }
`

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
