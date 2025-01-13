import styled from "styled-components"
 
export const LinkEstilizado = styled.a<{ $image?: string }>`
  display: block;
  margin-top: 1rem;
  background-image: url(${({ $image }) => $image});
  background-size: contain;
  border-radius: 45%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
`;

export const SpanEstilizado = styled.span`
  display: none;
`;