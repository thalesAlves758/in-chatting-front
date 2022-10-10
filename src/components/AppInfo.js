import { Col, Row } from "antd";
import styled from "styled-components";
import Logo from "./layout/Logo";

const AppInfo = () => {
  return (
    <InfoContainer span={18}>
      <Row justify='center'>
        <Col span={20}>
          <InfoText>
            <Logo />
            inChatting é um app de batepapo com mensagens rápidas e criptografadas totalmente gratuito.
            <br />
            Cadastre-se já e comece a conversar com seus amigos!
          </InfoText>
        </Col>
      </Row>
    </InfoContainer>
  );
}

const InfoContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

const InfoText = styled.div`
  font-size: 1.4em;
  color: #353535;
`;

export default AppInfo;
