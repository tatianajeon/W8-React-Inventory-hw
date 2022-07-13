import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import golfball from '../assets/images/golfball.jpg';
import golfwoman from '../assets/images/golfwoman.jpg';
import { Link } from 'react-router-dom';

interface Props{
    title:string;
}

const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black', 
    opacity: '0.75',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em',

})
const LogoA = styled(Link)( {
    color: '#96CEC1',
    listStyle: 'none',
    textDecoration: 'none', 
    fontFamily: 'OleoScriptSwashCaps-Regular'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    display: 'flex',
    fontFamily: 'times',
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: '#8EC2B7',
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${golfball});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'OleoScriptSwashCaps-Regular',
    color: '#96CEC1',
})





export const Home = ( props:Props) => {
 
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to="/">the perfect swing</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="/">home</NavA>
                    </li>
                    <li>
                        <NavA to="/dashboard">dashboard</NavA>
                    </li>
                    <li>
                        <NavA to="signin">sign in</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p> virtual golf bag </p>
                    <Button variant='contained'>golf clubs here</Button>
                </MainText>
            </Main>
        </Root>
    )
}

