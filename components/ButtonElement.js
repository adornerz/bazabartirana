import styled from "styled-components";
import { Link as LinkS} from 'react-scroll';
import Link from "next/link";

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${props => props.primary ? '#7f5af0' : '#2cb67d'};
    white-space: nowrap;
    padding: ${props => props.big ? '14px 48px' : '12px 30px'};
    color: ${props => props.dark ? '010606' : '#fff'};
    font-size: ${props => props.big ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover {
        transition: all .2s ease-in-out;
        background: ${props => props.primary ? '#fff' : '#2cb67d'};
        color: #000;
    }
`

export const ButtonLink = styled(Link)`
    border-radius: 50px;
    background: ${props => props.primary ? '#7f5af0' : '#2cb67d'};
    white-space: nowrap;
    padding: ${props => props.big ? '14px 48px' : '12px 30px'};
    color: ${props => props.dark ? '010606' : '#fff'};
    font-size: ${props => props.big ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover {
        transition: all .2s ease-in-out;
        background: ${props => props.primary ? '#fff' : '#2cb67d'};
        color: #000;
    }
`

export const ButtonHref = styled.button`
    border-radius: 50px;
    background: ${props => props.primary ? '#7f5af0' : '#2cb67d'};
    white-space: nowrap;
    padding: ${props => props.big ? '14px 48px' : '12px 30px'};
    color: ${props => props.dark ? '010606' : '#fff'};
    font-size: ${props => props.big ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover {
        transition: all .2s ease-in-out;
        background: ${props => props.primary ? '#fff' : '#2cb67d'};
        color: #000;
    }
`