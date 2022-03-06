import React from 'react'
import { FooterContainer, 
    SocialsContainer, 
    Social, 
    SectionsContainer, 
    Section,
    Trademark } from './FooterComponents'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterContainer id='footer'>
            <SocialsContainer>
                <Social href='https://instagram.com/bazabartirana'> <AiOutlineInstagram style={{marginRight:'5px'}}/> Instagram </Social>
            </SocialsContainer>
            <SectionsContainer>
                <Section to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80}> Krye </Section>
                <Section to='about' smooth={true} duration={500} spy={true} exact="true" offset={-80}> Rreth Nesh </Section>
                <Section to='blog' smooth={true} duration={500} spy={true} exact="true" offset={-80}> Blog </Section>
                <Section to='visit' smooth={true} duration={500} spy={true} exact="true" offset={-80}> Na Vizito </Section>
            </SectionsContainer>
            <Trademark>
                Baza Bar™ | All Rights Reserved ©
            </Trademark>
    </FooterContainer>
  )
}

export default Footer