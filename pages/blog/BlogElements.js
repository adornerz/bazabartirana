import styled from 'styled-components'
import { MdPersonOutline } from 'react-icons/md'

export const BlogContainer = styled.div`
    background: #120606;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = styled.h1`
    font-size: 48px;
    color: #fffffe;
    padding: 10px
`

export const BlogPreviews = styled.div`
    display: flex;
    background: #120606;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Blog = styled.a`
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    text-decoration: none;
    margin: 20px 0;
`

export const AuthorContainer = styled.div`
    display: flex;
    align-self: flex-start;
    align-items: center;
`

export const AuthorIcon = styled(MdPersonOutline)`
    color: #f25f4c;
    font-size: 14px;
`

export const Author = styled.h1`
    color: #f25f4c;
    font-size: 14px;
    padding-left: 8px;

`

export const BlogHeading = styled.h1`
    color: #fffffe;
    align-self: flex-start;
    font-size: 32px;
    padding-left: 10px;
`

export const PreviewText = styled.p`
    color: #a7a9be;
    padding: 5px 10px;
`
