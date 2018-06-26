import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 120px;
  background-color: #56b5a7;
  overflow: hidden;
`;
const Header = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Content = styled('div')`
  color: #292929;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.75);
`;

const TrainingBox = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default TrainingBox;
