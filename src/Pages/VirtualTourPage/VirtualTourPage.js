import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';
import {Tittle} from '../../components/Title/Title';
import {PhotoSlider} from '../../components/PhotoSlider/PhotoSlider';
import { Container } from './VirtualTourPage.styled';

export default function VirtualTourPage(){
    return(
        <Container>
             <Tittle title="Віртуальний тур"/>
             <VideoPlayer/>
             <Tittle title="Фотогалерея"/>
             <PhotoSlider/>
        </Container>
    )
}