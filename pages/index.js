import React, { useState } from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import {
  DeleteOutlined,
  EyeOutlined,
  ClearOutlined
} from '@ant-design/icons'

import {
  Item,
  Wrapper,
  WrapperIcon,
  Select,
  WrapperFilter,
  Container
} from './style'

function Index({ posts, users }) {
  const [postsData, setPostsData] = useState(posts)

  const handleRemove = async (post) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${post.id}`, {
      method: 'DELETE'
    })

    const data = postsData.filter((item) => item.id !== post.id)

    setPostsData(data)
  }

  const handleFilter = async (user) => {
    const dataUser = users.filter((item) => item.name === user);
    const idUser = dataUser[0].id

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`)
    const filterPostByUser = await response.json()

    setPostsData(filterPostByUser)
  }

  const clearFilter = () => {
    setPostsData(posts)
  }

  return (
    <Container>
      <WrapperFilter>
        <p>Filtrar por usuário:</p>
        <Select onChange={(value) => handleFilter(value.target.value)}>
          {users.map((item) => (
            <option>{item.name}</option>
          ))}
        </Select>
        <ClearOutlined onClick={clearFilter} />
      </WrapperFilter>
      {postsData.map((item) => (
        <Wrapper key={item.id}>
          <Item>
            {item.title}
          </Item>
          <WrapperIcon>
            <Link href="/posts/[id]" as={`/posts/${item.id}`}>
              <EyeOutlined
                style={{ marginRight: 10 }}
              />
            </Link>
            <DeleteOutlined
              onClick={() => handleRemove(item)}
            />
          </WrapperIcon>
        </Wrapper>
      ))}
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const resUsers = await fetch('https://jsonplaceholder.typicode.com/users')

  const json = await res.json()
  const jsonUsers = await resUsers.json()

  return {
    props: {
      posts: json,
      users: jsonUsers
    },
  }
}

export default Index
