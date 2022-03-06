import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    ImgContainer,
    ArrowRight,
} from './BlogElements';
import { ButtonHref } from '../../ButtonElement'
import { useState } from 'react';

const BlogSection = (props) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <>
            <BlogContainer id='blog'>
                <BlogWrapper>
                    {
                        props.posts.map(({ author, title, image, body }, i) => (
                            <BlogPreview key={i}>
                                <AuthorSpace>
                                    <AuthorIcon />
                                    <Author> {author} </Author>
                                </AuthorSpace>
                                <TextWrapper>
                                    <Heading>
                                        {title}
                                    </Heading>
                                    <PreviewText>
                                        {body.split(/\s+/).slice(0, 20).join(' ') + '...'}
                                    </PreviewText>
                                </TextWrapper>
                                <ImgContainer>
                                    <Image src={'/assets/images/' + image} alt="" width={400} height={300} />
                                </ImgContainer>
                            </BlogPreview>
                        ))
                    }
                </BlogWrapper>
                <Link href='/blog' passHref>
                        <ButtonHref primary onMouseEnter={onHover} onMouseLeave={onHover}>
                            Më Shumë Blog
                            <ArrowRight hover={hover} />
                        </ButtonHref>
                    </Link>
            </BlogContainer>
        </>
    )
}

export default BlogSection