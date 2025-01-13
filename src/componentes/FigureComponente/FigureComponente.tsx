import styled from "styled-components";

const FiguraEstilizada = styled.figure`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  
  @media screen and (min-width: 660px){
    max-width: 600px;
    flex-direction: row;
  }
`;

interface PropsFigureComponente {
  children: React.ReactNode;
};
export const FigureComponente = ({ children }: PropsFigureComponente) => {
  return (<FiguraEstilizada>{children}</FiguraEstilizada>)
};