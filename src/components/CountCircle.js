import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: unset;
    position: relative;
  }
`;

const styles = {
  active: {
    bg: '#0fc440',
    color: '#ffffff',
  },
  done: {
    bg: '#2ca8ff',
    color: '#ffffff',
  },
};

export const Circle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  max-height: 30px;
  min-height: 30px;
  max-width: 30px;
  min-width: 30px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ isDone, isActive }) => {
    if (isActive) return styles['active'].color;
    if (isDone) return styles['done'].color;
    return '#292929';
  }};
  background-color: ${({ isDone, isActive }) => {
    if (isActive) return styles['active'].bg;
    if (isDone) return styles['done'].bg;
    return '#ffffff';
  }};
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Description = styled('div')`
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.25;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 40px;
    width: 120px;
    text-align: left;
  }
`;

const CountCircle = ({ className, count, description, isDone, isActive }) => {
  return (
    <Wrapper className={className}>
      <Circle isDone={isDone} isActive={isActive}>
        {count}
      </Circle>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default CountCircle;
