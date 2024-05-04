import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;
  height: 100vh;
  border-right: 1px solid grey;
  padding: 10px;
  position: relative;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 20%;
  overflow-y: auto;
  min-width: 210px;

  .sidebaar__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  h2 {
    font-size: 18px;
    text-transform: uppercase;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
