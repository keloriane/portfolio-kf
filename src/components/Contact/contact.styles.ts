import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 150px;
  align-items: center;
  padding-bottom: 150px;
  h3 {
    max-width: 430px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .description_container {
    font-size: 20px;
    li {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .title__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .meeting__container {
    border: 1px solid ${theme.colors.dark};
    width: 100%;

    padding: 22px 15px;
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .meeting__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form__container {
    h2 {
      font-size: 48px;
    }
    h3 {
      font-size: 20px;
    }
  }
  .form__container {
  }

  .info__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
