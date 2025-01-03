import React from "react";
import styled from "styled-components"

const BotaoEstilizado = styled.button`
  position: relative;
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