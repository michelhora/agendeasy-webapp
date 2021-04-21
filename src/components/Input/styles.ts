import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #2c9bec;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #d9e1e8;
  border: 2px solid #2b90d9;

  & + div {
    margin-top: 18px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ffffff;
      border: 2px solid #ffffff;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ffffff;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0px;
    color: #ffffff;
    ::placeholder {
      color: #ffffff;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
