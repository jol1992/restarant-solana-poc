import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  color: white;
  flex: 1;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    right: 50%;
    top: 0;
    height: 100%;
    border-bottom: 2px solid #e8e4f5;
    z-index: -1;
    border-radius: 1px;
    animation: ;
  }

  &:hover:after {
    animation: animateUnderline 0.5s forwards;
  }

  @keyframes animateUnderline {
    0% {
      left: 50%;
      right: 50%;
    }
    100% {
      left: 0;
      right: 0;
    }
  }
`;
export const MenuButton: FC<{ text: string }> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};
