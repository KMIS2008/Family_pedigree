import React, { useRef, useEffect, useState } from 'react';
import {
  TreeContainer,
  TreeCanvas,
  SvgCanvas,
  PersonCard,
  PersonPhoto,
  PersonInitial,
  PersonName,
  PersonDates,
  PersonRelations,
  PersonComments,
  ControlButtons,
  ControlButton,
  Legend,
  LegendItem,
  LineLabel,
  ColorBox,
  EmptyMessage,
  ZoomLabel
} from './FamilyTreeVisualization.styled';

export const FamilyTreeVisualization = ({ 
  people = [], 
  onPersonMove,
  onPersonClick 
}) => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [draggedPerson, setDraggedPerson] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [lines, setLines] = useState([]);

  // Обчислення ліній зв'язків
  useEffect(() => {
    const newLines = [];

    people.forEach(person => {
      // Лінії до батьків
      if (person.parent1) {
        const parent = people.find(p => (p._id || p.id) === person.parent1);
        if (parent) {
          newLines.push({
            type: 'parent',
            from: { x: parent.x + 100, y: parent.y + 140 },
            to: { x: person.x + 100, y: person.y },
            color: '#667eea',
            width: 2
          });
        }
      }

      if (person.parent2) {
        const parent = people.find(p => (p._id || p.id) === person.parent2);
        if (parent) {
          newLines.push({
            type: 'parent',
            from: { x: parent.x + 100, y: parent.y + 140 },
            to: { x: person.x + 100, y: person.y },
            color: '#667eea',
            width: 2
          });
        }
      }

      // Лінії до подружжя
      if (person.spouse) {
        const spouse = people.find(p => (p._id || p.id) === person.spouse);
        const personId = person._id || person.id;
        const spouseId = spouse ? (spouse._id || spouse.id) : null;
        
        if (spouse && personId < spouseId) {
          newLines.push({
            type: 'spouse',
            from: { x: person.x + 200, y: person.y + 70 },
            to: { x: spouse.x, y: spouse.y + 70 },
            color: '#e24a90',
            width: 2,
            dashed: true
          });
        }
      }
    });

    setLines(newLines);
  }, [people]);

  // Обробка перетягування
  const handleMouseDown = (e, person) => {
    if (e.target.closest('.no-drag')) return;

    const card = e.currentTarget;
  
    const canvas = canvasRef.current;
    const canvasRect = canvas.getBoundingClientRect();

    setDraggedPerson(person);
    setDragOffset({
      x: (e.clientX - canvasRect.left) / scale - person.x,
      y: (e.clientY - canvasRect.top) / scale - person.y
    });

    card.classList.add('dragging');
  };

  const handleMouseMove = (e) => {
    if (!draggedPerson) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const newX = (e.clientX - rect.left) / scale - dragOffset.x;
    const newY = (e.clientY - rect.top) / scale - dragOffset.y;

    if (onPersonMove) {
      onPersonMove(draggedPerson._id || draggedPerson.id, newX, newY);
    }
  };

  const handleMouseUp = () => {
    if (draggedPerson) {
      const card = document.querySelector('.dragging');
      if (card) {
        card.classList.remove('dragging');
      }
      setDraggedPerson(null);
    }
  };

  // Масштабування
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  // Автоматичне розміщення
  const handleAutoLayout = () => {
    const roots = people.filter(p => !p.parent1 && !p.parent2);
    let currentY = 50;
    const generationGap = 250;
    const siblingGap = 250;

    const layoutGeneration = (parentIds, y) => {
      const children = people.filter(p => 
        parentIds.includes(p.parent1) || parentIds.includes(p.parent2)
      );

      if (children.length === 0) return;

      let currentX = 50;
      const childIds = [];

      children.forEach((child, index) => {
        if (onPersonMove) {
          onPersonMove(child._id || child.id, currentX, y);
        }
        currentX += siblingGap;
        childIds.push(child._id || child.id);
      });

      layoutGeneration(childIds, y + generationGap);
    };

    // Розміщуємо корені
    let rootX = 50;
    const rootIds = [];
    roots.forEach(root => {
      if (onPersonMove) {
        onPersonMove(root._id || root.id, rootX, currentY);
      }
      rootX += siblingGap;
      rootIds.push(root._id || root.id);
    });

    // Розміщуємо дітей
    layoutGeneration(rootIds, currentY + generationGap);
  };

  // Отримати ім'я людини за ID
  const getPersonName = (personId) => {
    const person = people.find(p => (p._id || p.id) === personId);
    return person ? `${person.firstName} ${person.lastName}` : '';
  };

  // Малювання ліній SVG
  const renderLines = () => {
    return lines.map((line, index) => (
      <g key={index}>
        {line.type === 'parent' ? (
          <line
            x1={line.from.x}
            y1={line.from.y}
            x2={line.to.x}
            y2={line.to.y}
            stroke={line.color}
            strokeWidth={line.width}
            strokeLinecap="round"
          />
        ) : (
          <line
            x1={line.from.x}
            y1={line.from.y}
            x2={line.to.x}
            y2={line.to.y}
            stroke={line.color}
            strokeWidth={line.width}
            strokeDasharray="5,5"
            strokeLinecap="round"
          />
        )}
      </g>
    ));
  };

  // Рендер картки людини
  const renderPersonCard = (person) => {
    const personId = person._id || person.id;
    
    return (
      <PersonCard
        key={personId}
        gender={person.gender}
        style={{
          left: `${person.x}px`,
          top: `${person.y}px`
        }}
        onMouseDown={(e) => handleMouseDown(e, person)}
        onClick={() => onPersonClick && onPersonClick(person)}
      >
        {/* Фото або ініціал */}
        {person.photo ? (
          <PersonPhoto src={person.photo} alt={person.firstName} />
        ) : (
          <PersonInitial>
            {person.firstName.charAt(0).toUpperCase()}
          </PersonInitial>
        )}

        {/* Ім'я */}
        <PersonName>
          {person.firstName} {person.lastName}
          {person.middleName && (
            <div style={{ fontSize: '12px', color: '#888', marginTop: '2px', fontWeight: 'normal' }}>
              {person.middleName}
            </div>
          )}
        </PersonName>

        {/* Дати */}
        <PersonDates>
          {person.birthDate ? new Date(person.birthDate).getFullYear() : '?'}
          {person.deathDate && ` - ${new Date(person.deathDate).getFullYear()}`}
        </PersonDates>

        {/* Зв'язки */}
        <PersonRelations className="no-drag">
          {person.parent1 && (
            <div>
              <span>👤</span>
              <span style={{ fontSize: '10px' }}>
                {getPersonName(person.parent1)}
              </span>
            </div>
          )}
          {person.parent2 && (
            <div>
              <span>👤</span>
              <span style={{ fontSize: '10px' }}>
                {getPersonName(person.parent2)}
              </span>
            </div>
          )}
          {person.spouse && (
            <div>
              <span>💑</span>
              <span style={{ fontSize: '10px' }}>
                {getPersonName(person.spouse)}
              </span>
            </div>
          )}
        </PersonRelations>

        {/* Коментарі */}
        {person.comments && (
          <PersonComments className="no-drag">
            {person.comments.substring(0, 50)}
            {person.comments.length > 50 && '...'}
          </PersonComments>
        )}
      </PersonCard>
    );
  };

  return (
    <TreeContainer>
      {/* Кнопки керування */}
      <ControlButtons>
        <ControlButton onClick={handleZoomIn} title="Збільшити">
          🔍+
        </ControlButton>
        <ControlButton onClick={handleZoomOut} title="Зменшити">
          🔍-
        </ControlButton>
        <ControlButton onClick={handleResetZoom} title="Скинути масштаб">
          ↺
        </ControlButton>
        <ControlButton onClick={handleAutoLayout} title="Автоматичне розміщення">
          📐
        </ControlButton>
      </ControlButtons>

      {/* Легенда */}
      <Legend>
        <h4>📋 Легенда</h4>
        <LegendItem>
          <LineLabel className="parent" />
          <span>Батьки → Діти</span>
        </LegendItem>
        <LegendItem>
          <LineLabel className="spouse" />
          <span>Подружжя</span>
        </LegendItem>
        <LegendItem>
          <ColorBox color="#4a90e2" />
          <span>Чоловік</span>
        </LegendItem>
        <LegendItem>
          <ColorBox color="#e24a90" />
          <span>Жінка</span>
        </LegendItem>
      </Legend>

      {/* Мітка масштабу */}
      <ZoomLabel>
        {Math.round(scale * 100)}%
      </ZoomLabel>

      {/* Canvas дерева */}
      <TreeCanvas
        ref={canvasRef}
        style={{ transform: `scale(${scale})`, transformOrigin: '0 0' }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* SVG для ліній */}
        <SvgCanvas>
          {renderLines()}
        </SvgCanvas>

        {/* Картки людей */}
        {people.map(person => renderPersonCard(person))}

        {/* Повідомлення якщо немає людей */}
        {people.length === 0 && (
          <EmptyMessage>
            <div className="icon">🌳</div>
            <div className="title">Додайте першого члена родини,</div>
            <div className="subtitle">щоб почати будувати дерево</div>
          </EmptyMessage>
        )}
      </TreeCanvas>
    </TreeContainer>
  );
};