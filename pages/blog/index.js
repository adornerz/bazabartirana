import React from 'react'
import {
    Heading,
    BlogContainer,
    BlogPreviews,
    Blog,
    AuthorContainer,
    AuthorIcon,
    Author,
    BlogHeading,
    PreviewText
} from './BlogElements'
import { PrismaClient } from '@prisma/client'

const index = (props) => {
    return (
        <BlogContainer>
            <Heading> Our Blog </Heading>
            <BlogPreviews>
                {
                    props.posts.map(({url, author, title, body, image }) => (
                        <Blog href={'/blog/' + url}>
                            <AuthorContainer>
                                <AuthorIcon />
                                <Author> {author} </Author>
                            </AuthorContainer>

                            <BlogHeading> {title} </BlogHeading>
                            <PreviewText> {body.split(/\s+/).slice(0, 20).join(' ') + '...'} </PreviewText>
                        </Blog>
                    ))
                }
            </BlogPreviews>
        </BlogContainer >
    )
}

export default index

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany();
    return {
        props: {
            posts: posts
        }
    }
}