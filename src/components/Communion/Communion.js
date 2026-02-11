import {Title, List} from './Communion.styled';
import { Outlet } from 'react-router-dom';


export const Communion=()=>{

    return(
        <div>
            <List>
                <li>
                    <Title to='evening-rules'>Вечірнє правило</Title>
                </li>
                <li>
                    <Title to='following'>Послідування до святого Причастя</Title>
                </li>
                <li>
                    <Title to='befor'>Молитви перед святим Причастям</Title>
                </li>
                <li>
                    <Title to='after'>Молитви після святого Причастя</Title>
                </li>
            </List>
            <Outlet/>
        </div>
    )
}