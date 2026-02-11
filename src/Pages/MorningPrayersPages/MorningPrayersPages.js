import { Tittle } from 'components/Title/Title';
import {MorningPrayers} from '../../components/MorningPrayers/MorningPrayers';
import {Container} from './MorningPrayersPages.styled';

export default function MorningPrayersPages(){
    return<Container>
             <Tittle title={'Ранкові молитви'}></Tittle>
             <MorningPrayers/>
          </Container>
}