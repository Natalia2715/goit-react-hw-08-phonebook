import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 300px;
  padding: 20px;
  margin-left: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;
export const Button = styled.button`
  width: 120px;
  padding: 10px 15px;
  background-image: linear-gradient(
    to right,
    rgba(58, 159, 241, 0.551) 35%,
    rgba(0, 255, 208, 0.551)
  );
  border-radius: 4px;
  border-color: transparent;
  cursor: pointer;
  transition: transform 250ms linear;
  &:hover {
    transform: scale(0.8);
  }
`;
export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: rgb(33, 33, 243);
  }
`;
