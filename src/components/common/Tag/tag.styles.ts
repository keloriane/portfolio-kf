import { theme } from "@/lib/theme";
import styled from "styled-components";

export const TagContainer = styled.div`
  padding: 5px 8px;
  background-color: #eaeaea;
  border-radius: 30px;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;

  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
`;
