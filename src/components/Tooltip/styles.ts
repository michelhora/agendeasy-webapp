import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 180px;
    background: white;
    padding: 5px;
    border-radius: 8px 8px 8px 0px;
    font-size: 14px;
    font-weight: 500;
    /* opacity: 0;
    transition: opacity 0.5s; */

    position: absolute;
    bottom: calc(5%);
    left: 80%;

    color: red;
  }
`;
