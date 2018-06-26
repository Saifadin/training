import React from 'react';
import styled from 'react-emotion';

import TrainingBox from '../components/TrainingBox';
import CountCircle from '../components/CountCircle';
import CurrentSession from '../components/CurrentSession';

const Wrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  background-color: #292929;
  color: #ffffff;
  padding: 8px 45px 30px;
`;

const ProgressionLine = styled('div')`
  position: absolute;
  top: 22px;
  left: 120px;
  width: calc(100% - 210px);
  height: 4px;
  background: linear-gradient(
    to right,
    rgb(235, 236, 241, 0.25) 0,
    rgba(235, 236, 241, 0.25) ${({ progression = 50 }) => progression}%,
    rgb(235, 236, 241) ${({ progression = 50 }) => progression}%,
    rgb(235, 236, 241) 100%
  );
  @media screen and (max-width: 768px) {
    top: 60px;
    left: calc(50% - 2px);
    width: 4px;
    height: calc(100% - 125px);
    background: linear-gradient(
      to bottom,
      rgb(235, 236, 241, 0.25) 0,
      rgba(235, 236, 241, 0.25) ${({ progression = 50 }) => progression}%,
      rgb(235, 236, 241) ${({ progression = 50 }) => progression}%,
      rgb(235, 236, 241) 100%
    );
  }
`;

const ProgressionSteps = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    > * {
      margin-bottom: 30px;
    }
  }
`;

const Progression = () => {
  const activeTask = [
    {
      name: 'Build out your page',
      done: true,
      active: false,
    },
    {
      name: 'Rev up your page',
      done: true,
      active: false,
    },
    {
      name: 'Reach your clients and referral partners',
      done: false,
      active: true,
      todos: ['Get out there and use it', 'Pitch it'],
    },
  ];
  return (
    <Wrapper>
      <ProgressionLine progression={50} />
      <ProgressionSteps>
        <TrainingBox title="Cycle 2">Designing your brand</TrainingBox>
        <CountCircle count={1} description="Your image" isDone />
        <CountCircle count={2} description="Social media sells" isDone />
        <CurrentSession count={3} title="Know your progresses and programs" tasks={activeTask} />
        <CountCircle count={4} />
        <CountCircle count={5} description="Understand your market to explode your business" />
      </ProgressionSteps>
    </Wrapper>
  );
};

export default Progression;
