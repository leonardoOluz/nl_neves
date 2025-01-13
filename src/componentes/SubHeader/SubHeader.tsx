import styled from "styled-components"

const HeaderEstilizado = styled.header`
  text-align: center;
  padding: ${({theme}) => theme.espacamentos.l};
`;

interface PropsHeader {
  children: React.ReactNode
}

export const SubHeader = ({ children }: PropsHeader) => {
  return (<HeaderEstilizado>{children}</HeaderEstilizado>)
}