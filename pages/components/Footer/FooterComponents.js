import styled from 'styled-components'
import { Link } from 'react-scroll'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:40px 0;
  background-color: #050C24;
  color: #fffffe;
`

export const SocialsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`

export const Social = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    color: #fffffe;
`

export const SectionsContainer = styled.ul`
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
`

export const Section = styled(Link)`
    padding:0 10px;
    color:inherit;
    text-decoration:none;
    opacity:0.8;
    cursor: pointer
`

export const Trademark = styled.p`
  font-size: 16px;
  color: #a7a9be;
  align-self: flex-start;
  margin-left: 120px;
  padding: 10px 0;
  @media screen and (max-width: 968px) {
    margin-left: 10px;
  }
`