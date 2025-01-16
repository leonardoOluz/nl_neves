import styled from "styled-components";

const MainEstilizado = styled.main`
`;

interface PropsMain {
  children: React.ReactNode
}

export const Main = ({ children }: PropsMain) => {
  return (<MainEstilizado>{children}</MainEstilizado>)
};
