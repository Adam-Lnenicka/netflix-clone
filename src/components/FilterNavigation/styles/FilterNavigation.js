import styled from "styled-components";

export const FilterNavigation = styled.div`
  .filter-navigation {
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
  }
`;
