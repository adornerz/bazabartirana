import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from './NavbarElements'
import Link from 'next/link'
import data from './navbar.data'

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Link href='/' passHref>
                        <NavLogo>
                            Baza
                        </NavLogo>
                    </Link>
                    <MobileIcon >
                        <FaBars onClick={() => props.toggle()}/>
                    </MobileIcon>
                    <NavMenu>
                        {
                            data.map(({text, to}, i) => (
                        <NavItem key={i}>
                            <NavLink to={to} smooth={true} duration={500} spy={true} exact="true" offset={-80}> {text} </NavLink>
                        </NavItem>
                            ))
                        }
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar