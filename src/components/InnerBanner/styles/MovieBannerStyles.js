import styled from "styled-components";

export const MovieBanner = styled.section`
  background-image: url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-color: rgba(8, 8, 8, 0.658);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: bottom;
  position: relative;
  padding: 8em 0;

  input {
    background-color: #555555;
    padding: 0.9em 0.9em;
    border-radius: 5px;
    border: none;
    width: 100%;
    margin-right: 5px;
  }
`;

export const InnerBanner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  padding: 6em 4em;
`;

export const InnerBannerForm = styled.div`
  display: flex;
  margin-top: 2em;
`;

export const MovieContainer = styled.div`
  background-color: rgb(29, 23, 23);
`;

export const MovieDetailsImage = styled.img`
  width: 30%;
  height: 60vh;
  min-height: 300px;
  object-fit: cover;
  margin-right: 4rem;
`;

export const MovieRating = styled.span`
  border: 1px white solid;
  color: rgb(84, 133, 84);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-left: 3rem;
`;

export const Runtime = styled.span`
  p {
    color: #f65261;
    padding: 1rem 0;
    padding-left: 1rem;
    display: flex;
  }
`;
