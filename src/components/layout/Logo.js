import styled from 'styled-components';
import { IoIosChatbubbles } from "react-icons/io";

function Logo() {
  return (
    <LogoContainer>
      <ChatIcon />inChatting
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.8em;
  font-weight: bold;
  color: #353535;
`;

const ChatIcon = styled(IoIosChatbubbles)`
  color: #284B63;
  font-size: 35px;
`;
