import styled from 'styled-components';


export const Form = styled.form`
  display:flex;
  align-items: center;
  flex-direction: column;

`;

export const FormH1 = styled.h1 `
  font-size: 1rem;
  text-align: center;
  width: 75%;
  /* margin-bottom: 1rem; */
  color: #000;
`;

export const FormLabel = styled.span `
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #000;
  text-decoration: underline;
  padding-left: 5px;
`;

export const FormInput = styled.input `
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 10px;
  height: 35px;
  width: 150%;
  border: 1px solid #000;
  position: relative;
  left: 5px;
`;