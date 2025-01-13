import styled from "styled-components";

const MainEstilizado = styled.main`
`;

interface PropsConteudoPrincipal {
  children: React.ReactNode
}

export const Main = ({ children }: PropsConteudoPrincipal) => {
  return (<MainEstilizado>{children}</MainEstilizado>)
};
