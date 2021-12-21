// -------------------------------------------------
// packages
// -------------------------------------------------
import styled from "styled-components";

// -------------------------------------------------
// types
// -------------------------------------------------
import { ITagProps, IContainerProps } from "../types";

export const Container = styled.li<IContainerProps>`
  background-color: ${(props) => props.color};

  list-style: none;
  border-radius: 5px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 10px;
  }
`;

export const Tag = styled.div<ITagProps>`
  width: 10px;
  height: 60%;

  background-color: ${(props) => props.color};

  position: absolute;
  left: 0;
`;
