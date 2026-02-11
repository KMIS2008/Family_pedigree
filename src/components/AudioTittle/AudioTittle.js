import React, { useRef } from 'react';
import { Title } from '../Title/Title.styled'; // импорт вашего стилизованного компонента Tittle
import bells from '../../audio/church-bells-194653.mp3';

export const AudioTittle = ({ children, ...props }) => {
  const audioRef = useRef(new Audio(bells));

  const handleMouseEnter = () => {
    // Запускаем аудио при наведении
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    // Останавливаем аудио, если нужно (или можно оставить играть)
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <Title 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      {...props}
    >
      {children}
    </Title>
  );
};