import styled from 'styled-components';
import { IoIosChatbubbles } from "react-icons/io";

function Logo({ small = false }) {
  return (
    <LogoContainer small={small}>
      <ChatIcon smallIcon={small} />inChatting
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${(props) => props.small ? '1.8em' : '2.6em'};
  font-weight: bold;
  color: #353535;
`;

const ChatIcon = styled(IoIosChatbubbles)`
  color: #284B63;
  font-size: ${(props) => props.smallIcon ? '35px' : '55px'};
`;
