import styled from "styled-components";

const ItemEstilizado = styled.li`
    border-bottom: 1px solid ${({ theme }) => theme.cores.primaria};
    width: 60%;
    padding: .5rem 0;


    &:last-child{
        border: none;
    }

    @media screen and (min-width: 660px){
        border: none;
        border-right: 1px solid;
        border-color: ${({ theme }) => theme.cores.preto};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

interface PropsItemNavegacao {
    children: React.ReactNode
}

export const ItemNavegacao = ({ children }: PropsItemNavegacao) => {
    return (<ItemEstilizado>{children}</ItemEstilizado>)
}