import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import img from '../../assets/logo.png';
import { Container, Content, Background, ClickableText } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [campoName, setCampoName] = useState();

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current !== null
        ? formRef.current.setErrors({})
        : console.log('nada');

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-Mail obrigatório')
          .email('Digite um e-mail válido.'),
        password: Yup.string().min(6, 'No minimo 6 caracteres'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.log(err);
      const errors = getValidationErrors(err);

      formRef.current !== null
        ? formRef.current.setErrors(errors)
        : console.log('nada');
    }
  }, []);

  useEffect(() => {
    console.log(campoName);
  }, [campoName]);

  function handleOnChange(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <span>
            <p>Criar sua conta</p>

            <a href="">
              <p>ou </p> <p> &nbsp; realizar login.</p>
            </a>
          </span>
          <Input
            icon={FiUser}
            type="text"
            name="name"
            placeholder="Nome"
            value={campoName}
            onChange={() => {
              console.log(campoName);
            }}
          />
          <Input icon={FiMail} type="text" name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Repita a Senha"
          />
          <div className="botoes">
            {' '}
            <div className="checkbox">
              {' '}
              <input type="checkbox" id="saveuser" name="saveuser" />
              <label htmlFor="saveuser">Confirmo os </label>
              <ClickableText>&nbsp; termos. </ClickableText>
            </div>
            <Button type="submit">Cadastrar</Button>
          </div>
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

export default SignUp;
