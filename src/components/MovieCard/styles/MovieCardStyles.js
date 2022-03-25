import styled from "styled-components";

export const Card = styled.section`
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  line-height: 1.8em;

  button {
    color: white;
    background-color: #232323;
    border-radius: 4px;
    border: 0.1px solid white;
    margin-left: 3em;
    align-self: flex-start;
    padding: 0.5em 1em;
  }
`;
