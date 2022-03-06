import React from 'react'
import {Button} from '../../ButtonElement'
import data from './info.data'

import { InfoContainer, 
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap, 
    ImgWrap,
    Img
} from './InfoElements'
const InfoSection = () => {
  return (
    <>
        <InfoContainer id='about'>
            {
                data.map( ({lightBg, lightText, lightTextDesc, topline, heading, subtitle, 
                    buttonLabel, imgStart, img, alt, dark, primary, darkText}, i) => (
            <InfoWrapper lightBg={false} key={i}>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine> {topline} </TopLine>
                            <Heading lightText={lightText}> {heading} </Heading>
                            <Subtitle lightText={lightTextDesc}> {subtitle} </Subtitle>
                            <BtnWrap>
                                <Button to='home'> {buttonLabel} </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={'/assets/images/' + img} height={300} width={300} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
                ))
            }
        </InfoContainer>
    </>
  )
}

export default InfoSection