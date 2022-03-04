import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
import data from '../Navbar/navbar.data'

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
        <Icon>
            <CloseIcon onClick={() => props.toggle()}/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
              {
                data.map(({text, to}, i) => (
                <SidebarLink key={i} to={to} onClick={props.toggle} 
                smooth={true} duration={500} spy={true} exact="true" offset={-80}> 
                {text} </SidebarLink>
                ))
              }
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar