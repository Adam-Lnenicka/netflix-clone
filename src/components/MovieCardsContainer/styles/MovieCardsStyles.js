import styled from "styled-components";

export const CardLayout = styled.section`
  margin: 0 auto;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  padding: 6em 4em;

  @media (min-width: 800px) {
    .card-layout {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1300px) {
    .card-layout {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
