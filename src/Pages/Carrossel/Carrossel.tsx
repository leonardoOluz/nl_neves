// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { useHandleResize } from '../../hooks/useHandleResize';
import { useEffect, useState } from 'react';
import { Imagem } from '../../componentes/Imagem/Imagem';
import { carrossel } from '../../componentes/ObjetoImagens/ObjetoImagens';

export const Carrosel = () => {
  const { width } = useHandleResize();
  const [sliderPerView, setSliderPerView] = useState<number>(2);

  useEffect(() => {
    if (width < 660) {
      setSliderPerView(1)
    }
    if (width >= 660) {
      setSliderPerView(2)
    }
    if (width >= 1024) {
      setSliderPerView(3)
    }
  }, [width])

  return (
    <Swiper
      modules={[Navigation, Scrollbar, Autoplay]}
      spaceBetween={5}
      slidesPerView={sliderPerView}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
    >
      {carrossel.map((item, index) => (
        <SwiperSlide key={index}>
          <Imagem src={item.img} alt={item.alt} secao='carrossel' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};