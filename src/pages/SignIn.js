import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Form, Input, Button } from 'antd';
import AuthFormContainer from '../components/layout/AuthFormContainer';
import Container from '../components/layout/Container';
import Logo from '../components/layout/Logo';

const SignIn = () => {
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

              <Form.Item label="Senha:" name="password" rules={[
                { required: true, message: 'Por favor, insira sua senha!' }
              ]}>
                <Input.Password disabled={isLoading} placeholder="Digite a senha..." />
              </Form.Item>

              <StyledButton loading={isLoading} type="primary" htmlType="submit">
                Entrar
              </StyledButton>
            </StyledForm>
          </AuthFormContainer>
        </Col>
      </Row>
    </Container>
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

export default SignIn;
