import { Col } from "antd";
import styled from "styled-components";

const AuthContainerCol = styled(Col)`
  background-color: #e4e4e4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 990px) {
    background-color: transparent;
  }
`;

export default AuthContainerCol;
