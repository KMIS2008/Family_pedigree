import {ContainerHome} from "./HomePage.styled";
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Main } from '../../components/Main/Main';



export default function Home(){

return (
    <ContainerHome>
        <Sidebar />
        <Main/>
    </ContainerHome>
)}