import styled from 'styled-components'
import { HiOutlineLocationMarker } from 'react-icons/hi'

export const VisitContainer = styled.div`
    background: #0f0e17;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
    position: relative;
    z-index: 1;
`

export const VisitWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = styled.h1`
    font-size: 48px;
    color: #fffffe;
    padding: 20px 0;
`

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const LocationImg = styled(HiOutlineLocationMarker)`
    font-size: 22px;
    color: #a7a9be;
    padding-right: 5px;
`

export const LocationTxt = styled.a`
    font-size: 18px;
    color: #a7a9be;
    text-decoration: none;
`

export const Map = styled.iframe`
    width: 100%;
    height: auto;
    border: none;
    padding: 12px 0;
`

export const MapContainer = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
`
