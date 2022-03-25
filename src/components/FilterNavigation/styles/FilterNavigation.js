import styled from "styled-components";

export const Filter = styled.div`
  border-bottom: 2px #555555 solid;
  button {
    color: white;
    background-color: #232323;
    text-transform: uppercase;
    border: 3px solid #232323;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #f65261;
    }
  }
`;

export const Navigation = styled.div`
  max-width: 1300px;
  padding: 2em 4em;
  padding-bottom: 0;
  margin: 0 auto;
  justify-content: space-between;
`;

export const SortNavigation = styled.div`
  background-color: #232323;
  color: white;
  padding: 1rem;
  text-transform: uppercase;
  option {
    background-color: #232323;
    text-transform: uppercase;
  }
`;
