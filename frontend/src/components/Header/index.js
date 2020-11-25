import React from 'react';
import {Logo, HeaderContainer } from './styles';

import ExternalLinkIcon from '../../assets/External_Link.png';

function Header(props) {

  return (
    <>
      <HeaderContainer>
        <Logo src={ExternalLinkIcon} alt='Pitu - Encurtador de URL'/>
        <h1>{props.children}</h1>
      </HeaderContainer>
    </>
  )
}

export default Header;