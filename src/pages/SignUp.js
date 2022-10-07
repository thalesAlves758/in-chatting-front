import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Form, Input, Button, Space } from 'antd';
import AuthFormContainer from '../components/layout/AuthFormContainer';
import Container from '../components/layout/Container';
import Logo from '../components/layout/Logo';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onFinish = () => {
    setIsLoading(true);

    console.log(form.getFieldsValue());
  }

  return (
    <Container>
      <Row justify='center'>
        <Col lg={6} span={20}>
          <AuthFormContainer>
            <Logo />

            <StyledForm onFinish={onFinish} form={form} autoComplete='off' name='signIn' layout='vertical' requiredMark={false}>
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

              <Form.Item label="Url da imagem de perfil:" name="photoUrl" rules={[
                { required: true, message: 'Por favor, insira uma url válida!', type: 'url' }
              ]}>
                <Input disabled={isLoading} placeholder='Digite uma url...' />
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
                Entrar
              </StyledButton>

              <StyledSpace direction='vertical' align='center'>
                Já possui uma conta?<Button onClick={() => navigate('/sign-in')} type="link">Entrar</Button>
              </StyledSpace>
            </StyledForm>
          </AuthFormContainer>
        </Col>
      </Row>
    </Container >
  );
}

const StyledForm = styled(Form)`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: calc(100% - 2 * 40px);
  margin: 0 auto;
  background-color: #284B63;
  border: 1px solid #284B63;
  border-radius: 3px;
`;

const StyledSpace = styled(Space)`
  margin-top: 20px;
`;

export default SignUp;
