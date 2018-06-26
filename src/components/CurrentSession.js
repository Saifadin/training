import React from 'react';
import styled from 'react-emotion';
import uniqId from 'uniqid';

import { Circle } from './CountCircle';

const Wrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  background-color: white;
  border-radius: 10px;
`;

const CurrentCircle = styled(Circle)`
  position: absolute;
  top: -40px;
  left: 30px;
  @media screen and (max-width: 768px) {
    top: 0;
    left: -35px;
  }
`;

const Header = styled('div')`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 30px;
  color: #ffffff;
  background-color: #0fc440;
  font-size: 10px;
  font-weight: 600;
  border-radius: 10px 10px 0 0;
  text-transform: uppercase;
`;

const Tasks = styled('div')`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: rgba(44, 168, 255, 0.1);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;

const Task = styled('div')`
  display: block;
  position: relative;
  width: 100%;
  padding: 4px 30px;
  color: #2ca8ff;
  line-height: 15px;
  font-weight: 500;
  &:first-child {
    margin-top: 3px;
  }
  &::before {
    position: absolute;
    display: block;
    content: '';
    height: 4px;
    width: 4px;
    left: 14px;
    top: 10px;
    border-radius: 100%;
    background-color: #2ca8ff;
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

const CurrentSession = ({ title, count, tasks }) => {
  return (
    <Wrapper>
      {count && <CurrentCircle isActive>{count}</CurrentCircle>}
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
  );
};

export default CurrentSession;
