import styled from "styled-components";

export const Filter = styled.div`
  border-bottom: 2px $medium-grey solid;
  button {
    color: white;
    background-color: $light-black;
    text-transform: uppercase;
    border: 3px solid $light-black;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid $red;
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
  background-color: $light-black;
  color: white;
  border: 3px $light-black solid;
  padding: 1rem;
  text-transform: uppercase;
  option {
    background-color: $light-black;
    text-transform: uppercase;
  }
`;
