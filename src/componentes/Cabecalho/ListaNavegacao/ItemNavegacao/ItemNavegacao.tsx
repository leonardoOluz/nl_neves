import styled from "styled-components";

const ItemEstilizado = styled.li`
    border-bottom: 1px solid ${({ theme }) => theme.cores.primaria};
    width: 60%;
    &:last-child{
        border: none;
    }
    @media screen and (min-width: 660px){
        border: none;
    }
`;

interface PropsItemNavegacao {
    children: React.ReactNode
}

export const ItemNavegacao = ({ children }: PropsItemNavegacao) => {
    return (<ItemEstilizado>{children}</ItemEstilizado>)
}