import React from 'react';
import Navbar from '../../layouts/navbar/Navbar';
import Alert from '@/components/alert/Alert';
import styled from 'styled-components';
import Card from '@/components/card/Card';

const StyledHome = styled.div`
  height: 200vh;
`;

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Navbar />
      <Alert />
      <Card />
    </StyledHome>
  );
};

export default Home;
