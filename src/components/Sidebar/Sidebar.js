import { Container, Title } from './Sidebar.styled';
import { PersonForm } from '../Form/Form';

export const Sidebar = () => {
    return (
        <Container>
            <Title>Сімейне дерево</Title>
            <PersonForm />
        </Container>
    )
}