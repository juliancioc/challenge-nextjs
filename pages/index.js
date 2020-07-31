import React, { useState } from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import {
  DeleteOutlined,
  EyeOutlined,
  ClearOutlined
} from '@ant-design/icons'
import styled from 'styled-components';

export const Item = styled.div`
    flex: 1;
    margin: 7px 10px 10px 20px;
`;

export const Wrapper = styled.div`
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    display: flex;
    margin: 0px 15px 0px 15px;
    align-items: center;
    height: 60px;

    :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

export const WrapperIcon = styled.div`
    margin: 5px;
`;

export const Select = styled.select`
    margin: 0px 10px 0px 7px;
    height: 25px;
    width: 160px;
`;

export const WrapperFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;

export const Container = styled.div`
    color: #262626;
    max-width: 700px;
    margin: 0 auto;
`;


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
            <option key={item.id}>{item.name}</option>
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
