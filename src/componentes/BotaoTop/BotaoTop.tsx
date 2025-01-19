import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { useHandleScroll } from "../../hooks/useHandleScroll";
import { FaHandPointUp } from "react-icons/fa";

const BotaoToEstilizado = styled.button`
  position: fixed;
  bottom: 10.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem ;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.cores.preto};
  color: ${({ theme }) => theme.cores.branco};
  box-shadow: 10px 14px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 200ms;

  &:hover{
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.cores.terciario};
  }
`;

export const BotaoTop = () => {
  const { isButtonVisible } = useHandleScroll();
  const scrollTop = () => {
    scroll.scrollToTop();
  }

  return (<>
    {isButtonVisible &&
      <BotaoToEstilizado
        onClick={scrollTop}
      >
        <Link
          to="home"
          smooth={true}
          duration={900}
        ></Link>
        <FaHandPointUp size={40} />
      </BotaoToEstilizado>
    }</>)
};