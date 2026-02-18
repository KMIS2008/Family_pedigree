import styled from 'styled-components';

// Контейнер додатку
export const AppContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding: 20px;
`;

// Заголовок
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Заголовок
export const Title = styled.h1`
  margin: 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// Група кнопок
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

// Кнопка
export const Button = styled.button`
  padding: 12px 24px;
  background: ${props => {
    if (props.variant === 'primary') return '#667eea';
    if (props.variant === 'danger') return '#f44336';
    if (props.variant === 'success') return '#4CAF50';
    return '#f0f0f0';
  }};
  color: ${props => 
    props.variant === 'primary' || 
    props.variant === 'danger' || 
    props.variant === 'success' 
      ? 'white' 
      : '#333'
  };
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Перемикач видів
export const ViewToggle = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Кнопка перемикача
export const ViewButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${props => props.active ? '#667eea' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: ${props => props.active ? '#667eea' : '#f0f0f0'};
  }
`;

// Модальне вікно форми
export const FormModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Контейнер форми
export const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Кастомний scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

// Кнопка закриття модального вікна
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    background: #f44336;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Контейнер списку
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Картка людини в списку
export const PersonCard = styled.div`
  background: white;
  border: 2px solid ${props => props.gender === 'male' ? '#4a90e2' : '#e24a90'};
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

// Фото в картці
export const CardPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 10px;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Ініціал в картці
export const CardInitial = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  color: white;
  font-size: 32px;
  font-weight: bold;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Ім'я в картці
export const CardName = styled.h3`
  text-align: center;
  margin: 10px 0;
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;

// Дати в картці
export const CardDates = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 5px 0;
`;

// Блок зв'язків в картці
export const CardRelations = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  font-size: 13px;

  strong {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }

  div {
    margin: 3px 0;
    color: #666;
  }
`;

// Кнопки дій в картці
export const CardActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

// Панель статистики
export const StatsBar = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// Елемент статистики
export const StatItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background: ${props => props.color || '#f9f9f9'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .label {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .value {
    font-size: 32px;
    font-weight: bold;
    color: #333;
  }

  @media (max-width: 768px) {
    .value {
      font-size: 24px;
    }
  }
`;

// Індикатор завантаження
export const LoadingContainer = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 24px;
  color: #666;

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Порожнє повідомлення
export const EmptyState = styled.div`
  text-align: center;
  padding: 50px 20px;
  color: #999;
  font-size: 18px;

  .icon {
    font-size: 64px;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  .message {
    font-size: 20px;
    margin-bottom: 10px;
    color: #666;
  }

  .submessage {
    font-size: 16px;
    color: #999;
  }
`;

// Повідомлення про помилку
export const ErrorMessage = styled.div`
  background: #fff3e0;
  border-left: 4px solid #ff9800;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  
  .title {
    font-weight: 600;
    color: #f57c00;
    margin-bottom: 5px;
  }

  .description {
    color: #666;
    font-size: 14px;
  }
`;

// Повідомлення про успіх
export const SuccessMessage = styled.div`
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .title {
    font-weight: 600;
    color: #2e7d32;
    margin-bottom: 5px;
  }

  .description {
    color: #666;
    font-size: 14px;
  }
`;

// Контейнер для режиму дерева
export const TreeViewContainer = styled.div`
  height: calc(100vh - 300px);
  min-height: 500px;
`;

// Контейнер для режиму списку
export const ListViewContainer = styled.div`
  min-height: 400px;
`;