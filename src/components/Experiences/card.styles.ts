import { theme } from "@/lib/theme";
import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 32px;
  }
  h4 {
    font-size: 18px;
  }

  p {
    margin-top: 20px;
  }
  .timeline_line {
    height: 2px;
    width: 100%;
    background-color: ${theme.colors.light};
    transform: rotate(180deg);
    min-width: 68px;
  }

  .timeline_wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    justify-items: center;
    gap: 20px;
  }
`;
