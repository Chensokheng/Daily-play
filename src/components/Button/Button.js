import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#1CA1F2' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  border: None;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 10px 25px;
  letter-spacing: 3px;
`;
export default Button;
