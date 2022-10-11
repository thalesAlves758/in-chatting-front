import { Button, Col, Form } from "antd";
import styled from "styled-components";

export const AuthContainerCol = styled(Col)`
  background-color: #e4e4e4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 990px) {
    background-color: transparent;
  }
`;

export const StyledButton = styled(Button)`
  width: calc(100% - 2 * 40px);
  margin: 0 auto;
  background-color: #284B63;
  border: 1px solid #284B63;
  border-radius: 5px;
`;

export const LogoContainer = styled.div`
  @media (min-width: 990px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
