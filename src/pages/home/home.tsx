import React from 'react';
import Navbar from '../../layouts/navbar/Navbar';
import Alert from '@/components/alert/Alert';
import styled from 'styled-components';

const StyledHome = styled.div`
  height: 200vh;
`;

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Navbar />
      <Alert />
    </StyledHome>
  );
};

export default Home;
