import React from 'react';
import styled from 'styled-components';
import ChangeLanguage from '@/components/change-lang/ChangeLanguage';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: var(--background-color);
  padding: 8px 22px;

  button {
    color: var(--color-primary);
  }
`;

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <ChangeLanguage />
    </StyledNavbar>
  );
};

export default Navbar;
