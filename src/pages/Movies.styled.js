import styled from "styled-components";

export const Wrapper = styled.form`
  margin-bottom: 16px;
`;

export const Header = styled.h1`
    color: orangered;
    margin: 1rem 0px;
    display: block;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 10px;
  border: orangered 1px solid;
  font: inherit;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  background-color: black;

  &:hover {
    color: white;
    background-color: orangered;
  }

  &:disabled {
    /* color: gray; */
    background-color: gray;
    cursor: not-allowed;
  }
`;
