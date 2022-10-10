import React, { useContext, useState } from 'react';
import { Button, Form, Input, message, Row, Space } from 'antd';
import styled from 'styled-components';
import Container from '../components/layout/Container';
import AppInfo from '../components/AppInfo';
import AuthContainerCol from '../components/layout/AuthContainerCol';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/layout/Logo';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

const SignInForm = () => {
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const showErrorMessage = (errorMessage) => {
    message.error(errorMessage);
  }

  const getErrorMessageByStatusCode = (statusCode) => {
    const hashErrors = {
      401: 'Email ou senha incorretos!',
    }

    return hashErrors[statusCode] || 'Erro desconhecido';
  }

  const onFinish = async () => {
    setIsLoading(true);

    try {
      const { data: user } = await axios.post('http://localhost:5000/sign-in', {
        ...form.getFieldsValue()
      });

      setUser(user);
      setIsLoading(false);
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

      <Form.Item label="Senha:" name="password" rules={[
        { required: true, message: 'Por favor, insira sua senha!' }
      ]}>
        <Input.Password disabled={isLoading} placeholder="Digite a senha..." />
      </Form.Item>

      <StyledButton loading={isLoading} type="primary" htmlType="submit">
        Entrar
      </StyledButton>
    </StyledForm>
  );
}

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Display>
        <AppInfo />
        <AuthContainerCol lg={6} span={24}>
          <SignInForm />

          <Space direction='vertical' align='center'>
            Não possui uma conta?<Button onClick={() => navigate('/sign-up')} type="link">Cadastre-se</Button>
          </Space>
        </AuthContainerCol>
      </Display>
    </Container>
  );
}

const Display = styled(Row)`
  height: 100vh;
`;

const StyledForm = styled(Form)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: calc(100% - 2 * 40px);
  margin: 0 auto;
  background-color: #284B63;
  border: 1px solid #284B63;
  border-radius: 5px;
`;

const LogoContainer = styled.div`
  @media (min-width: 990px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export default SignIn;
