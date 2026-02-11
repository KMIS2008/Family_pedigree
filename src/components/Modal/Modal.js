import Modal from "react-modal";
import sprite from '../../images/sprite.svg';
import { useEffect, useState, useRef } from "react";
import { Container, SvgButton, Title, Text, ModalText, Button } from './Modal.styled';
import bells from '../../audio/church-bells-194653.mp3';
import {DayFrankness} from '../DayFrankness/DayFrankness';

Modal.setAppElement('#modal');

export const InfoModal = ({ isModal, setModal }) => {
    const [customStyles, setCustomStyles] = useState(getCustomStyles());
    const [audioPlaying, setAudioPlaying] = useState(false); // Состояние для отслеживания, играет ли музыка
    const audioRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleResize = () => {
            setCustomStyles(getCustomStyles());
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    // Функция для воспроизведения/остановки музыки
    const toggleAudio = () => {
        if (audioRef.current) {
            if (audioPlaying) {
                audioRef.current.pause(); // Останавливаем музыку
            } else {
                audioRef.current.play(); // Запускаем музыку
            }
            setAudioPlaying(!audioPlaying); // Обновляем состояние, чтобы переключить статус
        }
    };

    function getCustomStyles() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            return {
                overlay: {
                    backgroundColor: "rgba(38, 38, 38, 0.3)",
                },
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "40px 30px",
                    maxWidth: "463px",
                    maxHeight: "530px",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                },
            };
        } else {
            return {
                overlay: {
                    backgroundColor: "rgba(38, 38, 38, 0.3)",
                },
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "50px 70px",
                    maxWidth: "600px",
                    maxHeight: "600px",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                },
            };
        }
    }

// Функция для вычисления дня года
const getDayOfYear = () => {
    const now = new Date();
    // Начало года: 0-й месяц, 0-й день (это 31 декабря предыдущего года, поэтому используем 1 января)
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now - start; // разница в миллисекундах
    const oneDay = 1000 * 60 * 60 * 24; // миллисекунд в дне
    const day = Math.floor(diff / oneDay) + 1; // получаем номер дня в году (от 1)
    return day;
  };
  
  const getQuoteForToday = () => {
    const dayOfYear = getDayOfYear(); // число от 1 до 365 (или 366)
    // Если массив DayFrankness имеет ровно 365 объектов, то индекс будем брать как:
    // (номер дня - 1) для дней с 1 по 365. Если день 366, можно сделать циклически:
    const index = (dayOfYear - 1) % DayFrankness.length;
    return DayFrankness[index].text;
  };

  const todayQuote = getQuoteForToday();

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={() => {
        setModal(false);
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }}
      style={customStyles}
      contentLabel="More info modal"
    >
      <Container>
        <SvgButton
          onClick={() => {
            setModal(false);
            if (audioRef.current) {
              audioRef.current.pause();
            }
          }}
        >
          <svg width='24px' height='24px'>
            <use xlinkHref={sprite + '#icon-x'} />
          </svg>
        </SvgButton>

        {/* Кнопка для воспроизведения/остановки музыки */}
        <Button type="button" $audioPlaying={audioPlaying} onClick={toggleAudio}>
          {audioPlaying ? 'Pause Music' : 'Play Music'}
        </Button>

        <audio ref={audioRef} loop>
          <source src={bells} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </Container>

      <ModalText>
        <Title>Денне Одкровення</Title>
        <Text>{todayQuote}</Text>
      </ModalText>
    </Modal>
  );
};