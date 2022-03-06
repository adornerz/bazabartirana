import React, {useState} from 'react'
import { HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowRight } from './HeroElements'
import { Button } from '../../ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
        <VideoBg autoPlay loop muted
          src="assets/videos/hero-bg2.mp4"
          type='video/mp4' />
      <HeroContent>
        <HeroH1> Baza Bar Tirana </HeroH1>
        <HeroP> 
          You bring the company, we bring the rest.
        </HeroP>
        <HeroBtnWrapper>
          <Button primary to='about' smooth={true} duration={500} spy={true} exact="true" offset={-80} onMouseEnter={onHover} onMouseLeave={onHover}>
            Mëso më shumë <ArrowRight hover={hover}/>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection