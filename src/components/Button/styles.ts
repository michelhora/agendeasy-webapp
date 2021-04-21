import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
background-color: #f1f2f5;
border-radius: 5px;
height: 50px;
width: 50%;
display: flex;
align-items: center;
border-color: transparent;
justify-content: center;
color: #2b90d9;
cursor: pointer;




  transition: background-color: 0.2s;



  &:hover {
    background: ${shade(0.1, '#f1f2f5')};

}
`;
