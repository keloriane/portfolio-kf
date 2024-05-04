import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 20px;
  .headline {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
  h1 {
    font-size: 50px;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 20px !important;
      text-align: center;
    }
  }

  .profil__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    h2 {
      font-size: 30px;
    }
    ul {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 10px;
    }
  }
`;
