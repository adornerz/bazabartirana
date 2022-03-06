import React from 'react'
import { 
    VisitContainer, 
    VisitWrapper, 
    Heading,
    LocationContainer,
    LocationImg,
    LocationTxt,
    MapContainer,
    Map
    } from './VisitElements'
const VisitUsSection = () => {
    return (
        <VisitContainer id='visit'>
            <VisitWrapper>
                <Heading>
                    Na Vizitoni!
                </Heading>
                <LocationContainer>
                    <LocationImg />
                    <LocationTxt href="https://goo.gl/maps/Z7hyS5CoxrGuSbq6A">
                    Rruga Gjin Bue Shpata 10, Tirana 1001, Albania
                    </LocationTxt>

                </LocationContainer>
                <MapContainer>
                <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.447588740441!2d19.809355815582318!3d41.3208795792704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350316ec38253b1%3A0xb24fc6c5bf133149!2sBaza%20Bar!5e0!3m2!1sen!2s!4v1646424646875!5m2!1sen!2s"
                    allowfullscreen=""
                    loading="lazy">
                </Map>
                </MapContainer>
            </VisitWrapper>
        </VisitContainer>
    )
}

export default VisitUsSection