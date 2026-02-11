import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sprite from '../../images/sprite.svg';
import {ContainerSlider, ContainerSVG, SVG} from './PhotoSlider.styled';

const photos = [
  require("../../images/2.jpg"),
  require("../../images/3.jpg"),
  require("../../images/4.jpg"),
  require("../../images/5.jpg"),
  require("../../images/6.jpg"),
  require("../../images/7.jpg"),
  require("../../images/8.jpg"),
  require("../../images/9.jpg"),
  require("../../images/10.jpg"),
  require("../../images/11.jpg"),
  require("../../images/12.jpg"),
  require("../../images/13.jpg"),
  require("../../images/14.jpg"),
  require("../../images/15.jpg"),
  require("../../images/16.jpg"),
  require("../../images/17.jpg"),
  require("../../images/18.jpg"),
  require("../../images/19.jpg"),
  require("../../images/20.jpg"),
  require("../../images/31.jpg"),
  require("../../images/32.jpg"),
  require("../../images/33.jpg"),
  require("../../images/34.jpg"),
  require("../../images/35.jpg"),
  require("../../images/36.jpg"),
  require("../../images/37.jpg"),
  require("../../images/38.jpg"),
  require("../../images/39.jpg"),
  require("../../images/40.jpg"),
  require("../../images/41.jpg"),
  require("../../images/42.jpg"),
  require("../../images/43.jpg"),

];

const NextArrow = ({ onClick }) => {
    return (
      <ContainerSVG
        style={{
          right: "10px",
        }}
        onClick={onClick}
      >
         <SVG><use xlinkHref={sprite + '#icon-redo2'}></use></SVG>
      </ContainerSVG>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <ContainerSVG
        style={{
          left: "10px",
        }}
        onClick={onClick}
      >
        <SVG><use xlinkHref={sprite + '#icon-undo2'}></use></SVG>
      </ContainerSVG>
    );
  };
  
  
  export const PhotoSlider = () => {
    const [photoHeight, setPhotoHeight] = useState(500);

    const updatePhotoHeight = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1400) {
          setPhotoHeight(1000); // Высота для экрана свыше 1400px
        } else if (screenWidth > 768) {
          setPhotoHeight(800); // Высота для экрана от 768px до 1400px
        } else {
          setPhotoHeight(500); // Высота для экрана до 768px
        }
      };

      useEffect(() => {
        updatePhotoHeight(); // Вызываем функцию при загрузке компонента
        window.addEventListener("resize", updatePhotoHeight); // Слушатель изменения размера окна
    
        return () => {
          window.removeEventListener("resize", updatePhotoHeight); // Удаляем слушатель при размонтировании
        };
      }, []);

    const settings = {
      dots: false, // Отключаем точки
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />, // Передаем кастомную кнопку вперед
      prevArrow: <PrevArrow />, // Передаем кастомную кнопку назад
    };
  
    return (
      <ContainerSlider>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Фото ${index + 1}`}
                style={{ width: "100%", 
                         height: `${photoHeight}px`, 
                         objectFit: "cover", 
                         borderRadius: "10px" }}
              />
            </div>
          ))}
        </Slider>
      </ContainerSlider>
    );
  };