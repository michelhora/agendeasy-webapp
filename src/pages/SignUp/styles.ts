import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/signin.svg';
import logo from '../../assets/logo.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const ClickableText = styled.p`
      font-weight: 600;
      &: hover {
        color: ${shade(0.2, '#ffffff')};

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 850px;

  form {
    margin: 80px 0;
    padding: 0 36px;
    width: 540px;
    text-align: center;

    span {
      display: flex;
      justify-content: space-between;
      margin-bottom: 18px;
    }

    a {
      display: flex;
      color: #ffffff;
      text-decoration: none;
      justify-content: flex-end;
    }

    a p:nth-child(2) {
      font-weight: 600;
      &: hover {
        color: ${shade(0.2, '#ffffff')};
      }
    }

    .a {
      margin-top: 18px;
      padding: 0px;
      font-weight: 600;
      &: hover {
        color: ${shade(0.2, '#ffffff')};
      }
    }
  }

  .botoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
  }
  .checkbox {
    display: flex;
    align-items: center;
  }

  input#saveuser {
    width: 30px;
    height: 20px;
  }
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  background-color: #ffffff;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  .logo {
    flex: 1;
    display: flex;
    padding: 32px 0;
    max-height: 55px;
    justify-content: center;

    background: url(${logo}) no-repeat center;
  }

  .bg {
    flex: 1;
    background-color: #ffffff;
    background: url(${signInBackgroundImg}) no-repeat center;
    margin: 32px 0;
    height: 100%;
    max-height: 380px;
  }

  .text {
    flex: 1;
    display: flex;
    max-height: 140px;
    justify-content: center;

    p {
      color: #282c37;
      text-align: center;
      width: 550px;
      font-weight: 300;
    }
  }
`;
