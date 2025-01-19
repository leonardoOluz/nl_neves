import styled from "styled-components"
 
export const LinkEstilizado = styled.a<{ $image?: string }>`
  display: block;
  margin-top: 1rem;
  background-image: url(${({ $image }) => $image});
  background-size: contain;
  border-radius: 45%;
  height: 7rem;
  width: 7rem;
  box-shadow: 10px 14px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 200ms;

  &:hover{
    transform: scale(1.1);
  }
`;

export const SpanEstilizado = styled.span`
  display: none;
`;