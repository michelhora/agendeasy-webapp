import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import img from '../../assets/logo.png';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
interface signInFormData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: signInFormData) => {
      try {
        formRef.current?.setErrors({}); // eslint-disable-line @typescript-eslint/no-unused-expressions

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-Mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });
        console.log('aqui');

        signIn({ email: data.email, password: data.password });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors); // eslint-disable-line @typescript-eslint/no-unused-expressions
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <span>
            <p>Acessar sua conta</p>

            <a href="">
              <p>ou </p> <p> &nbsp; criar uma conta</p>
            </a>
          </span>
          <Input icon={FiMail} type="text" name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <div className="botoes">
            {' '}
            <div className="checkbox">
              {' '}
              <input type="checkbox" id="saveuser" name="saveuser" />
              <label htmlFor="saveuser">Manter logado</label>
            </div>
            <Button type="submit">Entrar</Button>
          </div>
          <a className="a" href="forgot">
            Esqueci minha senha
          </a>
        </Form>
      </Content>
      <Background>
        <div className="logo" />
        <div className="bg" />
        <div className="text">
          <p>
            Gerencie seu estabelecimento e clientes oferecendo agendamento e
            meio de pagamento digital utilizando o aplicativo exclusivo
            AgendEasy.
          </p>
        </div>
      </Background>
    </Container>
  );
};

export default SignIn;
