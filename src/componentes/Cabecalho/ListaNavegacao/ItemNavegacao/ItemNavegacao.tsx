import styled from "styled-components";

const ItemEstilizado = styled.li``;

interface PropsItemNavegacao {
    children: React.ReactNode
}

export const ItemNavegacao = ({ children }: PropsItemNavegacao) => {
    return (<ItemEstilizado>{children}</ItemEstilizado>)
}