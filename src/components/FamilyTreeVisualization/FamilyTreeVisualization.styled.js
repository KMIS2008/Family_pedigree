import styled from 'styled-components';

// Основний контейнер дерева
export const TreeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
  overflow: auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

// Canvas для малювання дерева
export const TreeCanvas = styled.div`
  position: relative;
  min-width: 2000px;
  min-height: 1500px;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

// SVG canvas для ліній
export const SvgCanvas = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

// Картка члена родини
export const PersonCard = styled.div`
  position: absolute;
  background: white;
  border: 3px solid ${props => props.gender === 'male' ? '#4a90e2' : '#e24a90'};
  border-radius: 12px;
  padding: 15px;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: move;
  transition: all 0.3s ease;
  z-index: 2;
  user-select: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  &.dragging {
    opacity: 0.8;
    z-index: 1000;
  }
`;

// Фото профілю
export const PersonPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 10px;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Ініціал (коли немає фото)
export const PersonInitial = styled.div`
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

// Ім'я людини
export const PersonName = styled.h3`
  text-align: center;
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #333;
  font-weight: 600;
`;

// Дати народження/смерті
export const PersonDates = styled.div`
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;
`;

// Блок відношень
export const PersonRelations = styled.div`
  background: #f9f9f9;
  padding: 8px;
  border-radius: 6px;
  font-size: 11px;
  margin-top: 10px;
  
  div {
    margin: 3px 0;
    display: flex;
    align-items: center;
    gap: 5px;
    line-height: 1.4;
  }
`;

// Коментарі
export const PersonComments = styled.div`
  margin-top: 8px;
  font-size: 10px;
  color: #888;
  font-style: italic;
  text-align: center;
  line-height: 1.3;
`;

// Панель кнопок керування
export const ControlButtons = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 10;
`;

// Кнопка керування
export const ControlButton = styled.button`
  width: 45px;
  height: 45px;
  border: none;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Легенда
export const Legend = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-size: 12px;

  h4 {
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #667eea;
    font-weight: 600;
  }
`;

// Елемент легенди
export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`;

// Зразок лінії для легенди
export const LineLabel = styled.div`
  width: 30px;
  height: 3px;
  
  &.parent {
    background: #667eea;
  }
  
  &.spouse {
    background: #e24a90;
    border-top: 2px dashed #e24a90;
    height: 0;
  }
`;

// Зразок кольору для легенди
export const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.color || '#ccc'};
  border-radius: 4px;
`;

// Порожнє повідомлення
export const EmptyMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  z-index: 5;

  .icon {
    font-size: 64px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 20px;
    font-weight: normal;
    opacity: 0.9;
  }
`;

// Tooltip (підказка при наведенні)
export const Tooltip = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  pointer-events: none;
  z-index: 1001;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.85);
  }
`;

// Індикатор завантаження
export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .text {
    color: white;
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// Мітка масштабу
export const ZoomLabel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: white;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

// Контекстне меню
export const ContextMenu = styled.div`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow: hidden;
  min-width: 150px;
`;

// Пункт контекстного меню
export const ContextMenuItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }

  &:active {
    background: #e0e0e0;
  }

  &.danger {
    color: #f44336;
  }
`;

// Роздільник в меню
export const MenuDivider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 4px 0;
`;