import React from 'react';
import styled from 'react-emotion';
import uniqId from 'uniqid';

import { Wrapper, Header, Tasks, Task } from './Shared';
import { Circle } from './CountCircle';

const CurrentCircle = styled(Circle)`
  position: ${({ showTasks }) => (showTasks ? 'absolute' : 'unset')};
  top: -40px;
  left: 30px;
  @media screen and (max-width: 768px) {
    top: 0;
    left: -35px;
  }
`;

const CurrentTask = styled(Task)`
  background-color: white;
  padding: 8px 30px;
  margin-bottom: 0;
  margin-top: 4px;
  &::before {
    background-color: #0fc440;
    top: 13px;
  }
`;

const CurrentTaskTitle = styled('span')`
  display: block;
  color: #0fc440;
  font-weight: 600;
  line-height: 15px;
  margin-bottom: 5px;
`;

const CurrentTodo = styled('span')`
  display: block;
  font-weight: 500;
  color: #292929;
  margin-bottom: 5px;
`;

/**
 * tasks object = {
 *  name: String
 *  todos: [
 *    String
 *  ]
 *  done: Boolean
 *  active: Boolean
 * }
 */

const CurrentSession = ({ title, count, tasks, showTasks, onClick }) => {
  return showTasks ? (
    <Wrapper>
      {count && (
        <CurrentCircle isActive showTasks={showTasks}>
          {count}
        </CurrentCircle>
      )}
      <Header>{title}</Header>
      <Tasks>
        {tasks &&
          tasks.map(({ name, todos, done, active }) => {
            if (active)
              return (
                <CurrentTask key={uniqId()}>
                  <CurrentTaskTitle>{name}</CurrentTaskTitle>
                  {todos &&
                    todos.map(todo => {
                      return <CurrentTodo key={uniqId()}>{todo}</CurrentTodo>;
                    })}
                </CurrentTask>
              );
            return <Task key={uniqId()}>{name}</Task>;
          })}
      </Tasks>
    </Wrapper>
  ) : (
    <CurrentCircle isActive showTasks={showTasks} onClick={onClick}>
      {count}
    </CurrentCircle>
  );
};

export default CurrentSession;
