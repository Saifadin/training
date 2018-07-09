import React from 'react';
import styled from 'react-emotion';
import DoneSession from './DoneSession';

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
    bg: '#ffffff',
    color: '#0fc440',
  },
  activeNoTasksShown: {
    bg: '#0fc440',
    color: '#ffffff',
  },
  done: {
    bg: '#2ca8ff',
    color: '#ffffff',
  },
};

export const Circle = styled('div')`
  cursor: pointer;
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
  color: ${({ isDone, isActive, showTasks }) => {
    if (isActive && !showTasks) return styles['activeNoTasksShown'].color;
    if (isActive) return styles['active'].color;
    if (isDone) return styles['done'].color;
    return '#292929';
  }};
  background-color: ${({ isDone, isActive, showTasks }) => {
    if (isActive && !showTasks) return styles['activeNoTasksShown'].bg;
    if (isActive) return styles['active'].bg;
    if (isDone) return styles['done'].bg;
    return '#ffffff';
  }};
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 0 2px 22px 0 rgba(44, 168, 255, 0.55);
  }
`;

const Description = styled('div')`
  width: 100%;
  text-align: center;
  color: rgba(235, 236, 241, 0.5);
  line-height: 1.25;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 40px;
    width: 120px;
    text-align: left;
  }
`;

const doneTasks = [
  {
    name: 'Strategies to work with top agents',
  },
  {
    name: 'Pitch it',
  },
  {
    name: 'Know what to delegate',
  },
];

const CountCircle = ({ className, count, description = '', isDone, isActive, onClick, showTasks }) => {
  return showTasks ? (
    <DoneSession title={`${count} - ${description}`} tasks={doneTasks} />
  ) : (
    <Wrapper className={className}>
      <Circle isDone={isDone} isActive={isActive} onClick={onClick}>
        {count}
      </Circle>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default CountCircle;
