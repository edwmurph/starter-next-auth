import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <StyledFooter className='footer'>
      <span>footer</span>
    </StyledFooter>
  );
};

export default Footer;
