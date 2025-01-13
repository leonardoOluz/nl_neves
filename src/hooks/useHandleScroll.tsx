import { useEffect, useState } from "react";

export const useHandleScroll = () => {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('home');
      if (section) {
        const scrollTop = window.scrollY;
        setIsButtonVisible(scrollTop > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    isButtonVisible
  }
}