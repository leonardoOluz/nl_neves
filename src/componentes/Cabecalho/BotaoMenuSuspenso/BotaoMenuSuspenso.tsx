import styled from "styled-components";
import React from "react";

const BotaoEstilizado = styled.button`
  box-sizing: border-box;
  width: 20%;
  z-index: 1;
`;
interface PropsBotaoMenuSuspenso {
  children: React.ReactNode;
  handleClick: () => void
  ariaLabel?: string
}
export const BotaoMenuSuspenso = ({ children, handleClick, ariaLabel }: PropsBotaoMenuSuspenso) => {
  return (<BotaoEstilizado aria-label={ariaLabel} onClick={handleClick}>
    {children}
  </BotaoEstilizado>)
}