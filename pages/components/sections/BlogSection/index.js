import React from 'react';
import data from './blog.data';
import Image from 'next/image';

import {
    BlogContainer,
    BlogWrapper,
    BlogPreview,
    Heading,
    AuthorSpace,
    AuthorIcon,
    Author,
    PreviewText,
    TextWrapper,
    ImgContainer
} from './BlogElements';
const BlogSection = () => {

    return (
        <>
            <BlogContainer id='blog'>
                <BlogWrapper>
                    {
                        data.map(({ author, heading, image, text }) => (
                            <BlogPreview>
                                <AuthorSpace>
                                    <AuthorIcon />
                                    <Author> {author} </Author>
                                </AuthorSpace>
                                <TextWrapper>
                                    <Heading>
                                        {heading}
                                    </Heading>
                                    <PreviewText>
                                        {text.split(/\s+/).slice(0, 20).join(' ') + '...'}
                                    </PreviewText>
                                </TextWrapper>
                                <ImgContainer>
                                    <Image src={'/assets/images/' + image} width={400} height={300} />
                                </ImgContainer>
                            </BlogPreview>
                        ))
                    }
                </BlogWrapper>
            </BlogContainer>
        </>
    )
}

export default BlogSection