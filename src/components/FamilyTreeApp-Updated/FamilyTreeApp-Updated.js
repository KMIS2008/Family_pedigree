import React, { useState, useEffect } from 'react';
import { PersonForm } from './PersonForm';
import { FamilyTreeVisualization } from './FamilyTreeVisualization-Clean';
import axios from 'axios';
import {
  AppContainer,
  Header,
  Title,
  ButtonGroup,
  Button,
  ViewToggle,
  ViewButton,
  FormModal,
  FormContainer,
  CloseButton,
  ListContainer,
  PersonCard,
  CardPhoto,
  CardInitial,
  CardName,
  CardDates,
  CardRelations,
  CardActions,
  StatsBar,
  StatItem,
  LoadingContainer,
  EmptyState,
  TreeViewContainer,
  ListViewContainer
} from './FamilyTreeApp.styled';

const API_URL = 'http://localhost:3000/api';

export const FamilyTreeApp = () => {
  // Стан
  const [people, setPeople] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('tree'); // 'tree' або 'list'
  const [stats, setStats] = useState(null);

  // Завантаження даних при старті
  useEffect(() => {
    loadPeople();
    loadStats();
  }, []);

  // Завантаження списку людей
  const loadPeople = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/people`);
      setPeople(response.data.data || []);
    } catch (error) {
      console.error('Помилка завантаження даних:', error);
      alert('Помилка підключення до сервера');
    } finally {
      setLoading(false);
    }
  };

  // Завантаження статистики
  const loadStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`);
      setStats(response.data.data);
    } catch (error) {
      console.error('Помилка завантаження статистики:', error);
    }
  };

  // Додавання нової людини
  const handleAddPerson = async (personData) => {
    try {
      if (personData.photo && personData.photo instanceof File) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const dataToSend = { ...personData, photo: reader.result };
          const response = await axios.post(`${API_URL}/people`, dataToSend);
          
          if (personData.spouse) {
            await axios.put(`${API_URL}/people/${personData.spouse}`, {
              spouse: response.data.data._id
            });
          }
          
          await loadPeople();
          await loadStats();
          setIsFormVisible(false);
          alert('✅ Член родини успішно доданий!');
        };
        reader.readAsDataURL(personData.photo);
      } else {
        const response = await axios.post(`${API_URL}/people`, {
          ...personData,
          photo: personData.photo || null
        });
        
        if (personData.spouse) {
          await axios.put(`${API_URL}/people/${personData.spouse}`, {
            spouse: response.data.data._id
          });
        }
        
        await loadPeople();
        await loadStats();
        setIsFormVisible(false);
        alert('✅ Член родини успішно доданий!');
      }
    } catch (error) {
      console.error('Помилка збереження:', error);
      alert('❌ Помилка при збереженні даних');
    }
  };

  // Оновлення існуючої людини
  const handleUpdatePerson = async (personData) => {
    try {
      if (personData.photo && personData.photo instanceof File) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          await axios.put(`${API_URL}/people/${editingPerson._id}`, {
            ...personData,
            photo: reader.result
          });
          
          if (personData.spouse && personData.spouse !== editingPerson.spouse) {
            if (editingPerson.spouse) {
              await axios.put(`${API_URL}/people/${editingPerson.spouse}`, {
                spouse: null
              });
            }
            await axios.put(`${API_URL}/people/${personData.spouse}`, {
              spouse: editingPerson._id
            });
          }
          
          await loadPeople();
          await loadStats();
          setIsFormVisible(false);
          setEditingPerson(null);
          alert('✅ Дані успішно оновлені!');
        };
        reader.readAsDataURL(personData.photo);
      } else {
        await axios.put(`${API_URL}/people/${editingPerson._id}`, personData);
        
        if (personData.spouse && personData.spouse !== editingPerson.spouse) {
          if (editingPerson.spouse) {
            await axios.put(`${API_URL}/people/${editingPerson.spouse}`, {
              spouse: null
            });
          }
          await axios.put(`${API_URL}/people/${personData.spouse}`, {
            spouse: editingPerson._id
          });
        }
        
        await loadPeople();
        await loadStats();
        setIsFormVisible(false);
        setEditingPerson(null);
        alert('✅ Дані успішно оновлені!');
      }
    } catch (error) {
      console.error('Помилка оновлення:', error);
      alert('❌ Помилка при оновленні даних');
    }
  };

  // Видалення людини
  const handleDeletePerson = async (personId) => {
    if (!window.confirm('Ви впевнені, що хочете видалити цього члена родини?')) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/people/${personId}`);
      await loadPeople();
      await loadStats();
      alert('✅ Член родини видалений');
    } catch (error) {
      console.error('Помилка видалення:', error);
      alert('❌ Помилка при видаленні');
    }
  };

  // Переміщення людини на дереві
  const handlePersonMove = async (personId, x, y) => {
    // Оновити локально для миттєвої реакції
    setPeople(prev => prev.map(p => 
      (p._id || p.id) === personId ? { ...p, x, y } : p
    ));

    // Оновити на сервері
    try {
      await axios.put(`${API_URL}/people/${personId}`, { x, y });
    } catch (error) {
      console.error('Помилка оновлення позиції:', error);
    }
  };

  // Клік на людину (відкрити форму редагування)
  const handlePersonClick = (person) => {
    setEditingPerson(person);
    setIsFormVisible(true);
  };

  // Отримати ім'я людини за ID
  const getPersonName = (personId) => {
    const person = people.find(p => (p._id || p.id) === personId);
    return person ? `${person.firstName} ${person.lastName}` : 'Невідомо';
  };

  // Відкрити форму додавання
  const handleOpenAddForm = () => {
    setEditingPerson(null);
    setIsFormVisible(true);
  };

  // Закрити форму
  const handleCloseForm = () => {
    setIsFormVisible(false);
    setEditingPerson(null);
  };

  // Рендер картки людини в списку
  const renderPersonCard = (person) => (
    <PersonCard key={person._id} gender={person.gender}>
      {person.photo ? (
        <CardPhoto src={person.photo} alt={person.firstName} />
      ) : (
        <CardInitial>
          {person.firstName.charAt(0).toUpperCase()}
        </CardInitial>
      )}

      <CardName>
        {person.firstName} {person.lastName}
      </CardName>

      <CardDates>
        {person.birthDate ? new Date(person.birthDate).toLocaleDateString('uk-UA') : '?'}
        {person.deathDate && ` - ${new Date(person.deathDate).toLocaleDateString('uk-UA')}`}
      </CardDates>

      <CardRelations>
        <strong>👨‍👩‍👧‍👦 Зв'язки:</strong>
        {person.parent1 && <div>👤 {getPersonName(person.parent1)}</div>}
        {person.parent2 && <div>👤 {getPersonName(person.parent2)}</div>}
        {person.spouse && <div>💑 {getPersonName(person.spouse)}</div>}
        {!person.parent1 && !person.parent2 && !person.spouse && (
          <div style={{ color: '#999' }}>Зв'язків немає</div>
        )}
      </CardRelations>

      <CardActions>
        <Button
          style={{ flex: 1 }}
          variant="success"
          onClick={() => handlePersonClick(person)}
        >
          ✏️ Редагувати
        </Button>
        <Button
          style={{ flex: 1 }}
          variant="danger"
          onClick={() => handleDeletePerson(person._id)}
        >
          🗑️ Видалити
        </Button>
      </CardActions>
    </PersonCard>
  );

  // Показати завантаження
  if (loading) {
    return (
      <AppContainer>
        <LoadingContainer>
          <div className="spinner" />
          <div>Завантаження... 🌳</div>
        </LoadingContainer>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      {/* Заголовок */}
      <Header>
        <Title>🌳 Родинне дерево</Title>
        <ButtonGroup>
          <ViewToggle>
            <ViewButton 
              active={view === 'tree'} 
              onClick={() => setView('tree')}
            >
              🌳 Дерево
            </ViewButton>
            <ViewButton 
              active={view === 'list'} 
              onClick={() => setView('list')}
            >
              📋 Список
            </ViewButton>
          </ViewToggle>
          <Button variant="primary" onClick={handleOpenAddForm}>
            ➕ Додати члена родини
          </Button>
        </ButtonGroup>
      </Header>

      {/* Статистика */}
      {stats && (
        <StatsBar>
          <StatItem color="#e3f2fd">
            <div className="label">Всього людей</div>
            <div className="value">{stats.totalPeople}</div>
          </StatItem>
          <StatItem color="#e8f5e9">
            <div className="label">Чоловіків</div>
            <div className="value">{stats.males} 👨</div>
          </StatItem>
          <StatItem color="#fce4ec">
            <div className="label">Жінок</div>
            <div className="value">{stats.females} 👩</div>
          </StatItem>
          <StatItem color="#fff3e0">
            <div className="label">З фото</div>
            <div className="value">{stats.withPhotos} 📸</div>
          </StatItem>
        </StatsBar>
      )}

      {/* Режим дерева */}
      {view === 'tree' && (
        <TreeViewContainer>
          <FamilyTreeVisualization
            people={people}
            onPersonMove={handlePersonMove}
            onPersonClick={handlePersonClick}
          />
        </TreeViewContainer>
      )}

      {/* Режим списку */}
      {view === 'list' && (
        <ListViewContainer>
          {people.length > 0 ? (
            <ListContainer>
              {people.map(person => renderPersonCard(person))}
            </ListContainer>
          ) : (
            <EmptyState>
              <div className="icon">🌳</div>
              <div className="message">Ще немає жодного члена родини</div>
              <div className="submessage">Додайте першого, щоб почати!</div>
            </EmptyState>
          )}
        </ListViewContainer>
      )}

      {/* Модальне вікно форми */}
      {isFormVisible && (
        <FormModal onClick={handleCloseForm}>
          <FormContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseForm}>✕</CloseButton>
            <PersonForm
              existingPeople={people}
              onSubmit={editingPerson ? handleUpdatePerson : handleAddPerson}
              initialData={editingPerson ? {
                ...editingPerson,
                id: editingPerson._id,
                parent1: editingPerson.parent1 || '',
                parent2: editingPerson.parent2 || '',
                spouse: editingPerson.spouse || ''
              } : null}
            />
          </FormContainer>
        </FormModal>
      )}
    </AppContainer>
  );
};