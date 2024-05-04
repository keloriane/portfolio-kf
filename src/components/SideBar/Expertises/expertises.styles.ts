import styled from "styled-components";

export const ExpertiseContainer = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 20px;
  flex-wrap: wrap;
  .tech {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .tech div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
`;
