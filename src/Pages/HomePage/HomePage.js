import {ContainerHome, Image} from "./HomePage.styled";
import {Tittle} from '../../components/Title/Title';
import { AboutSecond } from "components/About/AboutSecond";
import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';
import { Link} from "react-router-dom";
import {PayDonation} from '../../components/Donation/PayDonation';
import {ServiceHighlighter} from '../../components/Schedule/Schedule';
import {SacramentsHome} from '../../components/Schedule/SacramentsHome';
import {Views} from '../../components/Views/Views';
import {useSelector } from "react-redux";
import { selectCount } from "redux/visits/selects";
// import candle from '../../images/15.jpg';
import player from '../../images/31.jpg';
// import feedback from '../../images/8.jpg';
// import choir from '../../images/Choir.jpg';
// import { AllPrayer } from 'components/AllPrayer/AllPrayer';
import {Main} from '../../components/Main/Main';
import { InfoModal } from "components/Modal/Modal";
import { useEffect, useState } from "react";
import { Contacts } from "components/Contacts/Contacts";
import { AudioTittle } from 'components/AudioTittle/AudioTittle';

import { initHomePage } from 'components/Heart/Heart';
// import { speakTextResponsive } from '../../utils/textToSpeech';
// import { speakTextVoiceRSS } from '../../utils/vocieRSS';


export default function Home(){

  const [isModal, setModal]=useState(false)
  
     const count = useSelector(selectCount);

//      const text= "ХРАМ – це складна рукотворна святиня, яка у земних формах символічно зображує неземне, у видимих – невидиме. Умовно кожен православний храм поділяється на три основних частини: притвор, середню частину та вівтар. Три частини – символ Триєдиного Бога. Трьохскладова будова храму відома ще з часів Старого Завіту і її дотримуються досі, незалежно від форм та розмірів храму. Вівтар повинен бути орієнтованим на схід, де сходить сонце, це символізує Божественне Світло, рай.";

//      const handleSpeak = () => {
//                speakTextResponsive(text);      
//   };


useEffect(()=>{
     setModal(true);
     initHomePage()
},[])

return (
    <ContainerHome>
   
        <Tittle  title="Головна"/>
        <Main />
          
        <Link to={'/about-us'}>
             <Tittle title="Про нас"/>
        </Link>
        <AboutSecond />   
    
        <Link to={'/schedule'}>
             <AudioTittle >Богослужіння</AudioTittle>
        </Link>
        <ServiceHighlighter />
        <SacramentsHome/>

        <Link to={'/virtual-tour'}>
             <Tittle title="Віртуальний тур"/>
        </Link>
        <VideoPlayer />
    
        <Link to={'/prayer'}>
             <Tittle title="Молитви"/>
        </Link>
        <Image src={player} alt="player"/>

        <Link to={'/donation'}>
             <Tittle title="Пожертва"/>
        </Link>
        <PayDonation/>

       <Tittle title="Контакти"/>
       <Contacts />
    
          <Views count={count} />
          
          {/* <button onClick={handleSpeak}>Озвучити текст</button> */}

          <InfoModal isModal={isModal} setModal={setModal} />
          
          

    </ContainerHome>
)}