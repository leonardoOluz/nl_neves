import React from "react";
import styled from "styled-components"

const BotaoEstilizado = styled.button`
  
`;

interface PropsBotaoMenuSuspenso {
  children: React.ReactNode;
  handleClick: () => void
}

export const BotaoMenuSuspenso = ({children, handleClick}: PropsBotaoMenuSuspenso) => {
  return (<BotaoEstilizado onClick={handleClick}>
    {children}
  </BotaoEstilizado>)
}