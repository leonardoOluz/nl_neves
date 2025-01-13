import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { useHandleScroll } from "../../hooks/useHandleScroll";
import { FaChevronUp } from "react-icons/fa";

const BotaoToEstilizado = styled.button`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  bottom: 1.5rem;
  right: 1.5rem;
  font-weight: 600;
  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.cores.terciario};
  color: ${({ theme }) => theme.cores.preto};
  cursor: pointer;
  transition: transform 1200ms;
  svg{
    display: block;
  }

  &:hover{
    transform: scale(1.1);
    background-color: rgba(0, 0, 0, .2);
  }
`;

export const BotaoTop = () => {
  const { isButtonVisible } = useHandleScroll();
  const scrollTop = () => {
    scroll.scrollToTop();
  }

  return (<>
    {isButtonVisible && <Link
      to="home"
      smooth={true}
      duration={900}
    >
      <BotaoToEstilizado
        onClick={scrollTop}
      >
        <FaChevronUp size={25} />
        Topo
      </BotaoToEstilizado>
    </Link>}</>)
};