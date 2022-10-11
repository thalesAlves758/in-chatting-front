import React, { useState } from 'react';
import { Form, Input, Button, Space, message } from 'antd';
import Container from '../components/layout/Container';
import Logo from '../components/layout/Logo';
import { useNavigate } from 'react-router-dom';
import Display from '../components/layout/Display';
import AppInfo from '../components/AppInfo';
import { LogoContainer, StyledButton, StyledForm, AuthContainerCol } from '../components/layout/AuthForm';
import axios from 'axios';

const SignUpForm = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const showErrorMessage = (errorMessage) => {
    message.error(errorMessage);
  }

  const showSuccessLoginMessage = () => {
    message.success('Cadastro realizado com sucesso!', 1.8).then(() => message.info('Efetue o login.'));
  }
  const getErrorMessageByStatusCode = (statusCode) => {
    const hashErrors = {
      409: 'Este e-mail já está sendo usado!',
      500: 'Erro no servidor',
    }

    return hashErrors[statusCode] || 'Erro desconhecido';
  }

  const onFinish = async () => {
    setIsLoading(true);

    try {
      await axios.post('http://localhost:5000/sign-up', {
        ...form.getFieldsValue()
      });

      showSuccessLoginMessage();

      navigate('/sign-in');
    } catch (error) {
      let errorMessage = 'Não foi possível concluir a operação';

      if (error.response) {
        errorMessage = getErrorMessageByStatusCode(error.response.status);
      }

      showErrorMessage(errorMessage);
      setIsLoading(false);
    }
  }

  return (
    <StyledForm form={form} onFinish={onFinish} name='sign-in' autoComplete='off' layout='vertical' requiredMark={false}>
      <LogoContainer>
        <Logo small={true} />
      </LogoContainer>

      <Form.Item label="E-mail:" name="email" rules={[
        { required: true, message: 'Por favor, insira um e-mail válido!', type: 'email' }
      ]}>
        <Input disabled={isLoading} placeholder='Digite seu email...' />
      </Form.Item>

      <Form.Item label="Nome:" name="firstName" rules={[
        { required: true, message: 'Por favor, insira um nome!', type: 'string' }
      ]}>
        <Input disabled={isLoading} placeholder='Digite seu nome...' />
      </Form.Item>

      <Form.Item label="Sobrenome:" name="lastName" rules={[
        { required: true, message: 'Por favor, insira um sobrenome!', type: 'string' }
      ]}>
        <Input disabled={isLoading} placeholder='Digite seu sobrenome...' />
      </Form.Item>

      <Form.Item label="Senha:" name="password" rules={[
        { required: true, message: 'Por favor, insira sua senha!' }
      ]}>
        <Input.Password disabled={isLoading} placeholder="Digite a senha..." />
      </Form.Item>

      <Form.Item label="Confirme a senha:" name="confirmPassword" dependencies={['password']} rules={[
        { required: true, message: 'As senhas devem ser iguais!' }, ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }

            return Promise.reject(new Error('As senhas devem ser iguais!'));
          },
        }),
      ]}>
        <Input.Password disabled={isLoading} placeholder="Digite a mesma senha..." />
      </Form.Item>

      <StyledButton loading={isLoading} type="primary" htmlType="submit">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
}

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Display>
        <AppInfo />
        <AuthContainerCol lg={6} span={24}>
          <SignUpForm />

          <Space direction='vertical' align='center'>
            Já possui uma conta?<Button onClick={() => navigate('/sign-in')} type="link">Entre</Button>
          </Space>
        </AuthContainerCol>
      </Display>
    </Container >
  );
}

export default SignUp;
