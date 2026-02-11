import { useDispatch, useSelector } from 'react-redux';
import { checkPassword, fetchFeedback, fetchService } from '../../redux/operations';
import { selectPassword } from '../../redux/check/selects';
import { useState } from 'react';
import { Container, Input, ButtonCheck, ContainerButton, ButtonSuccess, PasswordWrapper, EyeIcon, Error, PrintIconWrapper } from './PasswordCheck.styled';
import { AnswerService } from '../../components/Answer/AnswerService';
import { selectService } from 'redux/services/selects';
import { selectFeedback } from '../../redux/feedBack/selects';
import { FaEye, FaEyeSlash, FaPrint  } from 'react-icons/fa'; // Импорт иконок
import { useLocation } from 'react-router-dom'; // Импорт useLocation
import { ScheduleOfLoturgi } from 'components/ScheduleOfServices/ScheduleOfServices';


export const PasswordCheck = () => {
    const password = useSelector(selectPassword);
    const feedback = useSelector(selectFeedback);
    const services = useSelector(selectService);


    const [showPassword, setShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [showFilter, setFilter] = useState('');
    const [showFeedback, setShowFeedback] = useState(false); // Добавлено состояние для отображения feedback
    const [errorMessage, setErrorMessage] = useState(''); 
    const [showSchedule, setShowSchedule] = useState(false);
    
    const dispatch = useDispatch();
    const location = useLocation(); // Получение текущего пути

    const handleInputChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleCheckPassword = () => {
            setErrorMessage('');
            dispatch(checkPassword(passwordValue))

            dispatch(fetchService());
            dispatch(fetchFeedback());
            setPasswordValue('')
            if (!password.success) {
                setErrorMessage('Пароль не вірний'); }
    };


    const handleFilter = (type) => {
        setFilter(type);
    };

    const handleShowFeedback = () => {
        setShowFeedback(!showFeedback); // Устанавливаем состояние для отображения feedback
    };

    const handleShowSchedule = () => {
        setShowSchedule(!showSchedule); 
    };

    const filteredData = services.filter((item) => item.type.trim() === showFilter.trim());

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

      // Функция для печати
  const handlePrint = () => {
    window.print();
  };


    return (
        <>
            <Container>
                <h3>Введіть пароль</h3>
                <PasswordWrapper>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={passwordValue}
                        onChange={handleInputChange}
                        placeholder="Введіть пароль"
                    />
                    <EyeIcon onClick={togglePasswordVisibility}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </EyeIcon>
                </PasswordWrapper>

                <ButtonCheck onClick={handleCheckPassword}>Перевірити пароль</ButtonCheck>

                {errorMessage && !password.success &&(
                    <Error>{errorMessage}</Error>
                )}

                {/* {!password.success && (
                   <Error >Пароль не вірний</Error>
                )} */}

                {/* Проверяем текущий путь и успешность проверки пароля */}
                {password.success && location.pathname === '/online-services' && (
                    <ContainerButton>
                        <ButtonSuccess onClick={() => handleFilter("За здоров'я")}>
                            Записки за здоров'я
                        </ButtonSuccess>
                        <ButtonSuccess onClick={() => handleFilter("За упокій")}>
                            Записки за упокій
                        </ButtonSuccess>
                        <ButtonSuccess onClick={() => handleFilter("сорокоуст за здоров’я")}>
                        Сорокоуст за здоров’я
                        </ButtonSuccess>
                        <ButtonSuccess onClick={() => handleFilter("сорокоуст за упокій")}>
                        Сорокоуст за упокій
                        </ButtonSuccess>
                        <ButtonSuccess onClick={() => handleFilter("молебень на здоров’я та іншу потребу")}>
                        Молебень на здоров’я та іншу потребу
                        </ButtonSuccess>

                    </ContainerButton>
                )}

                {password.success && location.pathname === '/feedback' && (
                    <ContainerButton>
                        <ButtonSuccess onClick={handleShowFeedback}>
                        Листи
                        </ButtonSuccess>
                    </ContainerButton>
                )}

                {password.success && location.pathname === '/schedule' && (
                    <ContainerButton>
                        <ButtonSuccess onClick={handleShowSchedule}>
                        Розклад богослужінь
                        </ButtonSuccess>
                    </ContainerButton>
                )}

              {(showFilter || showFeedback || showSchedule) && (
                <div id="printableArea">
                    {showFilter && <AnswerService services={filteredData} />}
                    {showFeedback && feedback && <AnswerService services={feedback} />}
                    {showSchedule && <ScheduleOfLoturgi />}
                </div>
               )}

                {/* Если пароль введён правильно и отображаются данные, показываем иконку печати */}
        {password.success && (showFilter || showFeedback) && (
          <PrintIconWrapper onClick={handlePrint}>
            <FaPrint size={24} style={{ cursor: 'pointer' }} />
          </PrintIconWrapper>
        )}
            </Container>
        </>
    );
};