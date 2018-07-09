import styled from 'react-emotion';

export const Wrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  background-color: white;
  border-radius: 10px;
`;

export const Header = styled('div')`
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

export const Tasks = styled('div')`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: rgba(44, 168, 255, 0.1);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;

export const Task = styled('div')`
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
