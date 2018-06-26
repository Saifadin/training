import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  height: 112px;
  width: 100%;
  background-color: #292929;
  color: #ffffff;
  padding: 38px 45px;
  @media screen and (max-width: 768px) {
    height: unset;
    padding: 22px 45px;
    justify-content: center;
  }
`;

const TitleArea = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const Title = styled('h1')`
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  text-transform: uppercase;
`;

const SubTitle = styled('h2')`
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
`;

const Header = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <TitleArea>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleArea>
    </Wrapper>
  );
};

export default Header;
