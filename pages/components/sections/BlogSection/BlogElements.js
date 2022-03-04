import styled from "styled-components";
import { MdPersonOutline } from 'react-icons/md';

export const BlogContainer = styled.div`
    background: #0f0e17;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
    position: relative;
    z-index: 1;
`

export const BlogWrapper = styled.div`
    display: grid;
    gap: 3rem;
    grid-template-columns: auto auto auto;
    
    @media screen and (max-width: 1100px) {
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: auto;
    }
`

export const BlogPreview  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const AuthorSpace = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: center;
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

export const Heading = styled.h1`
    color: #fffffe;
    align-self: flex-start;
    font-size: 32px;
    padding-left: 10px;
`

export const PreviewText = styled.p`
    color: #a7a9be;
    padding: 5px 10px;
`

export const TextWrapper = styled.div`
    display: grid;
`

export const ImgContainer = styled.div`
    padding: 5px;
`