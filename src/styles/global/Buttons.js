import styled from "styled-components";

export const ButtonMain = styled.button`
  background-color: $red;
  color: white;
  border: none;
  padding: 0.9em 4.4em;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
`;

export const ButtonSecondary = styled.button`
  background-color: $light-black;
  color: $red;
  border: 1px solid $red;
  padding: 0.9em 4.4em;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonBasic = styled.button`
  color: white;
  background-color: $light-black;
  border-radius: 4px;
  border: 0.1px solid white;
  margin-left: 3em;
  align-self: flex-start;
  padding: 0.5em 1em;
`;
