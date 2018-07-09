import React from 'react';
import styled from 'react-emotion';
import uniqId from 'uniqid';

import { Wrapper, Header, Tasks, Task } from './Shared';

const DoneWrapper = styled(Wrapper)`
  background-color: #2ca8ff;
`;

const DoneHeader = styled(Header)`
  background-color: unset;
  border-bottom: 1px solid white;
`;

const DoneTasks = styled(Tasks)`
  padding: 6px 0 8px;
`;

const DoneTask = styled(Task)`
  color: white;
  &::before {
    background-color: white;
  }
`;

const DoneSession = ({ title, tasks }) => {
  return (
    <DoneWrapper>
      <DoneHeader>{title}</DoneHeader>
      <DoneTasks>
        {tasks &&
          tasks.map(({ name }) => {
            return <DoneTask key={uniqId()}>{name}</DoneTask>;
          })}
      </DoneTasks>
    </DoneWrapper>
  );
};

export default DoneSession;
