import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WorkContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.dark};
  padding-bottom: 20px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
