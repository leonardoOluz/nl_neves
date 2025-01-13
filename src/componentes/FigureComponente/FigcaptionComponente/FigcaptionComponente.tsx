import styled from "styled-components";

const FigcaptionEstilizado = styled.figcaption`
    max-width: 450px;
    box-sizing: border-box;
    padding: ${({ theme }) => theme.espacamentos.m};
    gap: ${({ theme }) => theme.espacamentos.m};
    display:flex;
    flex-direction: column;
    
    h3 {
        color: ${({ theme }) => theme.cores.terciario};
    }

    @media screen and (min-width: 660px){
      padding-left: ${({ theme }) => theme.espacamentos.l};
      padding-right: ${({ theme }) => theme.espacamentos.s};
      
    }
`;

interface PropsFigcaptionServico {
    children: React.ReactNode
}

export const FigcaptionComponente = ({ children }: PropsFigcaptionServico) => {
    return (<FigcaptionEstilizado>{children}</FigcaptionEstilizado>)
};