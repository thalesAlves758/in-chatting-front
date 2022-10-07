import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify ? props.justify : 'flex-start'};
  align-items: ${(props) => props.align ? props.align : 'stretch'};
  padding: ${(props) => props.padding ? props.padding : '0px'};
`;

export default Container;
