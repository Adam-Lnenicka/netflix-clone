import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonMain = styled.button`
  background-color: #f65261;
  color: white;
  border: none;
  padding: 0.9em 4.4em;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
`;

export const ButtonSecondary = styled.button`
  background-color: #232323;
  color: #f65261;
  border: 1px solid #f65261;
  padding: 0.9em 4.4em;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonBasic = styled.button`
  color: white;
  background-color: #232323;
  border-radius: 4px;
  border: 0.1px solid white;
  margin-left: 3em;
  align-self: flex-start;
  padding: 0.5em 1em;
`;

export const ButtonExit = styled(Link)`
  background-color: #f65261;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const ButtonAdd = styled(Link)`
  background-color: #f65261;
  color: white;
  border: none;
  padding: 0.9em 4.4em;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 2em;
  right: 4em;
`;
